import chalk from 'chalk';
import moment from 'moment';
import PluginError from 'plugin-error';
import through from 'through';
import TSLint from 'tslint';
import { RuleFailure } from 'tslint/lib/language/rule/rule';
import { IPluginOptions, LogLevels, LintFormatters, ITSLintFile, IReportOptions } from './types';
import eventemitter from './events';

// eslint-disable-next-line
const map = require('map-stream');

/**
 * Helper function to check if a value is a string
 * @param {any} value to check whether or not it is a string
 * @returns {boolean} Returns true if the value is a string
 * @ignore
 */
const isString = (value: any): boolean => {
  return typeof value === 'string';
};

/**
 * Returns the TSLint from the options, or if not set, the default TSLint.
 * @param {IPluginOptions} options
 * @returns {any} TSLint module
 * @ignore
 */
const getTslint = (options: IPluginOptions): any => {
  if (options && options.tslint) {
    return options.tslint;
  }

  return TSLint;
};

/**
 * Log an event or error
 * @param {string} message Message that should be logged
 * @param {LogLevels} [level] Logging level, one of {@link LogLevels}
 * @ignore
 */
const log = (message: string, level?: LogLevels) => {
  const prefix = `[${chalk.gray(moment().format('HH:mm:ss'))}] [${chalk.cyan('@favware/milky-tslint')}]`;

  switch (level) {
    case LogLevels.ERROR:
      return console.error(prefix, chalk.red(message));
    case LogLevels.INFO:
      return console.info(prefix, chalk.green(message));
    case LogLevels.WARN:
      return console.warn(prefix, chalk.yellow(message));
    default:
      return console.log(prefix, message);
  }
};

let unscopedPluginOptions: IPluginOptions;

/**
 * @method milkyLint
 * @description TSLint plugin for Gulp
 * @param pluginOptions Options to pass to the plugin
 */
export const milkyLint = (pluginOptions: IPluginOptions = {}) => {
  unscopedPluginOptions = pluginOptions;

  const options: TSLint.ILinterOptions = {
    fix: pluginOptions.fix || false,
    formatter: pluginOptions.formatter || LintFormatters.STYLISH,
    formattersDirectory: pluginOptions.formattersDirectory || undefined,
    quiet: pluginOptions.quiet || false,
    rulesDirectory: pluginOptions.rulesDirectory || undefined,
  };

  const linter = getTslint(pluginOptions);
  const tslint = new linter.Linter(options, pluginOptions.program);

  return map((file: ITSLintFile, cb: (error: any, file?: ITSLintFile) => void) => {
    if (file.isNull()) return cb(null, file);
    if (file.isStream()) return cb(new PluginError('@favware/milky-tslint', 'streaming is not supported'));

    const configuration = !pluginOptions.configuration || isString(pluginOptions.configuration)
      ? linter.Configuration.findConfiguration(pluginOptions.configuration || null, file.path).results
      : pluginOptions.configuration;

    tslint.lint(file.path, file.contents.toString(), configuration);
    file.tslint = tslint.getResult();

    // Clear all results for current file from tslint
    tslint.failures = [];
    tslint.fixes = [];

    return cb(null, file);
  });
};

/**
 * @method milkyReport
 * @description Reporter for milky-tslint
 * @param options Reporter options
 */
export const milkyReport = (options: IReportOptions = {
  emitError: false, reportLimit: 0, summarizeFailureOutput: true, allowWarnings: false,
}) => {
  if (!options.emitError) options.emitError = false;
  if (!options.reportLimit) options.reportLimit = 0;
  if (!options.summarizeFailureOutput) options.summarizeFailureOutput = true;
  if (!options.allowWarnings) options.allowWarnings = false;

  const errorFiles: ITSLintFile[] = [];
  let allFailures: RuleFailure[] = [];

  let totalReported = 0;

  const reportFailures = (file: ITSLintFile) => {
    if (file.tslint) {
      let errorCount = file.tslint.errorCount;
      if (!options.allowWarnings) errorCount += file.tslint.warningCount;

      if (errorCount > 0) {
        errorFiles.push(file);
        allFailures = allFailures.concat(file.tslint.failures);

        if (options.reportLimit !== undefined && (options.reportLimit <= 0 || (options.reportLimit && options.reportLimit > totalReported))) {
          if (file.tslint.output !== undefined) console.log(file.tslint.output);

          totalReported += errorCount;

          if (options.reportLimit > 0 && options.reportLimit <= totalReported) {
            log(`More than ${options.reportLimit} failures reported. Turning off reporter.`, LogLevels.WARN);
          }
        }
      } else if (options.allowWarnings && file.tslint.warningCount > 0) {
        // Íf only warnings were emitted, format and print them
        const FormatterConstructor = TSLint.findFormatter(unscopedPluginOptions.formatter!)!;
        const formatter = new FormatterConstructor();

        const warnings = (file.tslint as TSLint.LintResult).failures.filter(failure => failure.getRuleSeverity() === 'warning');
        log(formatter.format(warnings), LogLevels.WARN);
      }
    }

    milkyReport.eventEmitter.emit('data', file);
  };

  const throwErrors = () => {
    if (options && errorFiles.length > 0) {
      let failureOutput = allFailures;
      let ignoreFailureCount = 0;

      if (options.reportLimit !== undefined && options.reportLimit > 0) {
        ignoreFailureCount = allFailures.length - options.reportLimit;
        failureOutput = allFailures.slice(0, options.reportLimit);
      }

      let errorOutput = 'Failed to lint: ';

      errorOutput += options.summarizeFailureOutput ? `${failureOutput.length} errors.` : `${failureOutput}.`;

      if (ignoreFailureCount) errorOutput += ` (${ignoreFailureCount} other errors not shown.)`;

      if (options.emitError) {
        return milkyReport.eventEmitter.emit('error', new PluginError('@favware/milky-tslint', errorOutput));
      } else if (options.summarizeFailureOutput) {
        return log(errorOutput, LogLevels.WARN);
      }
    } else if (options && options.summarizeFailureOutput) {
      return log('🎉  Awesome, your linting is Milky Clean! Get yourself a glass of 🥛  for the awesome work!', LogLevels.INFO);
    }

    return milkyReport.eventEmitter.emit('end');
  };

  return through(reportFailures, throwErrors);
};

milkyReport.eventEmitter = eventemitter;

export default milkyLint;