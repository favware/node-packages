# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.0.0](https://github.com/favware/node-packages/compare/@favware/ytdl-prismplayer@3.0.0-canary.0...@favware/ytdl-prismplayer@3.0.0) (2020-05-06)

**Note:** Version bump only for package @favware/ytdl-prismplayer





# [3.0.0-canary.0](https://github.com/favware/node-packages/compare/@favware/ytdl-prismplayer@2.5.1...@favware/ytdl-prismplayer@3.0.0-canary.0) (2020-05-06)


### Bug Fixes

* reworked to compile with tsc rather than rollup ([0b7c6c8](https://github.com/favware/node-packages/commit/0b7c6c81fab75fd298eea8427bbee373d91306bb))


### BREAKING CHANGES

* The default target for ts-config and these packages is now CommonJS, which will
work in NodeJS by default and get resolved in Rollup (with @rollup/plugin-commonjs) and Webpack as
well. Furthermore no longer will packages be compiled with importHelpers so tslib is no longer a
hidden required dependency.





## [2.5.1](https://github.com/favware/node-packages/compare/@favware/ytdl-prismplayer@2.5.0...@favware/ytdl-prismplayer@2.5.1) (2020-04-01)

**Note:** Version bump only for package @favware/ytdl-prismplayer

# [2.5.0](https://github.com/favware/node-packages/compare/@favware/ytdl-prismplayer@2.4.3...@favware/ytdl-prismplayer@2.5.0) (2020-01-22)

### Features

- **eslint-config:** clean out eslint config, remove a lot of rules ([e54b40e](https://github.com/favware/node-packages/commit/e54b40ea61f9eaf1221abc8c42a30b09bb5bca24))

## [2.4.3](https://github.com/favware/node-packages/compare/@favware/ytdl-prismplayer@2.4.1...@favware/ytdl-prismplayer@2.4.3) (2019-11-25)

**Note:** Version bump only for package @favware/ytdl-prismplayer

## [2.4.1](https://github.com/favware/node-packages/compare/@favware/ytdl-prismplayer@2.4.0...@favware/ytdl-prismplayer@2.4.1) (2019-11-25)

### Bug Fixes

- vorbis streams pass through transformer ([#105](https://github.com/favware/node-packages/issues/105)) ([24b853f](https://github.com/favware/node-packages/commit/24b853f628e7a173278e8cc8cccf4182082110e6))

# [2.4.0](https://github.com/favware/node-packages/compare/@favware/ytdl-prismplayer@2.3.4...@favware/ytdl-prismplayer@2.4.0) (2019-11-09)

### Features

- **ytdl-prismplayer:** option to prefer vorbis streams instead of opus ([abadf46](https://github.com/favware/node-packages/commit/abadf46ea78dc67e0f49b5623a60006e901eb2b4))

## [2.3.4](https://github.com/favware/node-packages/compare/@favware/ytdl-prismplayer@2.3.3...@favware/ytdl-prismplayer@2.3.4) (2019-11-09)

### Bug Fixes

- change prism-media version reference to fix typings ([e4dd9c1](https://github.com/favware/node-packages/commit/e4dd9c1de75e312b26b90548dd7ef60954854053))

## [2.3.3](https://github.com/favware/node-packages/compare/@favware/ytdl-prismplayer@2.3.2...@favware/ytdl-prismplayer@2.3.3) (2019-10-20)

**Note:** Version bump only for package @favware/ytdl-prismplayer

## [2.3.2](https://github.com/favware/node-packages/compare/@favware/ytdl-prismplayer@2.3.1...@favware/ytdl-prismplayer@2.3.2) (2019-10-13)

### Bug Fixes

- completely re-do tsconfig standardized ([9eb030f](https://github.com/favware/node-packages/commit/9eb030fdf1deb75d5ae8b273d0e9c359bcb985a1))

## [2.3.1](https://github.com/favware/node-packages/compare/@favware/ytdl-prismplayer@2.3.0...@favware/ytdl-prismplayer@2.3.1) (2019-10-13)

**Note:** Version bump only for package @favware/ytdl-prismplayer

# [2.3.0](https://github.com/favware/node-packages/compare/@favware/ytdl-prismplayer@2.2.3...@favware/ytdl-prismplayer@2.3.0) (2019-10-13)

### Features

- standardize TS configuration ([47696f4](https://github.com/favware/node-packages/commit/47696f4e1dd2632b305ff9789cdd6c473fa709ca))

## [2.2.3](https://github.com/favware/node-packages/compare/@favware/ytdl-prismplayer@2.2.2...@favware/ytdl-prismplayer@2.2.3) (2019-09-11)

**Note:** Version bump only for package @favware/ytdl-prismplayer

## [2.2.2](https://github.com/favware/node-packages/compare/@favware/ytdl-prismplayer@2.2.1...@favware/ytdl-prismplayer@2.2.2) (2019-09-11)

### Bug Fixes

- **ytdl-prismplayer:** fixed build ([be5bd22](https://github.com/favware/node-packages/commit/be5bd22))

## [2.2.1](https://github.com/favware/node-packages/compare/@favware/ytdl-prismplayer@2.2.0...@favware/ytdl-prismplayer@2.2.1) (2019-09-11)

**Note:** Version bump only for package @favware/ytdl-prismplayer

# [2.2.0](https://github.com/favware/node-packages/compare/@favware/ytdl-prismplayer@2.1.1...@favware/ytdl-prismplayer@2.2.0) (2019-08-21)

### Features

- **ytdl-prismplayer:** export ytdl-core functions ([ad99f08](https://github.com/favware/node-packages/commit/ad99f08)), closes [#2](https://github.com/favware/node-packages/issues/2)

## 2.1.1 (2019-08-18)

### Reverts

- "ci: another attempt to fix CI config" ([37c385f](https://github.com/favware/node-packages/commit/37c385f))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.1.0] - 2019-07-14

### Changed

- Require a peer dependency of prismplayer version 1 or higher
- Require a peer dependency of ytdl-core version 0.27 or higher
- Remove dependency on tslib
- Autogenerated documentation in the Readme
- Optimize bundle generation

### Interal changes

- Changed from TSLint to Typescript-ESLint
- Configure CircleCI
- Added GitHub templates

## [2.0.0] - 2019-06-29

### Added

- Bundling with Rollup for a smaller bundle size as well as an ES module variant
- [Upstream Commit b0b003d](https://github.com/amishshah/ytdl-core-discord/commit/b0b003d2bcc9d685589a9bb820b2d57ad09eece3) experiment: see if stream issues are solved by having ffmpeg convert video from URL instead of stream
- [Upstream commit 7dbf57a](https://github.com/amishshah/ytdl-core-discord/commit/7dbf57a4382aad35e2c10fe0ecd8d1ff0e6a34ec) try enabling reconnect in FFmpeg to solve issues
- [Upstream commit 9b65472](https://github.com/amishshah/ytdl-core-discord/commit/9b6547262250a2bdba4f50859741127b40c2e128) Fix non-opus fallback

### Changed

- **BREAKING:** Moved [prism-media]() and [ytdl-core]() to peer dependencies to support any version. You need to install these in your own discord bot!
- **TYPESCRIPT BREAKING:** Moved [@types/node]() to peer dependencies. You need to install this to your Dev Dependencies when using TypeScript

## [1.0.1] - 2019-06-23

### Added

- Created FUNDING.yml

### Changed

- Updated README (fcd979bbb00b44fd09ca3a5b74bf990a5057e6c4)
- Updated dev dependencies various times

## [1.0.0] - 2019-05-14

### Added

- Initial release

[2.1.0]: https://github.com/favware/ytdl-prismplayer/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/favware/ytdl-prismplayer/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/favware/ytdl-prismplayer/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/favware/ytdl-prismplayer/releases/tag/v1.0.0
