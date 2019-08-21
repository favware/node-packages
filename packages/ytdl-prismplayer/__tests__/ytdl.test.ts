import play, { PrismVideoFormat, play as NamedPlay } from '../src';
import { Readable } from 'stream';

describe('ytdl-prismplayer', () => {
  test('should match snapshot', () => {
    expect(play).toBeDefined();
    expect(NamedPlay).toBeDefined();

    expect(play).toMatchSnapshot();
    expect(NamedPlay).toMatchSnapshot();

    expect(play).toBeInstanceOf(Function);
    expect(NamedPlay).toBeInstanceOf(Function);
  });

  test('should parse typing', () => {
    const data: PrismVideoFormat = {
      audioBitrate: 42,
      audioEncoding: 'mp3',
      audio_sample_rate: '42', // eslint-disable-line @typescript-eslint/camelcase
      bitrate: '42',
      clen: '42',
      container: 'mp4',
      encoding: 'H.264',
      fps: '144',
      index: '42',
      init: '42',
      isDashMPD: true,
      isHLS: true,
      itag: '42',
      live: false,
      lmt: '42',
      profile: 'baseline',
      projection_type: '42', // eslint-disable-line @typescript-eslint/camelcase
      quality: '42',
      quality_label: '1080p', // eslint-disable-line @typescript-eslint/camelcase
      resolution: '1080p',
      s: '42',
      sig: '42',
      size: '42',
      type: '42',
      url: '42',
      xtags: '42',
    };

    expect(data.profile).toBe('baseline');
    expect(data).toMatchSnapshot();
  });

  test('should resolve play function', async () => {
    const stream = await play('https://youtu.be/y3OzHBEcymw');
    expect(stream).toBeInstanceOf(Readable);
  });

  test('play function should match snapshot', () => {
    expect(play).toMatchSnapshot();
  });
});