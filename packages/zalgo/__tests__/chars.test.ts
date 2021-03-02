import { chars } from '../src';

describe('Snapshot Testing', () => {
  test('chars should match snapshot', () => {
    expect(chars).toMatchSnapshot();
  });
});
