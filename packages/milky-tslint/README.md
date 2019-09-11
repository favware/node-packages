<div align="center">
  <p>
  <a href="https://favware.tech/milkylint"><img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/website-project-icons/milkylint.png" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> @favware/milky-tslint</h1>
<h3> TypeScript linter Gulp plugin, based on gulp-tslint but updated for modernization</h3>
  </p>
</div>

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/favware/node-packages?logo=github&style=flat-square)](https://github.com/favware/node-packages/blob/master/LICENSE.md)
[![CircleCI](https://img.shields.io/circleci/build/github/favware/node-packages?logo=circleci&style=flat-square)](https://circleci.com/gh/favware/node-packages/tree/master)
[![Codecov](https://img.shields.io/codecov/c/github/favware/node-packages?logo=codecov&style=flat-square)](https://codecov.io/gh/favware/node-packages)

**Bundle Sizes**

[![npm bundle size](https://img.shields.io/bundlephobia/min/@favware/milky-tslint?label=milky-tslint%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/milky-tslint)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@favware/milky-tslint?label=milky-tslint%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/milky-tslint)
[![npm](https://img.shields.io/npm/v/@favware/milky-tslint?color=crimson&label=milky-tslint%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/milky-tslint)

**Social Media and Donations**

[![Join Discord server](https://img.shields.io/discord/512303595966824458?color=697EC4&label=Join%20Discord%20Server&logo=discord&logoColor=FDFEFE&style=flat-square)](https://favware.tech/redirect/server)
[![Twitter Follow](https://img.shields.io/twitter/follow/favna_?label=Follow%20@Favna_&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/Favna_/follow)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://www.patreon.com/bePatron?u=9336537)](https://www.patreon.com/bePatron?u=9336537)
[![PayPal Donate](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Donate%20with%20Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XMAYCF9SDHZ34)](https://www.patreon.com/bePatron?u=9336537)

---

TypeScript linter plugin for Gulp.
Based on [gulp-tslint](https://www.npmjs.com/package/gulp-tslint) by [panuhorsmalahti](https://github.com/panuhorsmalahti)

Gulp down that milk 🥛!

# Install

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add @favware/milky-tslint tslint

# npm install @favware/milky-tslint tslint
```

# Usage

```js
const tslint = require("tslint");
const ts = require('typescript');
const {milkyLint, milkyReport} = require("milky-tslint");

gulp.task("lint", () => {
    const lintProgram = tslint.Linter.createProgram('./tsconfig.json', '.');
    ts.getPreEmitDiagnostics(lintProgram);

    return gulp.src(tsSource)
        .pipe(milkyLint({
            formatter: 'stylish',
            program: lintProgram,
            tslint: tslint,
            fix: !!argv.fix,
        }))
        .pipe(milkyReport());
});
```

TSLint [Type Checking](https://palantir.github.io/tslint/usage/type-checking/) will work if you first use the `createProgram` function as shown above. You should do this inside the gulp task, otherwise it will get cached and not function in consecutive runs of the task.

**tslint.json** is attempted to be read from near the input file.
It **must be available** or supplied directly through the options.

The format in which failures are outputted may be controlled by specifying a TSLint formatter.

The default formatter is `stylish` and the supported formatters are at least:

- checkstyle - Formats errors as though they were Checkstyle output.
- codeFrame - Framed formatter which creates a frame of error code.
- filesList - Lists files containing lint errors.
- json - Formats errors as simple JSON.
- junit - Formats errors as though they were JUnit output.
- msbuild - Formats errors for consumption by msbuild.
- pmd - Formats errors as though they were PMD output.
- prose - The default formatter which outputs simple human-readable messages.
- stylish - Human-readable formatter which creates stylish messages.
- tap - Formats output as TAP stream.
- verbose - The human-readable formatter which includes the rule name in messages.
- vso - Formats output as VSO/TFS logging commands.

For a full list of supported formatters please go to the [TSLint core formatters documentation](https://palantir.github.io/tslint/formatters/)

Custom [TSLint formatters](https://palantir.github.io/tslint/develop/custom-formatters/) may also be
used by specifying the `formatter` and `formattersDirectory` properties on the options passed to
`milky-tslint`.

If there is at least one failure a PluginError is emitted after execution of the reporters:
```javascript
[gulp] Error in plugin 'milky-tslint': Failed to lint: input.ts
```

You can prevent editing the error by setting emitError in report options to false.

```js
gulp.task("lint-noerroremit", () => {
    const lintProgram = tslint.Linter.createProgram('./tsconfig.json', '.');
    ts.getPreEmitDiagnostics(lintProgram);

    return gulp.src(tsSource)
        .pipe(milkyLint({
            formatter: 'stylish',
            program: lintProgram,
            tslint: tslint,
            fix: !!argv.fix,
        }))
        .pipe(milkyReport({
            emitError: false
        }));
});
```

tslint.json can be supplied as a parameter by setting the configuration property.
```js
gulp.task("tslint-json", () =>
    gulp.src("input.ts")
        .pipe(milkyLint({
            configuration: {
              rules: {
                "class-name": true,
                // ...
              }
            }
        }))
        .pipe(milkyReport.report())
);
```

You can also supply a file path to the configuration option, and the file name
doesn't need to be tslint.json.

```js
.pipe(milkyLint({
    // contains rules in the tslint.json format
    configuration: "source/settings.json"
}))
```

## Report limits

You can optionally specify a report limit in the .report options that will turn off reporting for files after the limit has been reached. If the limit is 0 or less, the limit is ignored, which is the default setting.

```js
gulp.task("tslint", () =>
    gulp.src(["input.ts",])
        .pipe(milkyLint({
            formatter: "prose"
        }))
        .pipe(milkyReport.report({
            reportLimit: 2
        }))
);
```

## Allowing Warnings

TSLint 5.0 introduced support for a "warning" severity for linting errors.  By default, warnings cause `milky-tslint` to emit an error to maintain backwards-compatibility with previous versions.  To let the build succeed in the presence of warnings, use the `allowWarnings` report option.

```javascript
gulp.task("tslint", () =>
    gulp.src("input.ts")
        .pipe(milkyLint({
            formatter: "prose"
        }))
        .pipe(milkyReport.report({
            allowWarnings: true
        }))
);
```

## All default tslint options

```js
const tslintOptions = {
    configuration: {},
    fix: false,
    formatter: 'stylish',
    formattersDirectory: null,
    rulesDirectory: null,
    tslint: null,
    program: null
};
```

## All default report options

```js
const reportOptions = {
    emitError: false,
    reportLimit: 0,
    summarizeFailureOutput: true,
    allowWarnings: false
};
```