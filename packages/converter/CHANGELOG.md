# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.1.2](https://github.com/favware/node-packages/compare/@favware/converter@3.1.1...@favware/converter@3.1.2) (2021-09-22)

**Note:** Version bump only for package @favware/converter

## [3.1.1](https://github.com/favware/node-packages/compare/@favware/converter@3.1.0...@favware/converter@3.1.1) (2021-06-11)

**Note:** Version bump only for package @favware/converter

# [3.1.0](https://github.com/favware/node-packages/compare/@favware/converter@3.0.3...@favware/converter@3.1.0) (2020-10-03)

### Features

- **converter:** build with rollup for optimal bundles ([36665eb](https://github.com/favware/node-packages/commit/36665eb03bb970165d332e455b1ff7f6e0cf4b74))

## [3.0.3](https://github.com/favware/node-packages/compare/@favware/converter@3.0.2...@favware/converter@3.0.3) (2020-08-06)

**Note:** Version bump only for package @favware/converter

## [3.0.2](https://github.com/favware/node-packages/compare/@favware/converter@3.0.1...@favware/converter@3.0.2) (2020-06-11)

**Note:** Version bump only for package @favware/converter

## [3.0.1](https://github.com/favware/node-packages/compare/@favware/converter@3.0.0...@favware/converter@3.0.1) (2020-06-11)

**Note:** Version bump only for package @favware/converter

# [3.0.0](https://github.com/favware/node-packages/compare/@favware/converter@2.0.0...@favware/converter@3.0.0) (2020-06-07)

### chore

- drop support for NodeJS v10 ([5632408](https://github.com/favware/node-packages/commit/56324085cb35a10eecaec28f619fae01417055a7))

### BREAKING CHANGES

- NodeJS v10 is no longer LTS and was forcing the inclusions of a polyfill on
  @favware/converter. By making NodeJS v12 the minimum required version this polyfill can be removed.

# [2.0.0](https://github.com/favware/node-packages/compare/@favware/converter@2.0.0-canary.0...@favware/converter@2.0.0) (2020-05-06)

**Note:** Version bump only for package @favware/converter

# [2.0.0-canary.0](https://github.com/favware/node-packages/compare/@favware/converter@1.2.5...@favware/converter@2.0.0-canary.0) (2020-05-06)

### Bug Fixes

- reworked to compile with tsc rather than rollup ([0b7c6c8](https://github.com/favware/node-packages/commit/0b7c6c81fab75fd298eea8427bbee373d91306bb))

### BREAKING CHANGES

- The default target for ts-config and these packages is now CommonJS, which will
  work in NodeJS by default and get resolved in Rollup (with @rollup/plugin-commonjs) and Webpack as
  well. Furthermore no longer will packages be compiled with importHelpers so tslib is no longer a
  hidden required dependency.

## [1.2.5](https://github.com/favware/node-packages/compare/@favware/converter@1.2.4...@favware/converter@1.2.5) (2020-04-01)

**Note:** Version bump only for package @favware/converter

## [1.2.4](https://github.com/favware/node-packages/compare/@favware/converter@1.2.3...@favware/converter@1.2.4) (2020-01-22)

**Note:** Version bump only for package @favware/converter

## [1.2.3](https://github.com/favware/node-packages/compare/@favware/converter@1.2.2...@favware/converter@1.2.3) (2019-11-09)

**Note:** Version bump only for package @favware/converter

## [1.2.2](https://github.com/favware/node-packages/compare/@favware/converter@1.2.1...@favware/converter@1.2.2) (2019-10-13)

### Bug Fixes

- completely re-do tsconfig standardized ([9eb030f](https://github.com/favware/node-packages/commit/9eb030fdf1deb75d5ae8b273d0e9c359bcb985a1))

## [1.2.1](https://github.com/favware/node-packages/compare/@favware/converter@1.2.0...@favware/converter@1.2.1) (2019-10-13)

**Note:** Version bump only for package @favware/converter

# [1.2.0](https://github.com/favware/node-packages/compare/@favware/converter@1.1.0...@favware/converter@1.2.0) (2019-10-13)

### Features

- standardize TS configuration ([47696f4](https://github.com/favware/node-packages/commit/47696f4e1dd2632b305ff9789cdd6c473fa709ca))

# [1.1.0](https://github.com/favware/node-packages/compare/@favware/converter@1.0.6...@favware/converter@1.1.0) (2019-09-12)

### Features

- **converter:** new convertion: length to feet and inches ([c43a781](https://github.com/favware/node-packages/commit/c43a781))

## [1.0.6](https://github.com/favware/node-packages/compare/@favware/converter@1.0.5...@favware/converter@1.0.6) (2019-09-11)

### Bug Fixes

- **converter:** fixed circular dependency ([1540e6b](https://github.com/favware/node-packages/commit/1540e6b))
- **converter:** properly load array-flat-polyfill ([456b633](https://github.com/favware/node-packages/commit/456b633))

## [1.0.5](https://github.com/favware/node-packages/compare/@favware/converter@1.0.4...@favware/converter@1.0.5) (2019-09-11)

**Note:** Version bump only for package @favware/converter

## [1.0.4](https://github.com/favware/node-packages/compare/@favware/converter@1.0.3...@favware/converter@1.0.4) (2019-08-21)

**Note:** Version bump only for package @favware/converter

## 1.0.3 (2019-08-18)

### Reverts

- "ci: another attempt to fix CI config" ([37c385f](https://github.com/favware/node-packages/commit/37c385f))
