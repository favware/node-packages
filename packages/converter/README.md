<div align="center">

<img src="https://cdn.favware.tech/img/converter.png" height="200" alt="logo"/>

# @favware/converter

**Unit conversion done right**

[![GitHub](https://img.shields.io/github/license/favware/node-packages?logo=github&style=flat-square)](https://github.com/favware/node-packages/blob/main/LICENSE.md)
[![codecov](https://codecov.io/gh/favware/node-packages/branch/master/graph/badge.svg?token=Av8zxCVNz2)](https://codecov.io/gh/favware/node-packages)
[![npm](https://img.shields.io/npm/v/@favware/converter?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/converter)
[![Depfu](https://badges.depfu.com/badges/30f62cdba0c569448b5f93d532dad8e4/count.svg)](https://depfu.com/github/favware/node-packages?project_id=15121)

</div>

## Description

An awesome and typesafe unit converter for NodeJS

## Key Features

- Typesafe
- Supports many different units
- Bundled with Rollup for maximum size reduction (only 1kB minified + gzipped!), ES module support and browser support
- Generated TypeScript declarations
- Treeshakeable in Webpack
- Useable in browsers

## Install

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add @favware/converter

# npm install @favware/converter
```

## Usage

```js
const { convert, definitions } = require('@favware/converter');
// import { convert, definitions } from '@favware/converter';

// Just pass required arguments
console.log(convert(100, 'g', 'lb')); // 0.22

// Specify decimal precision
console.log(convert(100, 'g', 'lb', { precision: 3 })); // 0.220

// Will not work if you pass units of different groups
console.log(convert(100, 'g', 'm')); // ConverterError: g and m and not in the same definition group

// Log all supported definitions
console.log(definitions);
```

## API Documentation

For the full API documentation please refer to the TypeDoc generated [documentation](https://favware.github.io/node-packages/modules/_favware_converter.html).

## Buy us some doughnuts

Favware projects are and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Open Collective, Ko-fi, Paypal, Patreon and GitHub Sponsorships. You can use the buttons below to donate through your method of choice.

|   Donate With   |                      Address                      |
| :-------------: | :-----------------------------------------------: |
| GitHub Sponsors |  [Click Here](https://github.com/sponsors/Favna)  |
|      Ko-fi      |  [Click Here](https://donate.favware.tech/kofi)   |
|     Patreon     | [Click Here](https://donate.favware.tech/patreon) |
|     PayPal      | [Click Here](https://donate.favware.tech/paypal)  |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://favware.tech/"><img src="https://avatars3.githubusercontent.com/u/4019718?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jeroen Claassens</b></sub></a><br /><a href="https://github.com/favware/node-packages/commits?author=Favna" title="Code">💻</a> <a href="#infra-Favna" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#projectManagement-Favna" title="Project Management">📆</a> <a href="https://github.com/favware/node-packages/commits?author=Favna" title="Documentation">📖</a> <a href="https://github.com/favware/node-packages/commits?author=Favna" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
