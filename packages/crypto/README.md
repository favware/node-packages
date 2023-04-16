<div align="center">

<img src="https://cdn.favware.tech/img/crypto.png" height="200" alt="logo"/>

# @favware/crypto

**Easily generate a random cryptographic**

[![GitHub](https://img.shields.io/github/license/favware/node-packages?logo=github&style=flat-square)](https://github.com/favware/node-packages/blob/main/LICENSE.md)
[![codecov](https://codecov.io/gh/favware/node-packages/branch/master/graph/badge.svg?token=Av8zxCVNz2)](https://codecov.io/gh/favware/node-packages)
[![npm](https://img.shields.io/npm/v/@favware/crypto?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/crypto)

</div>

## Description

This package is a full rework of the now deprecated `csprng-64`.

## Key Features

- Generates secure random numbers using `crypto.randomBytes()`. Numbers can be of any magnitude and in any base from 2 to 64.
- Typesafe
- Bundled with Rollup for maximum size reduction (only 1kB minified + gzipped!), ES module support and browser support
- Generated TypeScript declarations
- Treeshakeable in Webpack

## Install

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add @favware/crypto

# npm install @favware/crypto
```

## Usage

Call the function passing the number of required bits, and the radix of the
output.

```js
const { crypto } = require('@favware/crypto');
// import crypto from '@favware/crypto';

// Takes a bit length and base parameter
// base examples are base64 or base32
crypto(160, 64);

// You can also import the predefined Radix's so you can be sure you're using a supported radix
const { Radix } = require('@favware/crypto');
// import Radix from '@favware/crypto'
crypto(160, Radix.base64);
```

## Buy us some doughnuts

Favware projects are and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Open Collective, Ko-fi, Paypal, Patreon and GitHub Sponsorships. You can use the buttons below to donate through your method of choice.

|   Donate With   |                      Address                      |
| :-------------: | :-----------------------------------------------: |
| GitHub Sponsors |  [Click Here](https://github.com/sponsors/Favna)  |
|      Ko-fi      |  [Click Here](https://donate.favware.tech/kofi)   |
|     Patreon     | [Click Here](https://donate.favware.tech/patreon) |
|     PayPal      | [Click Here](https://donate.favware.tech/paypal)  |

## Contributors

Please make sure to read the [Contributing Guide][contributing] before making a pull request.

Thank you to all the people who already contributed to Favware Node Packages!

<a href="https://github.com/favware/node-packages/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=favware/node-packages" />
</a>

[contributing]: https://github.com/favware/node-packages/blob/main/.github/CONTRIBUTING.md
