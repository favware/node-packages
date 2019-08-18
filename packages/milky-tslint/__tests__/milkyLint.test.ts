import { milkyLint } from '../src';

describe('Milky Lint', () => {
  test('should match snapshot', () => {
    expect(milkyLint).toMatchSnapshot();
  });
});