import play, { play as NamedPlay } from '../src';

describe('ytdl-prismplayer', () => {
  test('should match snapshot', () => {
    expect(play).toBeDefined();
    expect(NamedPlay).toBeDefined();

    expect(play).toMatchSnapshot();
    expect(NamedPlay).toMatchSnapshot();

    expect(play).toBeInstanceOf(Function);
    expect(NamedPlay).toBeInstanceOf(Function);
  });
});
