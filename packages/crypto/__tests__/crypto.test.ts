import cryptodefault, { crypto, Radix } from '../src';

test('Base16 cryptography', () => {
  const cryptography = crypto(280, Radix.base16);

  expect(typeof cryptography).toBe('string');
  expect(cryptography).toHaveLength(70);
});

test('Base32 cryptography', () => {
  const cryptography = crypto(280, Radix.base32);

  expect(typeof cryptography).toBe('string');
  expect(cryptography).toHaveLength(56);
});

test('Base36 cryptography', () => {
  const cryptography = crypto(280, Radix.base36);

  expect(typeof cryptography).toBe('string');
  expect(cryptography).toHaveLength(55);
});

test('Base58 cryptography', () => {
  const cryptography = crypto(280, Radix.base58);

  expect(typeof cryptography).toBe('string');
  expect(cryptography).toHaveLength(48);
});

test('Base64 cryptography', () => {
  const cryptography = crypto(280, Radix.base64);

  expect(typeof cryptography).toBe('string');
  expect(cryptography).toHaveLength(47);
});

test('Check default export', () => {
  const cryptography = cryptodefault(280, Radix.base16);

  expect(typeof cryptography).toBe('string');
  expect(cryptography).toHaveLength(70);
});
