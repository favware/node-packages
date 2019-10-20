import prism from 'prism-media';
import { Readable } from 'stream';
import ytdl, { downloadOptions as YTDLDownloadOptions, videoFormat as YTDLVideoFormat } from 'ytdl-core';

/** Custom type for ytdl videoFormat to include missing property */
export type PrismVideoFormat = YTDLVideoFormat & {
  /** The sample rate of the audio format */
  audio_sample_rate?: string;
};

/**
 * @param  format Video format to check
 * @return Whether the video format has a supported format
 */
const filter = (format: PrismVideoFormat): boolean => {
  return format.audioEncoding === 'opus' &&
    format.container === 'webm' &&
    Number(format.audio_sample_rate) === 48000;
};

/**
 * @param formats List of formats to search
 * @return Best determined format available for the video stream
 */
const nextBestFormat = (formats: PrismVideoFormat[]): PrismVideoFormat => {
  formats = formats
    .filter(format => format.audioBitrate)
    .sort((a, b) => b.audioBitrate - a.audioBitrate);

  return formats.find(format => !format.bitrate) || formats[0];
};

/**
 * @param url YouTube Video URL that should be played
 * @param options Any extra options to pass to ytdl, see {@link https://github.com/fent/node-ytdl-core/#ytdlurl-options}
 * @return The playing song in a readable stream, see {@link https://nodejs.org/api/stream.html#stream_class_stream_readable | NodeJS#ReadableStream}
 */
export const play = async (url: string, options: YTDLDownloadOptions = {}): Promise<Readable | prism.opus.Encoder> => {
  const info = await ytdl.getInfo(url);

  // Prefer opus
  const format = info.formats.find(filter);
  const canDemux = format && Number(info.length_seconds) !== 0;
  if (canDemux) options = { ...options, filter };
  else if (Number(info.length_seconds) !== 0) options = { ...options, filter: 'audioonly' };
  if (canDemux) {
    const demuxer = new prism.opus.WebmDemuxer();

    return ytdl.downloadFromInfo(info, options).pipe(demuxer).on('end', () => demuxer.destroy());
  }

  const transcoder = new prism.FFmpeg({
    args: [
      '-reconnect', '1',
      '-reconnect_streamed', '1',
      '-reconnect_delay_max', '5',
      '-i', nextBestFormat(info.formats).url,
      '-analyzeduration', '0',
      '-loglevel', '0',
      '-f', 's16le',
      '-ar', '48000',
      '-ac', '2'
    ],
  });
  const opus = new prism.opus.Encoder({ frameSize: 960, channels: 2, rate: 48000 });
  const stream = transcoder.pipe(transcoder).pipe(opus);

  stream.on('close', () => {
    transcoder.destroy();
    opus.destroy();
  });

  return stream;
};

export default play;
export {
  chooseFormat, downloadFromInfo, downloadOptions,
  filterFormats, getBasicInfo, getInfo,
  getURLVideoID, getVideoID, relatedVideo,
  validateID, validateURL, videoFormat,
  videoInfo
} from 'ytdl-core';