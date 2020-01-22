/** Possible options to use as the radix */
export enum Radix {
  'base16' = 16,
  'base32' = 32,
  'base36' = 36,
  'base58' = 58,
  'base64' = 64
}

export class CryptoError extends Error {
  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = 'CryptoError';
    this.stack = '';
  }
}

export const DEFAULT_BITS = 36;
export const DEFAULT_RADIX = Radix.base64;
export const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
