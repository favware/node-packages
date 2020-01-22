<div align="center">
  <p>
  <a href="https://favware.tech/crypto"><img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/website-project-icons/crypto.png" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> @favware/crypto</h1>
<h3> Easily generate a random cryptographic</h3>
  </p>
</div>

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/favware/node-packages?logo=github&style=flat-square)](https://github.com/favware/node-packages/blob/master/LICENSE.md)
[![Codecov](https://img.shields.io/codecov/c/github/favware/node-packages?logo=codecov&style=flat-square)](https://codecov.io/gh/favware/node-packages)

**Bundle Sizes**

[![npm bundle size](https://img.shields.io/bundlephobia/min/@favware/crypto?label=crypto%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/crypto)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@favware/crypto?label=crypto%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/crypto)
[![npm](https://img.shields.io/npm/v/@favware/crypto?color=crimson&label=crypto%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/crypto)

**Social Media and Donations**

[![Join Discord server](https://img.shields.io/discord/512303595966824458?color=697EC4&label=Join%20Discord%20Server&logo=discord&logoColor=FDFEFE&style=flat-square)](https://favware.tech/redirect/server)
[![Twitter Follow](https://img.shields.io/twitter/follow/favna_?label=Follow%20@Favna_&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/Favna_/follow)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://www.patreon.com/bePatron?u=9336537)](https://www.patreon.com/bePatron?u=9336537)
[![PayPal Donate](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Donate%20with%20Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XMAYCF9SDHZ34)](https://www.patreon.com/bePatron?u=9336537)

---

This package is a full rework of my old package `csprng-64` but now far better. I decided to release it as a completely separate package and deprecate the previous one as the entire code base was changed and I wasn't fond of the previous name either.

**Key Features**

- Generates secure random numbers using `crypto.randomBytes()`. Numbers can be of any magnitude and in any base from 2 to 64.
- Typesafe
- Bundled with Rollup for maximum size reduction (only 1kB minified + gzipped!), ES module support and browser support
- Generated TypeScript declarations
- Treeshakeable in Webpack

# Install

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add @favware/crypto

# npm install @favware/crypto
```

---

# Usage

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

## [API Documentation](https://favware.github.io/node-packages/modules/_favware_crypto.html)
