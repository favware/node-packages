// /* eslint-disable @typescript-eslint/no-explicit-any */
// export interface PluginOptions {
//   /** Any custom TSLint configuration */
//   configuration?: any;
//   /** Whether to apply autofix */
//   fix?: boolean;
//   /** Whether to not give any log output */
//   quiet?: boolean;
//   /** The formatter for TSLint */
//   formatter?: LintFormatters;
//   /** A path to a directory of custom formatters */
//   formattersDirectory?: string;
//   /** A path to a directory of custom rules */
//   rulesDirectory?: string;
//   /** The TSLint instance to use */
//   tslint?: any;
//   /** The TypeScript Program to use */
//   program?: any;
// }

// export interface ReportOptions {
//   /** Whether to emit errors */
//   emitError?: boolean;
//   /** The limit of the amount of reports to return  */
//   reportLimit?: number;
//   /** Whether to summarize the failure output after run */
//   summarizeFailureOutput?: boolean;
//   /** Whether to allow lint warnings */
//   allowWarnings?: boolean;
// }

// export interface TSLintFile {
//   /** The TSLint instance */
//   tslint: any;
//   /** The path to the file */
//   path: string;
//   /** The relative path to the file */
//   relative: string;
//   /** The contents of the file */
//   contents: Buffer | any;

//   /** Whether the file is a stream */
//   isStream(): boolean;

//   /** Whether the file is null */
//   isNull(): boolean;
// }

// /** Logging levels used by the plugin */
// export enum LogLevels {
//   ERROR = 'error',
//   INFO = 'info',
//   WARN = 'warn'
// }

// /** TSLint formatters supported by the linter */
// export enum LintFormatters {
//   CHECKSTYLE = 'checkstyle',
//   CODEFRAME = 'codeFrame',
//   FILESLIST = 'filesList',
//   JSON = 'json',
//   JUNIT = 'junit',
//   MSBUILD = 'msbuild',
//   PMD = 'pmd',
//   PROSE = 'prose',
//   STYLISH = 'stylish',
//   TAP = 'tap',
//   VERBOSE = 'verbose',
//   VSO = 'vso'
// }
