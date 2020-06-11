<div align="center">
  <p>
  <a href="https://favware.tech/eslint"><img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/website-project-icons/eslint.png" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> @favware/eslint-config-react-app</h1>
<h3> Standard ESLint config for Favware projects using React + TypeScript</h3>
  </p>
</div>

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/favware/node-packages?logo=github&style=flat-square)](https://github.com/favware/node-packages/blob/master/LICENSE.md)
[![Coverage Status](https://coveralls.io/repos/github/favware/node-packages/badge.svg?branch=master)](https://coveralls.io/github/favware/node-packages?branch=master)

**Bundle Sizes**

[![npm bundle size](https://img.shields.io/bundlephobia/min/@favware/eslint-config-react-app?label=eslint-config-react-app%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/eslint-config-react-app)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@favware/eslint-config-react-app?label=eslint-config-react-app%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/eslint-config-react-app)
[![npm](https://img.shields.io/npm/v/@favware/eslint-config-react-app?color=crimson&label=eslint-config-react-app%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/eslint-config-react-app)

**Social Media and Donations**

[![Join Discord server](https://img.shields.io/discord/512303595966824458?color=697EC4&label=Join%20Discord%20Server&logo=discord&logoColor=FDFEFE&style=flat-square)](https://join.favware.tech)
[![Twitter Follow](https://img.shields.io/twitter/follow/favna_?label=Follow%20@Favna_&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/Favna_/follow)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://donate.favware.tech/patreon)](https://donate.favware.tech/patreon)
[![PayPal Donate](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Donate%20with%20Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://donate.favware.tech/paypal)](https://donate.favware.tech/patreon)

---

# About

This configuration extends the [`@favware/eslint-config`](https://www.npmjs.com/package/@favware/eslint-config) package while adding React specific rules. The React ruleset is heavily based on [`eslint-config-react-app`](https://www.npmjs.com/package/eslint-config-react-app), with the difference being that it's opinionated to Favware code styling.

# Install

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add @favware/eslint-config-react-app

# npm install @favware/eslint-config-react-app
```

All necessary dependencies such as `eslint` and `@typescript-eslint/parser` will automatically be installed

## Note to create-react-app users (2020-06-11)

create-react-app will install their own outdated versions of `@typescript-eslint/eslint-plugin` (v2.x), `@typescript-eslint/parser`(v2.x) and `eslint` (v6.x) which will conflict with this configuration. If you're using yarn add the following to your package.json to force yarn to install supported versions of the packages. For other package managers please consult on how to properly modify their respective lock files to force package resolutions.

```json
	"resolutions": {
		"@typescript-eslint/eslint-plugin": "^3.1.0",
		"@typescript-eslint/parser": "^3.1.0",
		"eslint": "^7.2.0"
	}
```

# Usage

```json
{
  "extends": ["@favware/eslint-config-react-app"]
}
```

## [API Documentation](https://favware.github.io/node-packages/modules/_favware_eslint_config_react_app.html)
