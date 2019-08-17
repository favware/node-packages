const { crypto } = require('@favware/crypto');
// import crypto from '@favware/crypto';

// Takes a bit length and base parameter
// base examples are base64 or base32
crypto(160, 64);

// You can also import the predefined Radix's so you can be sure you're using a supported radix
const { Radix } = require('@favware/crypto');
// import { Radix } from '@favware/crypto'
crypto(160, Radix.base64);