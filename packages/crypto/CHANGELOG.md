# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.1.3](https://github.com/favware/node-packages/compare/@favware/crypto@3.1.2...@favware/crypto@3.1.3) (2021-09-22)

**Note:** Version bump only for package @favware/crypto

## [3.1.2](https://github.com/favware/node-packages/compare/@favware/crypto@3.1.1...@favware/crypto@3.1.2) (2021-06-11)

**Note:** Version bump only for package @favware/crypto

## [3.1.1](https://github.com/favware/node-packages/compare/@favware/crypto@3.1.0...@favware/crypto@3.1.1) (2020-10-26)

### Bug Fixes

- **crypto:** make it work in browsers ([3ddb945](https://github.com/favware/node-packages/commit/3ddb9456cd9106a3867d34c732e8a709d9e0dd5a))

# [3.1.0](https://github.com/favware/node-packages/compare/@favware/crypto@3.0.3...@favware/crypto@3.1.0) (2020-10-03)

### Features

- **crypto:** build with rollup for optimal bundles ([0eb2934](https://github.com/favware/node-packages/commit/0eb293408b359150a64a5bbb41f139e95617ebad))

## [3.0.3](https://github.com/favware/node-packages/compare/@favware/crypto@3.0.2...@favware/crypto@3.0.3) (2020-08-06)

**Note:** Version bump only for package @favware/crypto

## [3.0.2](https://github.com/favware/node-packages/compare/@favware/crypto@3.0.1...@favware/crypto@3.0.2) (2020-06-11)

**Note:** Version bump only for package @favware/crypto

## [3.0.1](https://github.com/favware/node-packages/compare/@favware/crypto@3.0.0...@favware/crypto@3.0.1) (2020-06-11)

**Note:** Version bump only for package @favware/crypto

# [3.0.0](https://github.com/favware/node-packages/compare/@favware/crypto@2.0.0...@favware/crypto@3.0.0) (2020-06-07)

### Bug Fixes

- rename exported variables to cover ESLint rule changes ([93e9d99](https://github.com/favware/node-packages/commit/93e9d9934bb24766b2ff9a745256b063c66a58ac))

### chore

- drop support for NodeJS v10 ([5632408](https://github.com/favware/node-packages/commit/56324085cb35a10eecaec28f619fae01417055a7))

### BREAKING CHANGES

- NodeJS v10 is no longer LTS and was forcing the inclusions of a polyfill on
  @favware/converter. By making NodeJS v12 the minimum required version this polyfill can be removed.
- exported variable names have been changed, please validate your imports

# [2.0.0](https://github.com/favware/node-packages/compare/@favware/crypto@2.0.0-canary.0...@favware/crypto@2.0.0) (2020-05-06)

**Note:** Version bump only for package @favware/crypto

# [2.0.0-canary.0](https://github.com/favware/node-packages/compare/@favware/crypto@1.1.5...@favware/crypto@2.0.0-canary.0) (2020-05-06)

### Bug Fixes

- reworked to compile with tsc rather than rollup ([0b7c6c8](https://github.com/favware/node-packages/commit/0b7c6c81fab75fd298eea8427bbee373d91306bb))

### BREAKING CHANGES

- The default target for ts-config and these packages is now CommonJS, which will
  work in NodeJS by default and get resolved in Rollup (with @rollup/plugin-commonjs) and Webpack as
  well. Furthermore no longer will packages be compiled with importHelpers so tslib is no longer a
  hidden required dependency.

## [1.1.5](https://github.com/favware/node-packages/compare/@favware/crypto@1.1.4...@favware/crypto@1.1.5) (2020-04-01)

**Note:** Version bump only for package @favware/crypto

## [1.1.4](https://github.com/favware/node-packages/compare/@favware/crypto@1.1.3...@favware/crypto@1.1.4) (2020-01-22)

**Note:** Version bump only for package @favware/crypto

## [1.1.3](https://github.com/favware/node-packages/compare/@favware/crypto@1.1.2...@favware/crypto@1.1.3) (2019-11-09)

**Note:** Version bump only for package @favware/crypto

## [1.1.2](https://github.com/favware/node-packages/compare/@favware/crypto@1.1.1...@favware/crypto@1.1.2) (2019-10-13)

### Bug Fixes

- completely re-do tsconfig standardized ([9eb030f](https://github.com/favware/node-packages/commit/9eb030fdf1deb75d5ae8b273d0e9c359bcb985a1))

## [1.1.1](https://github.com/favware/node-packages/compare/@favware/crypto@1.1.0...@favware/crypto@1.1.1) (2019-10-13)

**Note:** Version bump only for package @favware/crypto

# [1.1.0](https://github.com/favware/node-packages/compare/@favware/crypto@1.0.5...@favware/crypto@1.1.0) (2019-10-13)

### Features

- standardize TS configuration ([47696f4](https://github.com/favware/node-packages/commit/47696f4e1dd2632b305ff9789cdd6c473fa709ca))

## [1.0.5](https://github.com/favware/node-packages/compare/@favware/crypto@1.0.4...@favware/crypto@1.0.5) (2019-09-11)

**Note:** Version bump only for package @favware/crypto

## [1.0.4](https://github.com/favware/node-packages/compare/@favware/crypto@1.0.3...@favware/crypto@1.0.4) (2019-09-11)

**Note:** Version bump only for package @favware/crypto

## [1.0.3](https://github.com/favware/node-packages/compare/@favware/crypto@1.0.2...@favware/crypto@1.0.3) (2019-08-21)

**Note:** Version bump only for package @favware/crypto

## 1.0.2 (2019-08-18)

### Reverts

- "ci: another attempt to fix CI config" ([37c385f](https://github.com/favware/node-packages/commit/37c385f))
