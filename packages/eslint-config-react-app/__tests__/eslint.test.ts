import config from '../src';

describe('ESLint Config', () => {
  test('should export rules', () => {
    expect(config.root).toBe(true);
    expect(config.extends).toContainEqual('@favware');
    expect(config).toMatchSnapshot();
  });
});
