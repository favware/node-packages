<div align="center">

<img src="https://cdn.favware.tech/img/eslint.png" height="200" alt="logo"/>

# @favware/eslint-config-react-app

**Standard ESLint config for Favware projects using React + TypeScript**

[![GitHub](https://img.shields.io/github/license/favware/node-packages?logo=github&style=flat-square)](https://github.com/favware/node-packages/blob/main/LICENSE.md)
[![Coverage Status](https://coveralls.io/repos/github/favware/node-packages/badge.svg?branch=main)](https://coveralls.io/github/favware/node-packages?branch=main)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/favware/node-packages.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/favware/node-packages/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/favware/node-packages.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/favware/node-packages/context:javascript)
[![Coverage Status](https://coveralls.io/repos/github/favware/node-packages/badge.svg?branch=main)](https://coveralls.io/github/favware/node-packages?branch=main)
[![npm](https://img.shields.io/npm/v/@favware/eslint-config-react-app?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/eslint-config-react-app)
[![Depfu](https://badges.depfu.com/badges/30f62cdba0c569448b5f93d532dad8e4/count.svg)](https://depfu.com/github/favware/node-packages?project_id=15121)

</div>

## Description

This configuration extends the [`@favware/eslint-config`](https://www.npmjs.com/package/@favware/eslint-config) package while adding React specific rules. The React ruleset is heavily based on [`eslint-config-react-app`](https://www.npmjs.com/package/eslint-config-react-app), with the difference being that it's opinionated to Favware code styling.

## Install

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add @favware/eslint-config-react-app

# npm install @favware/eslint-config-react-app
```

All necessary dependencies such as `eslint` and `@typescript-eslint/parser` will automatically be installed

## Usage

```json
{
  "extends": ["@favware/eslint-config-react-app"]
}
```

### Note to create-react-app users (2020-06-11)

create-react-app will install their own outdated versions of `@typescript-eslint/eslint-plugin` (v2.x), `@typescript-eslint/parser`(v2.x) and `eslint` (v6.x) which will conflict with this configuration. If you're using yarn add the following to your package.json to force yarn to install supported versions of the packages. For other package managers please consult on how to properly modify their respective lock files to force package resolutions.

```json
	"resolutions": {
    "@typescript-eslint/eslint-plugin": "^3.2.0",
    "@typescript-eslint/parser": "^3.2.0",
		"eslint": "^7.2.0"
	}
```

## API Documentation

For the full API documentation please refer to the TypeDoc generated [documentation](https://favware.github.io/node-packages/modules/_favware_eslint_config_react_app.html).

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
