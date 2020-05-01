<div align="center">
  <p>
  <a href="https://favware.tech/awesome-yaml-reader"><img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/website-project-icons/yamlreader.png" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> @favware/yamlreader</h1>
<h3> Awesome minimal wrapper around js-yaml for directly reading in YAML files</h3>
  </p>
</div>

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/favware/node-packages?logo=github&style=flat-square)](https://github.com/favware/node-packages/blob/master/LICENSE.md)
[![Codecov](https://img.shields.io/codecov/c/github/favware/node-packages?logo=codecov&style=flat-square)](https://codecov.io/gh/favware/node-packages)

**Bundle Sizes**

[![npm bundle size](https://img.shields.io/bundlephobia/min/@favware/yamlreader?label=yamlreader%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/yamlreader)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@favware/yamlreader?label=yamlreader%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/yamlreader)
[![npm](https://img.shields.io/npm/v/@favware/yamlreader?color=crimson&label=yamlreader%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/yamlreader)

**Social Media and Donations**

[![Join Discord server](https://img.shields.io/discord/512303595966824458?color=697EC4&label=Join%20Discord%20Server&logo=discord&logoColor=FDFEFE&style=flat-square)](https://favware.tech/redirect/server)
[![Twitter Follow](https://img.shields.io/twitter/follow/favna_?label=Follow%20@Favna_&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/Favna_/follow)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://www.patreon.com/bePatron?u=9336537)](https://www.patreon.com/bePatron?u=9336537)
[![PayPal Donate](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Donate%20with%20Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XMAYCF9SDHZ34)](https://www.patreon.com/bePatron?u=9336537)

---

**Key Features**

- Useable in NodeJS through package manager of choice
- Typesafe
- Bundled with Rollup for maximum size reduction (only 1kB minified + gzipped!) and ES module support
- Generated TypeScript declarations

# Install

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add @favware/yamlreader

# npm install @favware/yamlreader
```

---

# Usage

```js
const { readYaml } = require('@favware/yamlreader');
// import readYaml from '@favware/yamlreader'

const data = readYaml('/path/to/some/yaml/file');
console.log(data); // => JavaScript object with the keys from the yaml
```

## [API Documentation](https://favware.github.io/node-packages/modules/_favware_yamlreader.html)
