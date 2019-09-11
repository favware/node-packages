/** Options for the {@link stringify} function */
export interface StringifyOptions {
  /** Separator the querystring should get */
  separator?: string;
  /** Equals sign the querystring should use */
  equals?: string;
  /** Whether the querystring should be automatically prefixed with a `?` */
  includeQuestion?: boolean;
}

/** Options for the {@link parse} function */
export interface ParseOptions {
  /** Separator the querystring has */
  separator?: string;
  /** Equals sign the querystring has */
  equals?: string;
}

/** Generic object for type definitions */
export interface QuerystringObject {
  /** String based key with value of any type */
  [key: string]: string | number | boolean | any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

/** Extension to generic object defining an absolute error property */
export type QuerystringError = {
  /** Error with a string value */
  err: string;
} & QuerystringObject;

/** Predefined potential sources for errors */
export enum FunctionSource {
  /** For when the source is {@link parse} */
  Parse = 'parse',
  /** For when the source is {@link stringify} */
  Stringify = 'stringify',
}