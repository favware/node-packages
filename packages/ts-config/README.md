<div align="center">
  <p>
  <a href="https://favware.tech"><img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/website-project-icons/tslogo.png" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> @favware/ts-config</h1>
<h3> Standardized TSConfig for Favware projects </h3>
  </p>
</div>

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/favware/node-packages?logo=github&style=flat-square)](https://github.com/favware/node-packages/blob/master/LICENSE.md)
[![Coverage Status](https://coveralls.io/repos/github/favware/node-packages/badge.svg?branch=master)](https://coveralls.io/github/favware/node-packages?branch=master)

**Package Info Sizes**

[![npm](https://img.shields.io/npm/v/@favware/ts-config?color=crimson&label=tsconfig%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/ts-config)

**Social Media and Donations**

[![Join Discord server](https://img.shields.io/discord/512303595966824458?color=697EC4&label=Join%20Discord%20Server&logo=discord&logoColor=FDFEFE&style=flat-square)](https://join.favware.tech)
[![Twitter Follow](https://img.shields.io/twitter/follow/favna_?label=Follow%20@Favna_&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/Favna_/follow)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://donate.favware.tech/patreon)](https://donate.favware.tech/patreon)
[![PayPal Donate](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Donate%20with%20Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://donate.favware.tech/paypal)](https://donate.favware.tech/patreon)

---

# Install

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add @favware/ts-config

# npm install @favware/ts-config
```

# Usage

```json
// in your tsconfig.json
{
  "extends": "@favware/ts-config",
  "compilerOptions": {
    "outDir": "build/",
    "rootDir": "src/"
  },
  "include": ["src"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

## [API Documentation](https://favware.github.io/node-packages/modules/_favware_tsconfig.html)
