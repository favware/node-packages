# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.0.2](https://github.com/favware/node-packages/compare/@favware/yamlreader@4.0.1...@favware/yamlreader@4.0.2) (2021-09-22)

**Note:** Version bump only for package @favware/yamlreader

## [4.0.1](https://github.com/favware/node-packages/compare/@favware/yamlreader@4.0.0...@favware/yamlreader@4.0.1) (2021-06-11)

**Note:** Version bump only for package @favware/yamlreader

# [4.0.0](https://github.com/favware/node-packages/compare/@favware/yamlreader@3.1.0...@favware/yamlreader@4.0.0) (2021-01-08)

### Features

- bump js-yaml to v4 ([3647cb9](https://github.com/favware/node-packages/commit/3647cb9c59c938422a28a603eee07f81ffe8f165)), closes [#251](https://github.com/favware/node-packages/issues/251) [#255](https://github.com/favware/node-packages/issues/255)

### BREAKING CHANGES

- see changes for js-yaml v4.0.0 here
  https://github.com/nodeca/js-yaml/blob/master/CHANGELOG.md

# [3.1.0](https://github.com/favware/node-packages/compare/@favware/yamlreader@3.0.3...@favware/yamlreader@3.1.0) (2020-10-03)

### Features

- **yamlreader:** build with rollup for optimal bundles ([b3fecf8](https://github.com/favware/node-packages/commit/b3fecf8920fc46d7016741a4534ae7b7789f9928))

## [3.0.3](https://github.com/favware/node-packages/compare/@favware/yamlreader@3.0.2...@favware/yamlreader@3.0.3) (2020-08-06)

**Note:** Version bump only for package @favware/yamlreader

## [3.0.2](https://github.com/favware/node-packages/compare/@favware/yamlreader@3.0.1...@favware/yamlreader@3.0.2) (2020-06-11)

**Note:** Version bump only for package @favware/yamlreader

## [3.0.1](https://github.com/favware/node-packages/compare/@favware/yamlreader@3.0.0...@favware/yamlreader@3.0.1) (2020-06-11)

**Note:** Version bump only for package @favware/yamlreader

# [3.0.0](https://github.com/favware/node-packages/compare/@favware/yamlreader@2.0.0...@favware/yamlreader@3.0.0) (2020-06-07)

### chore

- drop support for NodeJS v10 ([5632408](https://github.com/favware/node-packages/commit/56324085cb35a10eecaec28f619fae01417055a7))

### Code Refactoring

- **yamlreader:** remove YamlReaderError ([c1a9542](https://github.com/favware/node-packages/commit/c1a9542f27ac392e71ec330ec477d69818bdce71))
- **yamlreader:** return "unknown" instead of "any" by default ([8311c7a](https://github.com/favware/node-packages/commit/8311c7a92efa9bae1c3c90d5410c88e5556181f5))

### BREAKING CHANGES

- **yamlreader:** Instead of returning "any" type the library now returns "unknown", and you can set
  the return type by passing it as the first type generic
- **yamlreader:** YamlReaderError is gone in favour of regular errors
- NodeJS v10 is no longer LTS and was forcing the inclusions of a polyfill on
  @favware/converter. By making NodeJS v12 the minimum required version this polyfill can be removed.

# [2.0.0](https://github.com/favware/node-packages/compare/@favware/yamlreader@2.0.0-canary.0...@favware/yamlreader@2.0.0) (2020-05-06)

**Note:** Version bump only for package @favware/yamlreader

# [2.0.0-canary.0](https://github.com/favware/node-packages/compare/@favware/yamlreader@1.1.5...@favware/yamlreader@2.0.0-canary.0) (2020-05-06)

### Bug Fixes

- reworked to compile with tsc rather than rollup ([0b7c6c8](https://github.com/favware/node-packages/commit/0b7c6c81fab75fd298eea8427bbee373d91306bb))

### BREAKING CHANGES

- The default target for ts-config and these packages is now CommonJS, which will
  work in NodeJS by default and get resolved in Rollup (with @rollup/plugin-commonjs) and Webpack as
  well. Furthermore no longer will packages be compiled with importHelpers so tslib is no longer a
  hidden required dependency.

## [1.1.5](https://github.com/favware/node-packages/compare/@favware/yamlreader@1.1.4...@favware/yamlreader@1.1.5) (2020-04-01)

**Note:** Version bump only for package @favware/yamlreader

## [1.1.4](https://github.com/favware/node-packages/compare/@favware/yamlreader@1.1.3...@favware/yamlreader@1.1.4) (2020-01-22)

**Note:** Version bump only for package @favware/yamlreader

## [1.1.3](https://github.com/favware/node-packages/compare/@favware/yamlreader@1.1.2...@favware/yamlreader@1.1.3) (2019-11-09)

**Note:** Version bump only for package @favware/yamlreader

## [1.1.2](https://github.com/favware/node-packages/compare/@favware/yamlreader@1.1.1...@favware/yamlreader@1.1.2) (2019-10-13)

### Bug Fixes

- completely re-do tsconfig standardized ([9eb030f](https://github.com/favware/node-packages/commit/9eb030fdf1deb75d5ae8b273d0e9c359bcb985a1))

## [1.1.1](https://github.com/favware/node-packages/compare/@favware/yamlreader@1.1.0...@favware/yamlreader@1.1.1) (2019-10-13)

**Note:** Version bump only for package @favware/yamlreader

# [1.1.0](https://github.com/favware/node-packages/compare/@favware/yamlreader@1.0.8...@favware/yamlreader@1.1.0) (2019-10-13)

### Features

- standardize TS configuration ([47696f4](https://github.com/favware/node-packages/commit/47696f4e1dd2632b305ff9789cdd6c473fa709ca))

## [1.0.8](https://github.com/favware/node-packages/compare/@favware/yamlreader@1.0.7...@favware/yamlreader@1.0.8) (2019-09-11)

**Note:** Version bump only for package @favware/yamlreader

## [1.0.7](https://github.com/favware/node-packages/compare/@favware/yamlreader@1.0.6...@favware/yamlreader@1.0.7) (2019-09-11)

**Note:** Version bump only for package @favware/yamlreader

## [1.0.6](https://github.com/favware/node-packages/compare/@favware/yamlreader@1.0.5...@favware/yamlreader@1.0.6) (2019-08-21)

**Note:** Version bump only for package @favware/yamlreader

## 1.0.5 (2019-08-18)

### Reverts

- "ci: another attempt to fix CI config" ([37c385f](https://github.com/favware/node-packages/commit/37c385f))
