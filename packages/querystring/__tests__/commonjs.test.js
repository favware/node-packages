// eslint-disable-next-line
const { stringify, parse } = require('../src');

describe('CommonJS usage', () => {
  describe('Stringify', () => {
    test('should work with empty input', () => {
      const expected = '';
      const actual = stringify({});
      expect(actual).toMatchSnapshot();
      expect(actual).toBe(expected);
    });
  });

  describe('Parse', () => {
    test('should work with empty input', () => {
      const expected = {};
      const actual = parse('');
      expect(actual).toMatchSnapshot();
      expect(actual).toMatchObject(expected);
    });
  });
});
