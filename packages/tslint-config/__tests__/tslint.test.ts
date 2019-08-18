import config from '../src';

describe('TSLint Config', () => {
  test('should export config', () => {
    expect(config.rules['arrow-return-shorthand']).toBe(true);
    expect(config).toMatchSnapshot();
  });
});