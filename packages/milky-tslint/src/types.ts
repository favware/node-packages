/* eslint-disable @typescript-eslint/no-explicit-any */
export type IPluginOptions = {
  configuration?: any;
  fix?: boolean;
  quiet?: boolean;
  formatter?: LintFormatters;
  formattersDirectory?: string;
  rulesDirectory?: string;
  tslint?: any;
  program?: any;
};

export type IReportOptions = {
  emitError?: boolean;
  reportLimit?: number;
  summarizeFailureOutput?: boolean;
  allowWarnings?: boolean;
};

export type ITSLintFile = {
  tslint: any;
  path: string;
  relative: string;
  contents: Buffer | any;

  isStream (): boolean;

  isNull (): boolean;
};

export enum LogLevels {
  ERROR = 'error',
  INFO = 'info',
  WARN = 'warn',
}

export enum LintFormatters {
  CHECKSTYLE = 'checkstyle',
  CODEFRAME = 'codeFrame',
  FILESLIST = 'filesList',
  JSON = 'json',
  JUNIT = 'junit',
  MSBUILD = 'msbuild',
  PMD = 'pmd',
  PROSE = 'prose',
  STYLISH = 'stylish',
  TAP = 'tap',
  VERBOSE = 'verbose',
  VSO = 'vso',
}