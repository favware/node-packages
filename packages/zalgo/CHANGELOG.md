# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.1.3](https://github.com/favware/node-packages/compare/@favware/zalgo@3.1.2...@favware/zalgo@3.1.3) (2021-09-22)

### Bug Fixes

- **zalgo:** properly handle `up`/`middle`/`down` options ([#289](https://github.com/favware/node-packages/issues/289)) ([07435ac](https://github.com/favware/node-packages/commit/07435ac76902e11266d93ec86eca3b040dca8087))

## [3.1.2](https://github.com/favware/node-packages/compare/@favware/zalgo@3.1.1...@favware/zalgo@3.1.2) (2021-06-11)

**Note:** Version bump only for package @favware/zalgo

## [3.1.1](https://github.com/favware/node-packages/compare/@favware/zalgo@3.1.0...@favware/zalgo@3.1.1) (2021-03-02)

### Bug Fixes

- **zalgo:** fixed README, bundling and exports ([5abf2bb](https://github.com/favware/node-packages/commit/5abf2bbcf00d6fc6e0f7a6fcde93f88ee3aa409b))

# [3.1.0](https://github.com/favware/node-packages/compare/@favware/zalgo@3.0.3...@favware/zalgo@3.1.0) (2020-10-03)

### Features

- **zalgo:** build with rollup for optimal bundles ([7d4be4e](https://github.com/favware/node-packages/commit/7d4be4e0df87a65e03c9287ccafc9d4e2d763bb2))

## [3.0.3](https://github.com/favware/node-packages/compare/@favware/zalgo@3.0.2...@favware/zalgo@3.0.3) (2020-08-06)

**Note:** Version bump only for package @favware/zalgo

## [3.0.2](https://github.com/favware/node-packages/compare/@favware/zalgo@3.0.1...@favware/zalgo@3.0.2) (2020-06-11)

**Note:** Version bump only for package @favware/zalgo

## [3.0.1](https://github.com/favware/node-packages/compare/@favware/zalgo@3.0.0...@favware/zalgo@3.0.1) (2020-06-11)

**Note:** Version bump only for package @favware/zalgo

# [3.0.0](https://github.com/favware/node-packages/compare/@favware/zalgo@2.0.0...@favware/zalgo@3.0.0) (2020-06-07)

### chore

- drop support for NodeJS v10 ([5632408](https://github.com/favware/node-packages/commit/56324085cb35a10eecaec28f619fae01417055a7))

### Code Refactoring

- **zalgo:** removed ZalgoError and hasOwnProperty ([187f8d4](https://github.com/favware/node-packages/commit/187f8d405477786f3b72b203fa5d2c1a4c3ab5fe))

### BREAKING CHANGES

- **zalgo:** hasOwnProperty is now replaced with Reflect API and no longer exported.
  ZalgoError's have been replaced with SyntaxErrors as that's what they actually were
- NodeJS v10 is no longer LTS and was forcing the inclusions of a polyfill on
  @favware/converter. By making NodeJS v12 the minimum required version this polyfill can be removed.

# [2.0.0](https://github.com/favware/node-packages/compare/@favware/zalgo@2.0.0-canary.0...@favware/zalgo@2.0.0) (2020-05-06)

**Note:** Version bump only for package @favware/zalgo

# [2.0.0-canary.0](https://github.com/favware/node-packages/compare/@favware/zalgo@1.1.5...@favware/zalgo@2.0.0-canary.0) (2020-05-06)

### Bug Fixes

- reworked to compile with tsc rather than rollup ([0b7c6c8](https://github.com/favware/node-packages/commit/0b7c6c81fab75fd298eea8427bbee373d91306bb))

### BREAKING CHANGES

- The default target for ts-config and these packages is now CommonJS, which will
  work in NodeJS by default and get resolved in Rollup (with @rollup/plugin-commonjs) and Webpack as
  well. Furthermore no longer will packages be compiled with importHelpers so tslib is no longer a
  hidden required dependency.

## [1.1.5](https://github.com/favware/node-packages/compare/@favware/zalgo@1.1.4...@favware/zalgo@1.1.5) (2020-04-01)

**Note:** Version bump only for package @favware/zalgo

## [1.1.4](https://github.com/favware/node-packages/compare/@favware/zalgo@1.1.3...@favware/zalgo@1.1.4) (2020-01-22)

**Note:** Version bump only for package @favware/zalgo

## [1.1.3](https://github.com/favware/node-packages/compare/@favware/zalgo@1.1.2...@favware/zalgo@1.1.3) (2019-11-09)

**Note:** Version bump only for package @favware/zalgo

## [1.1.2](https://github.com/favware/node-packages/compare/@favware/zalgo@1.1.1...@favware/zalgo@1.1.2) (2019-10-13)

### Bug Fixes

- completely re-do tsconfig standardized ([9eb030f](https://github.com/favware/node-packages/commit/9eb030fdf1deb75d5ae8b273d0e9c359bcb985a1))

## [1.1.1](https://github.com/favware/node-packages/compare/@favware/zalgo@1.1.0...@favware/zalgo@1.1.1) (2019-10-13)

**Note:** Version bump only for package @favware/zalgo

# [1.1.0](https://github.com/favware/node-packages/compare/@favware/zalgo@1.0.6...@favware/zalgo@1.1.0) (2019-10-13)

### Features

- standardize TS configuration ([47696f4](https://github.com/favware/node-packages/commit/47696f4e1dd2632b305ff9789cdd6c473fa709ca))

## [1.0.6](https://github.com/favware/node-packages/compare/@favware/zalgo@1.0.5...@favware/zalgo@1.0.6) (2019-09-29)

### Bug Fixes

- **zalgo:** remove unnecessary peer dependencies ([74e6af6](https://github.com/favware/node-packages/commit/74e6af6))

## [1.0.5](https://github.com/favware/node-packages/compare/@favware/zalgo@1.0.4...@favware/zalgo@1.0.5) (2019-09-11)

### Bug Fixes

- **zalgo:** fix prop in obj not being valid ([807be90](https://github.com/favware/node-packages/commit/807be90))

## [1.0.4](https://github.com/favware/node-packages/compare/@favware/zalgo@1.0.3...@favware/zalgo@1.0.4) (2019-09-11)

**Note:** Version bump only for package @favware/zalgo

## [1.0.3](https://github.com/favware/node-packages/compare/@favware/zalgo@1.0.2...@favware/zalgo@1.0.3) (2019-08-21)

**Note:** Version bump only for package @favware/zalgo

## 1.0.2 (2019-08-18)

### Reverts

- "ci: another attempt to fix CI config" ([37c385f](https://github.com/favware/node-packages/commit/37c385f))
