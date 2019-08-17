import fs from 'fs';
import yaml, { DumpOptions } from 'js-yaml';

/**
 * FS Options
 * @typedef {fsOptions} fsOptions Options for the file reader
 * @property
 */
type fsOptions = {
  encoding?:
  | 'utf8'
  | 'ascii'
  | 'utf16le'
  | 'ucs2'
  | 'base64'
  | 'latin1'
  | 'binary'
  | 'hex';
  flag?: string;
};

/**
 * YAMLReaderOptions for configuring both `fs` and `js-yaml`
 * See [js-yaml configuration](https://github.com/nodeca/js-yaml#safeload-string---options-) for more details
 * Also see {@link fsOptions}
 * @typedef {YamlReaderOptions} YamlReaderOptions Options for the YAML parser
 * @property {number} [indent=2] indentation width to use (in spaces).
 * @property {boolean} [noArrayIndent=false] when true, will not add an indentation level to array elements
 * @property {boolean} [skipInvalid=false] do not throw on invalid types (like function in the safe schema) and skip pairs and single values with such types
 * @property {number} [flowLevel=-1] specifies level of nesting, when to switch from block to flow style for collections. -1 means block style everwhere
 * @property {string} [styles] Each tag may have own set of styles.  - "tag" => "style" map.
 * @property {SchemaDefinition} [schema=YAML.DEFAULT_SAFE_SCHEMA] specifies a schema to use
 * @property {boolean} [sortKeys=false] if `true`, sort keys when dumping YAML. If a function, use the function to sort the keys
 * @property {number} [lineWidth=80] set max line width
 * @property {boolean} [noRefs=false] if `true`, don't convert duplicate objects into references
 * @property {boolean} [noCompatMode=false] if `true` don't try to be compatible with older yaml versions. Currently: don't quote "yes", "no" and so on, as required for YAML 1.1
 * @property {boolean} [condenseFlow=false] if `true` flow sequences will be condensed, omitting the space between `a, b`. Eg. `'[a,b]'`
 */
export type YamlReaderOptions = DumpOptions & fsOptions;

export class YamlReaderError extends Error {
  /**
   * Create an YamlReaderError
   * @param {string} message The message the error should show
   * @private
   */
  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = 'YamlReaderError';
  }
}

/**
 * @method
 * @name readYaml
 *
 * @param {string} filepath Path to the yaml file to parse
 * @param {YamlReaderOptions} [options] Options for the YAML parser and fs file reader
 * @returns {object} JSON-fied data
 * @example
 * ```ts
 * const data = readYaml('/path/to/some/yaml/file');
 * // => JavaScript object with the keys from the yaml
 * ```
 */
export const readYaml = (filepath: string, options?: YamlReaderOptions) => {
  let str;
  const opts = {...options, filename: filepath};

  try {
    str = fs.readFileSync(filepath, options);
  } catch (err) {
    if (/(?:no such file or directory, open)/i.test(err.toString())) {
      throw new YamlReaderError('You supplied a file that was not found, please check your file path');
    }

    return err;
  }

  try {
    const jsonData = yaml.safeLoad(str.toString('utf8'), opts);
    if (typeof jsonData !== 'object') throw new Error('not_valid_yaml');

    return jsonData;
  } catch (err) {
    if (/(?:not_valid_yaml)/i.test(err.toString())) {
      throw new YamlReaderError('It looks like the supplied file was not a valid YAML file!');
    }
    throw new YamlReaderError('Something went wrong parsing the YAML file');
  }
};

export default readYaml;