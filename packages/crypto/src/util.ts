/** Possible options to use as the radix */
export enum Radix {
  'Base16' = 16,
  'Base32' = 32,
  'Base36' = 36,
  'Base58' = 58,
  'Base64' = 64
}

export class CryptoError extends Error {
  public constructor(message: string) {
    super(message);
    this.message = message;
    this.name = 'CryptoError';
    this.stack = '';
  }
}

export const defaultBits = 36;
export const defaultRadix = Radix.Base64;
export const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
