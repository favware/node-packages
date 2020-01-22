import { roundNumber } from '../src';

test('should remove all decimals with precision 0', () => {
  const expected = 3;
  const actual = roundNumber(2.51234, 0);
  expect(actual).toBe(expected);
});

test('should round down to given decimals', () => {
  const expected = 2.51;
  const actual = roundNumber(2.51234, 2);
  expect(actual).toBe(expected);
});

test('should round up to given decimals', () => {
  const expected = 2.52;
  const actual = roundNumber(2.51534, 2);
  expect(actual).toBe(expected);
});
