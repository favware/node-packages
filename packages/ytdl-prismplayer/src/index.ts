import prism from 'prism-media';
import { Readable } from 'stream';
import ytdl, {
  downloadOptions as YTDLDownloadOptions,
  videoFormat as YTDLVideoFormat,
  videoInfo as YTDLVideoInfo
} from 'ytdl-core';

/** Custom type for ytdl videoFormat to include missing property */
export interface PrismVideoFormat extends YTDLVideoFormat, YTDLVideoInfo {
  /** The sample rate of the audio format */
  audio_sample_rate?: string;
  /** The type of audio encoding for the stream */
  audioEncoding: 'mp3' | 'vorbis' | 'aac' | 'opus' | 'flac';
  /** Overwrite formats to return PrismVideoFormat */
  formats: PrismVideoFormat[];
}

/** Options for ytdl-prismplayer */
export interface YtdlPrismPlayerOptions {
  preferredFormat: 'opus' | 'vorbis';
}

/** Filters out formats for opus encoded streams */
const filter = (format: PrismVideoFormat) =>
  format.audioEncoding === 'opus' && format.container === 'webm' && Number(format.audio_sample_rate) === 48000;

/** Filters out formats for vorbis encoded streams */
const filterVorbis = (format: PrismVideoFormat) => format.audioEncoding === 'vorbis' && format.container === 'webm';

/**
 * @param formats List of formats to search
 * @return Best determined format available for the video stream
 */
const nextBestFormat = (formats: PrismVideoFormat[]): PrismVideoFormat => {
  formats = formats.filter((format) => format.bitrate).sort((a, b) => Number(b.bitrate) - Number(a.bitrate));

  return formats.find((format) => !format.bitrate) || formats[0];
};

/**
 * @param url YouTube Video URL that should be played
 * @param ytdlOptions Any extra options to pass to ytdl, see {@link https://github.com/fent/node-ytdl-core/#ytdlurl-options | ytdl options}
 * @return The playing song in a readable stream, see {@link https://nodejs.org/api/stream.html#stream_class_stream_readable | NodeJS#ReadableStream}
 * @example
 * ```js
 * // Defaults to opus
 * async function play(connection, url) {
 *   connection.play(await ytdl(url}), {
 *     type: 'opus'
 *   });
 * }
 *
 * // Or with vorbis:
 * async function play(connection, url) {
 *   connection.play(await ytdl(url, {}, { preferredFormat: 'vorbis' }), {
 *     type: 'opus'
 *   });
 * }
 * ```
 */
export const play = async (
  url: string,
  ytdlOptions: YTDLDownloadOptions = {},
  prismPlayerOptions: YtdlPrismPlayerOptions = { preferredFormat: 'opus' }
): Promise<Readable | prism.opus.Encoder> => {
  const info = ((await ytdl.getInfo(url)) as unknown) as PrismVideoFormat;
  const shouldUseVorbis = prismPlayerOptions.preferredFormat === 'vorbis';

  ytdlOptions = { ...ytdlOptions, filter: shouldUseVorbis ? undefined : 'audioonly' };

  const format = info.formats.find(shouldUseVorbis ? filterVorbis : filter);
  const canDemux = format && Number(info.length_seconds) !== 0;

  if (canDemux) {
    if (shouldUseVorbis) {
      const demuxer = new prism.vorbis.WebmDemuxer();
      const transformer = new prism.opus.OggDemuxer();

      return ytdl
        .downloadFromInfo(info, ytdlOptions)
        .pipe(demuxer)
        .pipe(transformer)
        .on('end', () => demuxer.destroy());
    }
    const demuxer = new prism.opus.WebmDemuxer();

    return ytdl
      .downloadFromInfo(info, ytdlOptions)
      .pipe(demuxer)
      .on('end', () => demuxer.destroy());
  }

  const vorbisPrismArgs = shouldUseVorbis ? ['-b:a', '192k'] : [];
  const transcoder = new prism.FFmpeg({
    args: [
      '-reconnect',
      '1',
      '-reconnect_streamed',
      '1',
      '-reconnect_delay_max',
      '5',
      '-i',
      nextBestFormat(info.formats).url,
      '-analyzeduration',
      '0',
      '-loglevel',
      '0',
      '-f',
      's16le',
      '-ar',
      '48000',
      '-ac',
      '2',
      ...vorbisPrismArgs
    ]
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
  chooseFormat,
  downloadFromInfo,
  downloadOptions,
  filterFormats,
  getBasicInfo,
  getInfo,
  getURLVideoID,
  getVideoID,
  relatedVideo,
  validateID,
  validateURL,
  videoFormat,
  videoInfo
} from 'ytdl-core';
