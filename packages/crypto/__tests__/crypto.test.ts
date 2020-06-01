import cryptodefault, { crypto, Radix } from '../src';

test('Base16 cryptography', () => {
  const cryptography = crypto(280, Radix.Base16);

  expect(typeof cryptography).toBe('string');
  expect(cryptography).toHaveLength(70);
});

test('Base32 cryptography', () => {
  const cryptography = crypto(280, Radix.Base32);

  expect(typeof cryptography).toBe('string');
  expect(cryptography).toHaveLength(56);
});

test('Base36 cryptography', () => {
  const cryptography = crypto(280, Radix.Base36);

  expect(typeof cryptography).toBe('string');
  expect(cryptography).toHaveLength(55);
});

test('Base58 cryptography', () => {
  const cryptography = crypto(280, Radix.Base58);

  expect(typeof cryptography).toBe('string');
  expect(cryptography).toHaveLength(48);
});

test('Base64 cryptography', () => {
  const cryptography = crypto(280, Radix.Base64);

  expect(typeof cryptography).toBe('string');
  expect(cryptography).toHaveLength(47);
});

test('Check default export', () => {
  const cryptography = cryptodefault(280, Radix.Base16);

  expect(typeof cryptography).toBe('string');
  expect(cryptography).toHaveLength(70);
});
