<div align="center">

<img src="https://cdn.favware.tech/img/querystring.png" height="200" alt="logo"/>

# @favware/querystring

**Querystring that is robust in its working yet remains awesome to TypeScript users**

[![GitHub](https://img.shields.io/github/license/favware/node-packages?logo=github&style=flat-square)](https://github.com/favware/node-packages/blob/main/LICENSE.md)
[![codecov](https://codecov.io/gh/favware/node-packages/branch/master/graph/badge.svg?token=Av8zxCVNz2)](https://codecov.io/gh/favware/node-packages)
[![npm](https://img.shields.io/npm/v/@favware/querystring?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/querystring)
[![Depfu](https://badges.depfu.com/badges/30f62cdba0c569448b5f93d532dad8e4/count.svg)](https://depfu.com/github/favware/node-packages?project_id=15121)

</div>

## Description

NodeJS' Querystring, but then with far stronger safety net.

## Key Features

- Useable in the browser through [jsDelivr](https://www.jsdelivr.com/package/npm/@favware/querystring), [unpkg](https://unpkg.com/@favware/querystring) and [bundle.run](https://bundle.run/@favware/querystring@2.0.0)
- Useable in NodeJS through package manager of choice
- Typesafe
- Bundled with Rollup for maximum size reduction (only 1kB minified + gzipped!), ES module support and browser support
- Generated TypeScript declarations
- Treeshakeable in Webpack

## Install

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add @favware/querystring

# npm install @favware/querystring
```

## Usage

### Stringify

Create a querystring from a JS object

```js
const { stringify } = require('@favware/querystring');
// import { stringify } from '@favware/querystring';

console.log(stringify({ prop: 'value', prop2: 'value2' }));
//=> '?prop=value&prop2=value2'

// supply options
console.log(stringify({ prop: 'value', prop2: 'value2' }, { separator: '&', equals: '=', includeQuestion: true }));
//=> '?prop=value&prop2=value2'

// customize options
console.log(stringify({ prop: 'value', prop2: 'value2' }, { separator: '&&', equals: '=', includeQuestion: false }));
//=> 'prop=value&&prop2=value2'
```

### Parse

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

## API Documentation

For the full API documentation please refer to the TypeDoc generated [documentation](https://favware.github.io/node-packages/modules/_favware_querystring.html).

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
