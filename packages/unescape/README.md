<div align="center">

<h1> <b><i>DEPRECATED</i></b>

Work on this package has stopped in favor of <a href="https://www.npmjs.com/package/confusables">confusables</a> from developer <a href="https://github.com/gc">gc</a>, a package which I have also contributed to and has a much better feature set and far better performance

</h1>

---

  <p>
  <a href="https://favware.tech/unescape"><img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/website-project-icons/unescape.png" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> @favware/unescape</h1>
<h3> Convert HTML entities to HTML characters, e.g. <code>&gt;</code> converts to <code>></code>.</h3>
  </p>
</div>

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/favware/node-packages?logo=github&style=flat-square)](https://github.com/favware/node-packages/blob/master/LICENSE.md)
[![Codecov](https://img.shields.io/codecov/c/github/favware/node-packages?logo=codecov&style=flat-square)](https://codecov.io/gh/favware/node-packages)

**Bundle Sizes**

[![npm bundle size](https://img.shields.io/bundlephobia/min/@favware/unescape?label=unescape%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/unescape)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@favware/unescape?label=unescape%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/unescape)
[![npm](https://img.shields.io/npm/v/@favware/unescape?color=crimson&label=unescape%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/unescape)

**Social Media and Donations**

[![Join Discord server](https://img.shields.io/discord/512303595966824458?color=697EC4&label=Join%20Discord%20Server&logo=discord&logoColor=FDFEFE&style=flat-square)](https://favware.tech/redirect/server)
[![Twitter Follow](https://img.shields.io/twitter/follow/favna_?label=Follow%20@Favna_&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/Favna_/follow)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://www.patreon.com/bePatron?u=9336537)](https://www.patreon.com/bePatron?u=9336537)
[![PayPal Donate](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Donate%20with%20Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XMAYCF9SDHZ34)](https://www.patreon.com/bePatron?u=9336537)

---

Easily unescape HTML entities in both the backend and the frontend

**Key Features**

- Useable in NodeJS through package manager of choice
- Typesafe
- Bundled with Rollup for maximum size reduction (only 1kB minified + gzipped!), ES module support and browser support
- Generated TypeScript declarations
- Treeshakeable in Webpack

# Install

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add @favware/unescape

# npm install @favware/unescape
```

---

# Usage

```js
const { unescape, charSets } = require('@favware/unescape');
// import unescape, { charSets } from '@favware/unescape';

const text = '&lt;div&gt;unescaped&lt;/div&gt;';

console.log(unescape('&lt;div&gt;abc&lt;/div&gt;'));
console.log(unescape`&lt;div&gt;abc&lt;/div&gt;`);
console.log(unescape`awesome text with some ${text} section`);

// Log the supported characters
console.log(charSets);
```

## [API Documentation](https://favware.github.io/node-packages/modules/_favware_unescape.html)
