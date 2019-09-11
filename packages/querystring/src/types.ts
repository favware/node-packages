/**
 * Options for the Stringify function
 * @typedef {StringifyOptions} StringifyOptions tringify Options
 * @property {string} [separator] separator the querystring should get
 * @property {string} [equals] equals sign the querystring should use
 * @property {boolean} [includeQuestion] whether the querystring should be prefixed with a `?`
 */
export interface StringifyOptions {
  separator?: string;
  equals?: string;
  includeQuestion?: boolean;
}

/**
 * Options for the Parse function
 * @typedef {ParseOptions} ParseOptions Parse Options
 * @property {string} [separator] separator the querystring has
 * @property {string} [equals] equals sign the querystring has
 */
export interface ParseOptions {
  separator?: string;
  equals?: string;
}

/**
 * Generic object for type definitions
 * @typedef {QuerystringObject} QuerystringObject Generic object
 * @property {any} key String based key with value of any type
 * @private
 */
export interface QuerystringObject {
  [key: string]: string | number | boolean | any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

/**
 * Extension to generic object defining an absolute error property
 * @typedef {QuerystringError} QuerystringError Generic Error Object
 * @property {string} err Error with a string value
 * @private
 */
export type QuerystringError = {
  err: string;
} & QuerystringObject;

/**
 * Predefined potential sources for errors
 * @typedef {FunctionSource} FunctionSource Source Reference Enum
 * @property {FunctionSource.Parse} Parse for when the source is {@link parse}
 * @property {FunctionSource.Stringify} Stringify for when the source is {@link stringify}
 * @private
 */
export enum FunctionSource {
  Parse = 'parse',
  Stringify = 'stringify',
}