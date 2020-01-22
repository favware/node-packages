import { ConverterError } from '../src';

test('confirm error class returns assigned properties', () => {
  const expected = { name: 'ConverterError', message: 'Mocha' };
  const actual = new ConverterError('Mocha');
  expect(actual.name).toBe(expected.name);
  expect(actual.message).toBe(expected.message);
});
