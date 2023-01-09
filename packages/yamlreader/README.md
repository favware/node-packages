<div align="center">

<img src="https://cdn.favware.tech/img/yamlreader.png" height="200" alt="logo"/>

# @favware/yamlreader

**Minimal wrapper around js-yaml for directly reading in YAML files**

[![GitHub](https://img.shields.io/github/license/favware/node-packages?logo=github&style=flat-square)](https://github.com/favware/node-packages/blob/main/LICENSE.md)
[![codecov](https://codecov.io/gh/favware/node-packages/branch/master/graph/badge.svg?token=Av8zxCVNz2)](https://codecov.io/gh/favware/node-packages)
[![npm](https://img.shields.io/npm/v/@favware/yamlreader?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/yamlreader)

</div>

## Key Features

- Useable in NodeJS through package manager of choice
- Typesafe
- Bundled with Rollup for maximum size reduction (only 1kB minified + gzipped!) and ES module support
- Generated TypeScript declarations
- `js-yaml` is re-exported

## Install

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add @favware/yamlreader

# npm install @favware/yamlreader
```

## Usage

```js
const { readYaml } = require('@favware/yamlreader');
// import readYaml from '@favware/yamlreader'

const data = readYaml('/path/to/some/yaml/file');
console.log(data); // => JavaScript object with the keys from the yaml
```

## API Documentation

For the full API documentation please refer to the TypeDoc generated [documentation](https://favware.github.io/node-packages/modules/_favware_yamlreader.html).

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
