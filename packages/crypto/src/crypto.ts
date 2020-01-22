import { randomBytes } from 'crypto';
import StreamBinary from './StreamBinary';
import { CHARACTERS, CryptoError, DEFAULT_BITS, DEFAULT_RADIX, Radix } from './util';

/**
 * Generates a cryptographic string given an amount of bits and a base radix
 *
 * @param bits The amount of bits to generate
 * @param radix The radix to generate for
 * @returns The cryptographic string
 * @example
 * ```ts
 * crypto(160, 64)
 * ```
 */
export const crypto = (bits: number = DEFAULT_BITS, radix: Radix = DEFAULT_RADIX): string => {
  try {
    if (typeof bits !== 'number') throw new Error('bits_not_number');
    if (typeof radix !== 'number') throw new Error('radix_not_string');

    const entropy = randomBytes(bits);
    const length = Math.ceil((bits * Math.log(2)) / Math.log(radix));
    const stream = new StreamBinary(entropy);

    let result = '';

    while (result.length < length) {
      result += CHARACTERS[stream.generate(radix)];
    }

    return result;
  } catch (err) {
    if (/(?:bits_not_number)/i.test(err.toString())) throw new CryptoError('Your bits value is not of type number');
    if (/(?:radix_not_string)/i.test(err.toString()))
      throw new CryptoError('Your radix is not of type string, please utilize the build in Radix provider');

    throw new CryptoError(`Unhandled Error, please contact the developer of the package. Message: ${err.toString()}`);
  }
};

export default crypto;
