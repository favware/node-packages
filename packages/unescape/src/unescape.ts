import {charSets} from '.';

let regexCache: RegExp | null = null;

/**
 * Transforms Character Set to regex for string replacement
 * @returns {RegExp}
 * @private
 */
const toRegex = (): RegExp => {
  if (regexCache) return regexCache;

  const keys = Object.keys(charSets).join('|');
  const regex = new RegExp(`(?=(${keys}))\\1`, 'g');

  regexCache = regex;

  return regex;
};

/**
 * Checks if the input is an Array<string> or not
 * @param {unknown} value The array to check if it only has strings
 * @returns {boolean}
 * @private
 */
const isArrayOfOnlyStrings = (value: unknown): boolean => {
  if (Array.isArray(value)) {
    return Boolean(value.every(item => typeof item === 'string'));
  }

  return false;
};

/**
 * Unescapes any given string
 * @method
 * @name unescape
 * @param {string | string[] | TemplateStringsArray} input input string to unescape
 * @param {any[]} values rest values
 * @returns {string} Unescape string
 * @example
 * ```ts
 * console.log(unescape('&lt;div&gt;abc&lt;/div&gt;'));
 * ```
 * @example
 * ```ts
 * // use template tags
 * console.log(unescape`&lt;div&gt;abc&lt;/div&gt;`);
 * ```
 * @example
 * ```ts
 * // or with variables
 * const unescaped = '&lt;div&gt;unescaped&lt;/div&gt;';
 * console.log(unescape`awesome text with some ${unescaped} section`);
 * ```
 */
export const unescape = (input: string | string[] | TemplateStringsArray, ...values: string[]): string => {
  const regex: RegExp = toRegex();
  const inputArray: string[] = isArrayOfOnlyStrings(input) ? input as string[] : [];
  let str = '';

  if (inputArray.length) {
    inputArray.forEach((entry: string, index: number) => {
      if (values[index]) {
        values[index] = values[index].replace(regex, (m: string) => charSets[m]);
      }
      entry = entry.replace(regex, (m: string) => charSets[m]);
      str += entry + (values[index] || '');
    });
  } else {
    str = (input as string).replace(regex, (m: string) => charSets[m]);
  }

  return str;
};

export default unescape;