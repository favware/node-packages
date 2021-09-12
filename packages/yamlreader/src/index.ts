import fs from 'fs';
import yaml, { DumpOptions } from 'js-yaml';

/** FS Options */
export interface FsOptions {
  encoding?: 'utf8' | 'ascii' | 'utf16le' | 'ucs2' | 'base64' | 'latin1' | 'binary' | 'hex';
  flag?: string;
}

/**
 * YAMLReaderOptions for configuring both `fs` and `js-yaml`
 * See {@link https://github.com/nodeca/js-yaml#safeload-string---options- | js-yaml configuration} and {@link FsOptions} for details
 */
export type YamlReaderOptions = DumpOptions & FsOptions;

/**
 * Reads a YAML file and outputs a JavaScript object
 *
 * @param filepath Path to the yaml file to parse
 * @param options Options for the YAML parser and fs file reader
 * @example
 * ```ts
 * const data = readYaml('/path/to/some/yaml/file');
 * ```
 */
export const readYaml = <T = unknown>(filepath: string, options?: YamlReaderOptions): T => {
  let str;
  const opts = { ...options, filename: filepath };

  try {
    str = fs.readFileSync(filepath, options);
  } catch (err) {
    if (/(?:no such file or directory, open)/i.test((err as Error).message)) {
      throw 'You supplied a file that was not found, please check your file path';
    }

    throw err;
  }

  try {
    const jsonData = yaml.load(str.toString('utf8'), opts);
    if (typeof jsonData !== 'object') throw new Error('not_valid_yaml');

    return jsonData as unknown as T;
  } catch (err) {
    if (/(?:not_valid_yaml)/i.test((err as Error).message)) {
      throw 'It looks like the supplied file was not a valid YAML file!';
    }
    throw 'Something went wrong parsing the YAML file';
  }
};

export * from 'js-yaml';
