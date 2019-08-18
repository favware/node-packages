import { milkyReport } from '../src';

describe('Milky Report', () => {
  test('should match snapshot', () => {
    expect(milkyReport).toMatchSnapshot();
  });
});