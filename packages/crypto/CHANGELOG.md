# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0](https://github.com/favware/node-packages/compare/@favware/crypto@2.0.0-canary.0...@favware/crypto@2.0.0) (2020-05-06)

**Note:** Version bump only for package @favware/crypto





# [2.0.0-canary.0](https://github.com/favware/node-packages/compare/@favware/crypto@1.1.5...@favware/crypto@2.0.0-canary.0) (2020-05-06)


### Bug Fixes

* reworked to compile with tsc rather than rollup ([0b7c6c8](https://github.com/favware/node-packages/commit/0b7c6c81fab75fd298eea8427bbee373d91306bb))


### BREAKING CHANGES

* The default target for ts-config and these packages is now CommonJS, which will
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
