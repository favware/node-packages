# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [7.0.4](https://github.com/favware/node-packages/compare/@favware/querystring@7.0.3...@favware/querystring@7.0.4) (2021-09-22)

**Note:** Version bump only for package @favware/querystring

## [7.0.3](https://github.com/favware/node-packages/compare/@favware/querystring@7.0.2...@favware/querystring@7.0.3) (2021-06-11)

**Note:** Version bump only for package @favware/querystring

## [7.0.2](https://github.com/favware/node-packages/compare/@favware/querystring@7.0.1...@favware/querystring@7.0.2) (2021-02-07)

### Bug Fixes

- **querystring:** improve bundling ([e86722c](https://github.com/favware/node-packages/commit/e86722c711e4352f1e9fd3db561ab8ecf09fe49a))

## [7.0.1](https://github.com/favware/node-packages/compare/@favware/querystring@7.0.0...@favware/querystring@7.0.1) (2021-01-08)

**Note:** Version bump only for package @favware/querystring

# [7.0.0](https://github.com/favware/node-packages/compare/@favware/querystring@6.0.7...@favware/querystring@7.0.0) (2020-10-03)

### Features

- **querystring:** change target to ES2019 ([b6e7210](https://github.com/favware/node-packages/commit/b6e721075fd4845e1fa1e5a46e1de9a42b42ed0e))

### BREAKING CHANGES

- **querystring:** Internet Explorer is no longer supported

## [6.0.7](https://github.com/favware/node-packages/compare/@favware/querystring@6.0.6...@favware/querystring@6.0.7) (2020-09-05)

### Bug Fixes

- **eslint-config:** bump eslint dependencies ([37ccb7f](https://github.com/favware/node-packages/commit/37ccb7fc0c266d15df982d20d5960a9e3a07f456))

## [6.0.6](https://github.com/favware/node-packages/compare/@favware/querystring@6.0.5...@favware/querystring@6.0.6) (2020-08-27)

**Note:** Version bump only for package @favware/querystring

## [6.0.5](https://github.com/favware/node-packages/compare/@favware/querystring@6.0.4...@favware/querystring@6.0.5) (2020-08-06)

**Note:** Version bump only for package @favware/querystring

## [6.0.4](https://github.com/favware/node-packages/compare/@favware/querystring@6.0.3...@favware/querystring@6.0.4) (2020-06-13)

**Note:** Version bump only for package @favware/querystring

## [6.0.3](https://github.com/favware/node-packages/compare/@favware/querystring@6.0.2...@favware/querystring@6.0.3) (2020-06-12)

### Bug Fixes

- **querystring:** fixed passing "undefined" and "null" to stringify ([7deace1](https://github.com/favware/node-packages/commit/7deace133c45e3dc06296f031becc98ca5db6f82))

## [6.0.2](https://github.com/favware/node-packages/compare/@favware/querystring@6.0.1...@favware/querystring@6.0.2) (2020-06-11)

**Note:** Version bump only for package @favware/querystring

## [6.0.1](https://github.com/favware/node-packages/compare/@favware/querystring@6.0.0...@favware/querystring@6.0.1) (2020-06-11)

**Note:** Version bump only for package @favware/querystring

# [6.0.0](https://github.com/favware/node-packages/compare/@favware/querystring@5.0.0...@favware/querystring@6.0.0) (2020-06-07)

### chore

- drop support for NodeJS v10 ([5632408](https://github.com/favware/node-packages/commit/56324085cb35a10eecaec28f619fae01417055a7))

### Features

- **querystring:** remove objectHasProperty in favour of Reflect API ([5ce1aa7](https://github.com/favware/node-packages/commit/5ce1aa7d604563851cf9baa6216e4fa124663c20))

### BREAKING CHANGES

- **querystring:** objectHasProperty is no longer exported, as this lib now prefers Reflect API
- NodeJS v10 is no longer LTS and was forcing the inclusions of a polyfill on
  @favware/converter. By making NodeJS v12 the minimum required version this polyfill can be removed.

# [5.0.0](https://github.com/favware/node-packages/compare/@favware/querystring@5.0.0-canary.0...@favware/querystring@5.0.0) (2020-05-06)

**Note:** Version bump only for package @favware/querystring

# [5.0.0-canary.0](https://github.com/favware/node-packages/compare/@favware/querystring@4.3.1...@favware/querystring@5.0.0-canary.0) (2020-05-06)

### Bug Fixes

- reworked to compile with tsc rather than rollup ([0b7c6c8](https://github.com/favware/node-packages/commit/0b7c6c81fab75fd298eea8427bbee373d91306bb))
- **querystring:** remove QuerystringObject in favour of better methods ([c6c5888](https://github.com/favware/node-packages/commit/c6c58885ea88d9c9b1bc48dfddb1f96c3f1af0d9))

### BREAKING CHANGES

- The default target for ts-config and these packages is now CommonJS, which will
  work in NodeJS by default and get resolved in Rollup (with @rollup/plugin-commonjs) and Webpack as
  well. Furthermore no longer will packages be compiled with importHelpers so tslib is no longer a
  hidden required dependency.
- **querystring:** parse will now return generic parameter "R" which by default is Record<PropertyKey,
  unknown>. stringify will take a parameter of type I, which will get inferred from your input, or you
  can set it as a generic type argument. Furthermore, rather than returning an object with the error
  property this library will now throw the error so you get full stacktraces.

## [4.3.1](https://github.com/favware/node-packages/compare/@favware/querystring@4.3.0...@favware/querystring@4.3.1) (2020-04-01)

**Note:** Version bump only for package @favware/querystring

# [4.3.0](https://github.com/favware/node-packages/compare/@favware/querystring@4.2.0...@favware/querystring@4.3.0) (2020-03-03)

### Features

- **querystring:** stringify: Option to disable uri encoding for params ([efc198c](https://github.com/favware/node-packages/commit/efc198c8d0aad5fe92a45022b9a9ddcfa6f9ad98))

# [4.2.0](https://github.com/favware/node-packages/compare/@favware/querystring@4.1.3...@favware/querystring@4.2.0) (2020-01-22)

### Features

- **eslint-config:** clean out eslint config, remove a lot of rules ([e54b40e](https://github.com/favware/node-packages/commit/e54b40ea61f9eaf1221abc8c42a30b09bb5bca24))

## [4.1.3](https://github.com/favware/node-packages/compare/@favware/querystring@4.1.2...@favware/querystring@4.1.3) (2019-11-09)

**Note:** Version bump only for package @favware/querystring

## [4.1.2](https://github.com/favware/node-packages/compare/@favware/querystring@4.1.1...@favware/querystring@4.1.2) (2019-10-13)

### Bug Fixes

- completely re-do tsconfig standardized ([9eb030f](https://github.com/favware/node-packages/commit/9eb030fdf1deb75d5ae8b273d0e9c359bcb985a1))

## [4.1.1](https://github.com/favware/node-packages/compare/@favware/querystring@4.1.0...@favware/querystring@4.1.1) (2019-10-13)

**Note:** Version bump only for package @favware/querystring

# [4.1.0](https://github.com/favware/node-packages/compare/@favware/querystring@4.0.0...@favware/querystring@4.1.0) (2019-10-13)

### Features

- standardize TS configuration ([47696f4](https://github.com/favware/node-packages/commit/47696f4e1dd2632b305ff9789cdd6c473fa709ca))

# [4.0.0](https://github.com/favware/node-packages/compare/@favware/querystring@3.0.3...@favware/querystring@4.0.0) (2019-09-11)

### Features

- **querystring:** completely ignore "undefined" and "null" ([c8620dc](https://github.com/favware/node-packages/commit/c8620dc))

### BREAKING CHANGES

- **querystring:** Previously there would be "prop=undefined", now the entire prop is gone.

## [3.0.3](https://github.com/favware/node-packages/compare/@favware/querystring@3.0.2...@favware/querystring@3.0.3) (2019-09-11)

**Note:** Version bump only for package @favware/querystring

## [3.0.2](https://github.com/favware/node-packages/compare/@favware/querystring@3.0.1...@favware/querystring@3.0.2) (2019-08-21)

**Note:** Version bump only for package @favware/querystring

## 3.0.1 (2019-08-18)

### Reverts

- "ci: another attempt to fix CI config" ([37c385f](https://github.com/favware/node-packages/commit/37c385f))
