<div align="center">
  <p>
  <a href="https://favware.tech/querystring"><img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/website-project-icons/querystring.png" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> @favware/querystring</h1>
<h3> Querystring that is robust in its working yet remains awesome to TypeScript users</h3>
  </p>
</div>

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/favware/node-packages?logo=github&style=flat-square)](https://github.com/favware/node-packages/blob/master/LICENSE.md)
[![Codecov](https://img.shields.io/codecov/c/github/favware/node-packages?logo=codecov&style=flat-square)](https://codecov.io/gh/favware/node-packages)

**Bundle Sizes**

[![npm bundle size](https://img.shields.io/bundlephobia/min/@favware/querystring?label=querystring%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/querystring)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@favware/querystring?label=querystring%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/querystring)
[![npm](https://img.shields.io/npm/v/@favware/querystring?color=crimson&label=querystring%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/querystring)

**Social Media and Donations**

[![Join Discord server](https://img.shields.io/discord/512303595966824458?color=697EC4&label=Join%20Discord%20Server&logo=discord&logoColor=FDFEFE&style=flat-square)](https://favware.tech/redirect/server)
[![Twitter Follow](https://img.shields.io/twitter/follow/favna_?label=Follow%20@Favna_&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/Favna_/follow)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://www.patreon.com/bePatron?u=9336537)](https://www.patreon.com/bePatron?u=9336537)
[![PayPal Donate](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Donate%20with%20Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XMAYCF9SDHZ34)](https://www.patreon.com/bePatron?u=9336537)

---

NodeJS' Querystring, but then with far stronger safety net.

**Key Features**

- Useable in the browser through [jsDelivr](https://www.jsdelivr.com/package/npm/@favware/querystring), [unpkg](https://unpkg.com/@favware/querystring) and [bundle.run](https://bundle.run/@favware/querystring@2.0.0)
- Useable in NodeJS through package manager of choice
- Typesafe
- Bundled with Rollup for maximum size reduction (only 1kB minified + gzipped!), ES module support and browser support
- Generated TypeScript declarations
- Treeshakeable in Webpack

# Install

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add @favware/querystring

# npm install @favware/querystring
```

---

# Usage

## Stringify

Create a querystring from a JS object

```js
const { stringify } = require('@favware/querystring');
// import { stringify } from '@favware/querystring';
// with ES modules you can also use a default import for stringify!

console.log(stringify({ prop: 'value', prop2: 'value2' }));
//=> '?prop=value&prop2=value2'

// supply options
console.log(stringify({ prop: 'value', prop2: 'value2' }, { separator: '&', equals: '=', includeQuestion: true }));
//=> '?prop=value&prop2=value2'

// customize options
console.log(stringify({ prop: 'value', prop2: 'value2' }, { separator: '&&', equals: '=', includeQuestion: false }));
//=> 'prop=value&&prop2=value2'
```

## Parse

Create a JS object from a querystring

```js
const { parse } = require('@favware/querystring');
// import { parse } from '@favware/querystring';

console.log(parse('?prop=value&prop2=value2'));
//=> {prop: 'value', prop2: 'value2'}

// supply options
console.log(parse('?prop=value&prop2=value2', { separator: '&', equals: '=' }));
//=> {prop: 'value', prop2: 'value2'}

// customize options
console.log(parse('prop=value&&prop2=value2', { separator: '&&', equals: '=' }));
//=> {prop: 'value', prop2: 'value2'}
```

## [API Documentation](https://favware.github.io/node-packages/modules/_favware_querystring.html)
