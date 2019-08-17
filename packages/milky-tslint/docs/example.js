const gulp = require('gulp');
const tslint = require('tslint');
const ts = require('typescript');
const {milkyLint, milkyReport} = require('@favware/milky-tslint');
const {argv} = require('yargs');

const tsSource = './lib/*.ts';

gulp.task('lint', () => {
  const lintProgram = tslint.Linter.createProgram('./tsconfig.json', '.');
  ts.getPreEmitDiagnostics(lintProgram);

  return gulp.src(tsSource)
    .pipe(milkyLint({
      configuration: './tslint.json',
      formatter: 'stylish',
      program: lintProgram,
      tslint: tslint,
      fix: Boolean(argv.fix),
    }))
    .pipe(milkyReport());
});

// Random glass of milk: 🥛