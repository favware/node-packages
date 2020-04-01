import { charSets } from '.';

let regexCache: RegExp | null = null;

/** Transforms Character Set to regex for string replacement */
const toRegex = (): RegExp => {
  if (regexCache) return regexCache;

  const keys = Object.keys(charSets).join('|');
  const regex = new RegExp(`(?=(${keys}))\\1`, 'g');

  regexCache = regex;

  return regex;
};

/** TypeGuard to ensure input is an array of only strings */
const isArrayOfOnlyStrings = (array: unknown): array is string[] => {
  if (Array.isArray(array)) {
    return array.every((val) => typeof val === 'string');
  }

  return false;
};

/**
 * Unescapes any given string
 * ```ts
 * console.log(unescape('&lt;div&gt;abc&lt;/div&gt;'));
 * ```
 * ```ts
 * // use template tags
 * console.log(unescape`&lt;div&gt;abc&lt;/div&gt;`);
 * ```
 * ```ts
 * // or with variables
 * const unescaped = '&lt;div&gt;unescaped&lt;/div&gt;';
 * console.log(unescape`awesome text with some ${unescaped} section`);
 * ```
 *
 * @param input input string to unescape
 * @param values rest values
 * @returns Unescaped string
 * @example
 * ```ts
 * unescape('&lt;div&gt;abc&lt;/div&gt;')
 * ```
 *
 * @example
 * ```ts
 * unescape`&lt;div&gt;abc&lt;/div&gt;`
 * ```
 *
 * @example
 * ```ts
 * unescape`awesome text with some ${text} section`
 * ```
 */
export const unescape = (input: string | string[] | TemplateStringsArray, ...values: string[]): string => {
  const regex: RegExp = toRegex();
  const inputArray: string[] = isArrayOfOnlyStrings(input) ? input : [];
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
