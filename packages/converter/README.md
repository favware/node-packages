<div align="center">
  <p>
  <a href="https://favware.tech/converter"><img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/website-project-icons/converter.png" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> @favware/converter</h1>
<h3> Unit convertion done right</h3>
  </p>
</div>

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/favware/node-packages?logo=github&style=flat-square)](https://github.com/favware/node-packages/blob/master/LICENSE.md)
[![Codecov](https://img.shields.io/codecov/c/github/favware/node-packages?logo=codecov&style=flat-square)](https://codecov.io/gh/favware/node-packages)

**Bundle Sizes**

[![npm bundle size](https://img.shields.io/bundlephobia/min/@favware/converter?label=converter%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/converter)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@favware/converter?label=converter%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/converter)
[![npm](https://img.shields.io/npm/v/@favware/converter?color=crimson&label=converter%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/converter)

**Social Media and Donations**

[![Join Discord server](https://img.shields.io/discord/512303595966824458?color=697EC4&label=Join%20Discord%20Server&logo=discord&logoColor=FDFEFE&style=flat-square)](https://favware.tech/redirect/server)
[![Twitter Follow](https://img.shields.io/twitter/follow/favna_?label=Follow%20@Favna_&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/Favna_/follow)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://www.patreon.com/bePatron?u=9336537)](https://www.patreon.com/bePatron?u=9336537)
[![PayPal Donate](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Donate%20with%20Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XMAYCF9SDHZ34)](https://www.patreon.com/bePatron?u=9336537)

---

An awesome and typesafe unit converter for NodeJS

**Key Features**

- Typesafe
- Supports many different units
- Bundled with Rollup for maximum size reduction (only 1kB minified + gzipped!), ES module support and browser support
- Generated TypeScript declarations
- Treeshakeable in Webpack
- Useable in browsers

# Install

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add @favware/converter

# npm install @favware/converter
```

# Usage

```js
const { convert, definitions } = require('@favware/converter');
// Or for babel / typescript:
// import convert, { definitions } from '@favware/converter';

// Just pass required arguments
console.log(convert(100, 'g', 'lb')); // 0.22

// Specify decimal precision
console.log(convert(100, 'g', 'lb', { precision: 3 })); // 0.220

// Will not work if you pass units of different groups
console.log(convert(100, 'g', 'm')); // ConverterError: g and m and not in the same definition group

// Log all supported definitions
console.log(definitions);
```

## [API Documentation](https://favware.github.io/node-packages/modules/_favware_converter.html)
