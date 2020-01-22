import config from '../src';

describe('ESLint Config', () => {
  test('should export rules', () => {
    expect(config.root).toBe(true);
    expect(config.parser).toBe('@typescript-eslint/parser');
    expect(config).toMatchSnapshot();
  });
});
