import prism from 'prism-media';
import { Readable } from 'stream';
import ytdl, { downloadOptions as YTDLDownloadOptions, videoFormat as YTDLVideoFormat, videoInfo } from 'ytdl-core';

/**
 * @typedef PrismVideoFormat
 * @summary Custom type for ytdl videoFormat to include missing property
 * @property {number} [audio_sample_rate] - The sample rate of the audio format
 */
export type PrismVideoFormat = YTDLVideoFormat & {
  audio_sample_rate?: string;
};

/**
 * @function filter
 * @param  {PrismVideoFormat} format Video format to check
 * @return {boolean} Whether the video format has a supported format
 * @private
 */
const filter = (format: PrismVideoFormat): boolean => {
  return format.audioEncoding === 'opus' &&
    format.container === 'webm' &&
    Number(format.audio_sample_rate) === 48000;
};

/**
 * @function nextBestFormat
 * @param  {PrismVideoFormat[]} formats List of formats to search
 * @return {PrismVideoFormat} Best determined format available for the video stream
 * @private
 */
const nextBestFormat = (formats: PrismVideoFormat[]): PrismVideoFormat => {
  formats = formats
    .filter(format => format.audioBitrate)
    .sort((a, b) => b.audioBitrate - a.audioBitrate);

  return formats.find(format => !format.bitrate) || formats[0];
};

/**
 * @function play
 * @param  {string} url YouTube Video URL that should be played
 * @param  {YTDLDownloadOptions} [options] Any extra options to pass to ytdl, see {@link https://github.com/fent/node-ytdl-core/#ytdlurl-options}
 * @return {Promise<Readable>} Readable Stream ({@link https://nodejs.org/api/stream.html#stream_class_stream_readable})
 */
export const play = async (url: string, options: YTDLDownloadOptions = {}): Promise<Readable> => {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url, (err: Error, info: videoInfo) => {
      if (err) {
        return reject(err);
      }
      // Prefer opus
      const format = info.formats.find(filter);
      const canDemux = format && Number(info.length_seconds) !== 0;
      if (canDemux) options = { ...options, filter };
      else if (Number(info.length_seconds) !== 0) options = { ...options, filter: 'audioonly' };
      if (canDemux) {
        const demuxer = new prism.opus.WebmDemuxer();

        return resolve(ytdl.downloadFromInfo(info, options).pipe(demuxer).on('end', () => demuxer.destroy()));
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

      return resolve(stream);
    });
  });
};

export default play;