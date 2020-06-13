# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [5.1.0](https://github.com/favware/node-packages/compare/@favware/eslint-config@5.0.2...@favware/eslint-config@5.1.0) (2020-06-13)


### Bug Fixes

* **eslint-config-(react-app):** disable 2 rules that are an annoyance ([1abca7c](https://github.com/favware/node-packages/commit/1abca7c3ae4bc37d44a19eb3cadf44898b65fa73))


### Features

* **eslint-config:** enable ban-ts-comment ([94f8c63](https://github.com/favware/node-packages/commit/94f8c6304193756d3140e8d0cda78bbd9f9e5287))





## [5.0.2](https://github.com/favware/node-packages/compare/@favware/eslint-config@5.0.1...@favware/eslint-config@5.0.2) (2020-06-11)

**Note:** Version bump only for package @favware/eslint-config





## [5.0.1](https://github.com/favware/node-packages/compare/@favware/eslint-config@5.0.0...@favware/eslint-config@5.0.1) (2020-06-11)


### Bug Fixes

* **eslint-config:** allow namespaces for better module augmentation ([87dcb5a](https://github.com/favware/node-packages/commit/87dcb5a2b6cbb409b7a64f3f5c2507e76d1f86b8))





# [5.0.0](https://github.com/favware/node-packages/compare/@favware/eslint-config@4.0.0...@favware/eslint-config@5.0.0) (2020-06-07)


### Bug Fixes

* officially drop support for Node v8 and TS <= 3.2 ([f71949e](https://github.com/favware/node-packages/commit/f71949e5de0da0c1983b4b484b095e67061f6cbf))
* **eslint-config:** fixed ban-ts-comment rule ([f83a26c](https://github.com/favware/node-packages/commit/f83a26c513c8653c60b7ddef3b8bd7d7c0a4350c))
* **eslint-config:** fixed rules ([c2cb42b](https://github.com/favware/node-packages/commit/c2cb42b585cef4e4fd0951dad19689be930ff96e))


### chore

* drop support for NodeJS v10 ([5632408](https://github.com/favware/node-packages/commit/56324085cb35a10eecaec28f619fae01417055a7))


### Features

* **eslint-config:** specify rules for banning // [@ts](https://github.com/ts)-<directive> ([9985881](https://github.com/favware/node-packages/commit/9985881e7997f3b8449e0ab0bee2374e55c138bd))


### BREAKING CHANGES

* NodeJS v10 is no longer LTS and was forcing the inclusions of a polyfill on
@favware/converter. By making NodeJS v12 the minimum required version this polyfill can be removed.





# [4.0.0](https://github.com/favware/node-packages/compare/@favware/eslint-config@4.0.0-canary.0...@favware/eslint-config@4.0.0) (2020-05-06)

**Note:** Version bump only for package @favware/eslint-config





# [4.0.0-canary.0](https://github.com/favware/node-packages/compare/@favware/eslint-config@3.3.1...@favware/eslint-config@4.0.0-canary.0) (2020-05-06)


### Bug Fixes

* reworked to compile with tsc rather than rollup ([0b7c6c8](https://github.com/favware/node-packages/commit/0b7c6c81fab75fd298eea8427bbee373d91306bb))


### BREAKING CHANGES

* The default target for ts-config and these packages is now CommonJS, which will
work in NodeJS by default and get resolved in Rollup (with @rollup/plugin-commonjs) and Webpack as
well. Furthermore no longer will packages be compiled with importHelpers so tslib is no longer a
hidden required dependency.





## [3.3.1](https://github.com/favware/node-packages/compare/@favware/eslint-config@3.3.0...@favware/eslint-config@3.3.1) (2020-04-01)

**Note:** Version bump only for package @favware/eslint-config

# [3.3.0](https://github.com/favware/node-packages/compare/@favware/eslint-config@3.2.0...@favware/eslint-config@3.3.0) (2020-03-03)

### Features

- **eslint-config:** bump [@typescript-eslint](https://github.com/typescript-eslint) dependencies ([e81c71e](https://github.com/favware/node-packages/commit/e81c71ea2ef4e90869856e44322d754ca6dda278))

# [3.2.0](https://github.com/favware/node-packages/compare/@favware/eslint-config@3.1.6...@favware/eslint-config@3.2.0) (2020-01-22)

### Features

- **eslint-config:** clean out eslint config, remove a lot of rules ([e54b40e](https://github.com/favware/node-packages/commit/e54b40ea61f9eaf1221abc8c42a30b09bb5bca24))

## [3.1.6](https://github.com/favware/node-packages/compare/@favware/eslint-config@3.1.5...@favware/eslint-config@3.1.6) (2019-11-25)

**Note:** Version bump only for package @favware/eslint-config

## [3.1.5](https://github.com/favware/node-packages/compare/@favware/eslint-config@3.1.4...@favware/eslint-config@3.1.5) (2019-11-10)

**Note:** Version bump only for package @favware/eslint-config

## [3.1.4](https://github.com/favware/node-packages/compare/@favware/eslint-config@3.1.3...@favware/eslint-config@3.1.4) (2019-11-09)

**Note:** Version bump only for package @favware/eslint-config

## [3.1.3](https://github.com/favware/node-packages/compare/@favware/eslint-config@3.1.2...@favware/eslint-config@3.1.3) (2019-10-18)

### Bug Fixes

- **eslint-config:** bump down eslint parser to fix macos/windows bug ([a4a0018](https://github.com/favware/node-packages/commit/a4a00183304a7389249fc0e1ca2f24260fe53410))

## [3.1.2](https://github.com/favware/node-packages/compare/@favware/eslint-config@3.1.1...@favware/eslint-config@3.1.2) (2019-10-13)

### Bug Fixes

- completely re-do tsconfig standardized ([9eb030f](https://github.com/favware/node-packages/commit/9eb030fdf1deb75d5ae8b273d0e9c359bcb985a1))

## [3.1.1](https://github.com/favware/node-packages/compare/@favware/eslint-config@3.1.0...@favware/eslint-config@3.1.1) (2019-10-13)

**Note:** Version bump only for package @favware/eslint-config

# [3.1.0](https://github.com/favware/node-packages/compare/@favware/eslint-config@3.0.5...@favware/eslint-config@3.1.0) (2019-10-13)

### Features

- standardize TS configuration ([47696f4](https://github.com/favware/node-packages/commit/47696f4e1dd2632b305ff9789cdd6c473fa709ca))

## [3.0.5](https://github.com/favware/node-packages/compare/@favware/eslint-config@3.0.4...@favware/eslint-config@3.0.5) (2019-09-11)

**Note:** Version bump only for package @favware/eslint-config

## [3.0.4](https://github.com/favware/node-packages/compare/@favware/eslint-config@3.0.3...@favware/eslint-config@3.0.4) (2019-09-11)

**Note:** Version bump only for package @favware/eslint-config

## [3.0.3](https://github.com/favware/node-packages/compare/@favware/eslint-config@3.0.2...@favware/eslint-config@3.0.3) (2019-09-11)

### Bug Fixes

- **eslint-config:** disable newly introduced eslint rule ([20e0c52](https://github.com/favware/node-packages/commit/20e0c52))

## [3.0.2](https://github.com/favware/node-packages/compare/@favware/eslint-config@3.0.1...@favware/eslint-config@3.0.2) (2019-08-21)

**Note:** Version bump only for package @favware/eslint-config

## 3.0.1 (2019-08-18)

**Note:** Version bump only for package @favware/eslint-config

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.0.0](https://github.com/favware/eslint-config/compare/v2.0.2...v3.0.0) (2019-08-15)

### ⚠ BREAKING CHANGES

- Drop node 8 support ([1026273](https://github.com/favware/eslint-config/commit/1026273))

### [2.0.2](https://github.com/favware/eslint-config/compare/v2.0.0...v2.0.2) (2019-08-15)

### Bug Fixes

- **\:** disable the rule "restrict-plus-operands" ([625d05b](https://github.com/favware/eslint-config/commit/625d05b))
- add eslint-plugin-jest to dependencies ([27c1523](https://github.com/favware/eslint-config/commit/27c1523))

### [2.0.1](https://github.com/favware/eslint-config/compare/v2.0.0...v2.0.1) (2019-08-15)

### Bug Fixes

- add eslint-plugin-jest to dependencies ([27c1523](https://github.com/favware/eslint-config/commit/27c1523))

## [2.0.0] - 2019-08-15

### BREAKING CHANGES

- Upgraded @typescript-eslint/parser to v2.0.0. Taken from their breaking changelog:

  - removed some rules from recommended config
  - recommended config changes are considered breaking
  - by default we will now throw when a file is not in the `project` provided
  - Merges both no-angle-bracket-type-assertion and no-object-literal-type-assertion into one rule
  - **eslint-plugin:** both 'eslint-recommended' and 'recommended' have changed.
  - **eslint-plugin:** removing rules
  - changes config structure

  ```ts
  type ArrayOption = 'array' | 'generic' | 'array-simple';
  type Options = [
    {
      // default case for all arrays
      default: ArrayOption;
      // optional override for readonly arrays
      readonly?: ArrayOption;
    }
  ];
  ```

  - **eslint-plugin:** changing default rule config
  - Node 6 is no longer supported

- You now need to create a `tsconfig.eslint.json` which extends `tsconfig.json`. Recommended content:
  ```json
  {
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "allowJs": true,
      "checkJs": true
    },
    "includes": ["src", "test", "tests", "typings", "**/__tests__", "**/*.tsx", "**/*.ts", "**/*.js"],
    "exclude": ["**/node_modules", "**/build", "**/bin", "**/out", "**/dist", "**/coverage"]
  }
  ```

## [1.0.1] - 2019-08-11

### Changed

- Disabled 2 rules:
  - `@typescript-eslint/promise-function-async`
  - `require-atomic-updates`

## [1.0.0] - 2019-07-14

### Added

- Initial release

[2.0.0]: https://github.com/favware/eslint-config/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/favware/eslint-config/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/favware/eslint-config/releases/tag/v1.0.0
