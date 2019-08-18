# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 3.0.1 (2019-08-18)

**Note:** Version bump only for package @favware/eslint-config





# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.0.0](https://github.com/favware/eslint-config/compare/v2.0.2...v3.0.0) (2019-08-15)


### ⚠ BREAKING CHANGES

* Drop node 8 support ([1026273](https://github.com/favware/eslint-config/commit/1026273))

### [2.0.2](https://github.com/favware/eslint-config/compare/v2.0.0...v2.0.2) (2019-08-15)


### Bug Fixes

* **\:** disable the rule "restrict-plus-operands" ([625d05b](https://github.com/favware/eslint-config/commit/625d05b))
* add  eslint-plugin-jest to dependencies ([27c1523](https://github.com/favware/eslint-config/commit/27c1523))

### [2.0.1](https://github.com/favware/eslint-config/compare/v2.0.0...v2.0.1) (2019-08-15)


### Bug Fixes

* add  eslint-plugin-jest to dependencies ([27c1523](https://github.com/favware/eslint-config/commit/27c1523))

## [2.0.0] - 2019-08-15
### BREAKING CHANGES
- Upgraded @typescript-eslint/parser to v2.0.0. Taken from their breaking changelog:
  * removed some rules from recommended config
  * recommended config changes are considered breaking
  * by default we will now throw when a file is not in the `project` provided
  * Merges both no-angle-bracket-type-assertion and no-object-literal-type-assertion into one rule
  * **eslint-plugin:** both 'eslint-recommended' and 'recommended' have changed.
  * **eslint-plugin:** removing rules
  * changes config structure

  ```ts
  type ArrayOption = 'array' | 'generic' | 'array-simple';
  type Options = [
    {
      // default case for all arrays
      default: ArrayOption,
      // optional override for readonly arrays
      readonly?: ArrayOption,
    },
  ];
  ```
  * **eslint-plugin:** changing default rule config
  * Node 6 is no longer supported
- You now need to create a `tsconfig.eslint.json` which extends `tsconfig.json`. Recommended content:
  ```json
  {
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "allowJs": true,
      "checkJs": true
    },
    "includes": [
      "src",
      "test",
      "tests",
      "typings",
      "**/__tests__",
      "**/*.tsx",
      "**/*.ts",
      "**/*.js"
    ],
    "exclude": [
      "**/node_modules",
      "**/build",
      "**/bin",
      "**/out",
      "**/dist",
      "**/coverage"
    ]
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
