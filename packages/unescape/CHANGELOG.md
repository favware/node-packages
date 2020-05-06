# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0](https://github.com/favware/node-packages/compare/@favware/unescape@2.0.0-canary.0...@favware/unescape@2.0.0) (2020-05-06)

**Note:** Version bump only for package @favware/unescape





# [2.0.0-canary.0](https://github.com/favware/node-packages/compare/@favware/unescape@1.3.4...@favware/unescape@2.0.0-canary.0) (2020-05-06)


### Bug Fixes

* reworked to compile with tsc rather than rollup ([0b7c6c8](https://github.com/favware/node-packages/commit/0b7c6c81fab75fd298eea8427bbee373d91306bb))


### BREAKING CHANGES

* The default target for ts-config and these packages is now CommonJS, which will
work in NodeJS by default and get resolved in Rollup (with @rollup/plugin-commonjs) and Webpack as
well. Furthermore no longer will packages be compiled with importHelpers so tslib is no longer a
hidden required dependency.





## [1.3.4](https://github.com/favware/node-packages/compare/@favware/unescape@1.3.3...@favware/unescape@1.3.4) (2020-04-01)

**Note:** Version bump only for package @favware/unescape

## [1.3.3](https://github.com/favware/node-packages/compare/@favware/unescape@1.3.2...@favware/unescape@1.3.3) (2020-03-03)

### Reverts

- temporarily mark un-private to publish versions with new readme ([b28de71](https://github.com/favware/node-packages/commit/b28de7170e5d3fe052c5a4cfbe9fa1d1fd5b03ac))

## [1.3.2](https://github.com/favware/node-packages/compare/@favware/unescape@1.3.1...@favware/unescape@1.3.2) (2020-01-22)

**Note:** Version bump only for package @favware/unescape

## [1.3.1](https://github.com/favware/node-packages/compare/@favware/unescape@1.3.0...@favware/unescape@1.3.1) (2019-11-09)

**Note:** Version bump only for package @favware/unescape

# [1.3.0](https://github.com/favware/node-packages/compare/@favware/unescape@1.2.0...@favware/unescape@1.3.0) (2019-10-20)

### Features

- **unescape:** added dollar and trademark entities ([5f332a9](https://github.com/favware/node-packages/commit/5f332a9cff59406519f0a718712723642949db67))

# [1.2.0](https://github.com/favware/node-packages/compare/@favware/unescape@1.1.2...@favware/unescape@1.2.0) (2019-10-20)

### Features

- add support for additional HTML entities ([2a724b9](https://github.com/favware/node-packages/commit/2a724b9a14e843b9a512e518a52614b8a8566e7c))

## [1.1.2](https://github.com/favware/node-packages/compare/@favware/unescape@1.1.1...@favware/unescape@1.1.2) (2019-10-13)

### Bug Fixes

- completely re-do tsconfig standardized ([9eb030f](https://github.com/favware/node-packages/commit/9eb030fdf1deb75d5ae8b273d0e9c359bcb985a1))

## [1.1.1](https://github.com/favware/node-packages/compare/@favware/unescape@1.1.0...@favware/unescape@1.1.1) (2019-10-13)

**Note:** Version bump only for package @favware/unescape

# [1.1.0](https://github.com/favware/node-packages/compare/@favware/unescape@1.0.5...@favware/unescape@1.1.0) (2019-10-13)

### Features

- standardize TS configuration ([47696f4](https://github.com/favware/node-packages/commit/47696f4e1dd2632b305ff9789cdd6c473fa709ca))

## [1.0.5](https://github.com/favware/node-packages/compare/@favware/unescape@1.0.4...@favware/unescape@1.0.5) (2019-09-11)

**Note:** Version bump only for package @favware/unescape

## [1.0.4](https://github.com/favware/node-packages/compare/@favware/unescape@1.0.3...@favware/unescape@1.0.4) (2019-09-11)

**Note:** Version bump only for package @favware/unescape

## [1.0.3](https://github.com/favware/node-packages/compare/@favware/unescape@1.0.2...@favware/unescape@1.0.3) (2019-08-21)

**Note:** Version bump only for package @favware/unescape

## 1.0.2 (2019-08-18)

### Reverts

- "ci: another attempt to fix CI config" ([37c385f](https://github.com/favware/node-packages/commit/37c385f))
