import chars from './chars';

/**
 * Options for the Zalgo screw up
 * @typedef {ZalgoOptions} IZalgoOptions Options for the Zalgo
 * @property {boolean} up Whether the zalgo should go up
 * @property {boolean} middle Whether the zalgo should go in the middle
 * @property {boolean} down Whether the zalgo should go downards
 * @property {'mini' | 'maxi'} size Whether the zalgo should be mini or maxi
 */
export interface ZalgoOptions {
  up?: boolean;
  middle?: boolean;
  down?: boolean;
  size?: 'mini' | 'maxi' | '';
}

/**
 * Counts map for the zalgo
 * @typedef {ZalgoCountsMap} IZalgoCountsMap
 * @property {number} up
 * @property {number} middle
 * @property {number} down
 * @private
 */
interface ZalgoCountsMap {
  up: number;
  middle: number;
  down: number;

  [indexSingature: string]: number;
}

/**
 * @class
 * @name AwesomeZalgoError
 * @private
 */
class AwesomeZalgoError extends Error {
  /**
     * Create an AwesomeZalgoError
     * @param {string} message The message the error should show
     * @private
     */
  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = 'AwesomeZalgoError';
    this.stack = '';
  }
}

/**
 * Splits a string into unicode compatible characters
 * @param {string} splittable The text to start splitting
 * @private
 */
const unicodeStringSplitter = (splittable: string): string[] => {
  // eslint-disable-next-line max-len, no-misleading-character-class
  const multicharRegex = /([\uD800-\uDBFF])([\uDC00-\uDFFF])([\uD800-\uDBFF])?([\uDC00-\uDFFF])?|([0-9])?([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F\uFE0F]+)/g;
  const characters = splittable.replace(multicharRegex, '•').split('');

  let m: RegExpExecArray | null;
  let ri = 0;

  // eslint-disable-next-line no-cond-assign
  while (m = multicharRegex.exec(splittable)) {
    m.index -= ri;
    ri += m[0].length - 1;
    characters.splice(m.index, 1, m[0]);
  }

  return characters;
};

/**
 * Checks if object has a certain property
 * @param obj Object to traverse
 * @param prop Property to find
 * @private
 */
const hasOwnProperty = <O extends {}, K extends keyof O>(obj: O, prop: K) => obj && prop in obj;

/**
 * Draws a random number given any maximum
 * @param {number} maximum Maximum to randomize towards
 * @private
 */
const randomizer = (maximum: number): number => ~~(Math.random() * maximum);

/**
 * @method
 * @name zalgo
 * @description Zalgolize any text
 * @param {string} text Input text to zalgolize
 * @param {ZalgoOptions} [options] Options for the Zalgo
 * @returns {string}
 *
 * @example
 * const zalgo = require('@favware/zalgo');
 * // import zalgo from '@favware/zalgo';
 *
 * // Zalgo usage
 * zalgo('some text')
 *
 *
 * // > ŝ̜̩͇̼̥̼́̏͢o͎͊͜ḿ̛̩̳̖͕̞̩̭ͪe͖̺̣̹̺̋̀͛̽͝ ̖͍̭͓̯̠͑͑͢t̼̪̋͌͢eͯ̋͏͖͎͍̩̭̮x̢͚̄̾̀̈ͧ̓ͩ̚t̪ͫ͝
 *
 */
export const zalgo = (text: string, options: ZalgoOptions = {
  up: true, middle: true, down: true, size: '',
}): string => {
  try {
    if (!text) throw new Error('no_input');
    if (typeof text !== 'string') throw new Error('not_a_string');
    if (!hasOwnProperty(options, 'up')) options.up = true;
    if (!hasOwnProperty(options, 'middle')) options.middle = true;
    if (!hasOwnProperty(options, 'down')) options.down = true;
    if (!hasOwnProperty(options, 'size')) options.size = '';

    const splitText = unicodeStringSplitter(text);
    const splitTextLength = splitText.length;

    let counts: ZalgoCountsMap;
    let result = '';
    const types: string[] = [];

    if (hasOwnProperty(options, 'up')) types.push('up');
    if (hasOwnProperty(options, 'middle')) types.push('middle');
    if (hasOwnProperty(options, 'down')) types.push('down');

    for (let i = 0; i < splitTextLength; i++) {
      if (chars.pattern!.test(splitText[i])) continue;

      // Skip Emojis
      if (splitText[i].length > 1) {
        result += splitText[i];
        continue;
      }

      counts = { up: 0, middle: 0, down: 0 };

      if (options.size === 'mini') counts = { up: randomizer(8), middle: randomizer(2), down: randomizer(8) };
      else if (options.size === 'maxi') counts = { up: randomizer(16) + 3, middle: randomizer(4) + 1, down: randomizer(64) + 3 };
      else counts = { up: randomizer(8) + 1, middle: randomizer(3), down: randomizer(8) + 1 };

      result += text[i];

      for (let j = 0, m = types.length; j < m; j++) {
        const type = types[j];
        let count = counts[type];
        const tchars = chars[type] as string[];
        const max = tchars.length - 1;

        while (count--) {
          result += tchars[randomizer(max)];
        }
      }
    }

    return result;
  } catch (err) {
    if (/(?:no_input)/i.test(err.toString())) throw new AwesomeZalgoError('The zalgo function at least requires some text as input!');
    if (/(?:not_a_string)/i.test(err.toString())) throw new AwesomeZalgoError('The zalgo function expects input of type string as first argument!');
    throw err;
  }
};

/**
 * @method
 * @name banish
 * @description De-zalgolize any text
 * @param {string} purgeable Text to remove zalgo from
 * @returns {string}
 *
 * @example
 * const { banish } = require('@favware/zalgo');
 * // import { basnish } from '@favware/zalgo';
 *
 * // Banish usage
 * banish('ŝ̜̩͇̼̥̼́̏͢o͎͊͜ḿ̛̩̳̖͕̞̩̭ͪe͖̺̣̹̺̋̀͛̽͝ ̖͍̭͓̯̠͑͑͢t̼̪̋͌͢eͯ̋͏͖͎͍̩̭̮x̢͚̄̾̀̈ͧ̓ͩ̚t̪ͫ͝')
 *
 *
 * // > some text
 *
 */
export const banish = (purgeable: string): string => {
  try {
    if (!purgeable) throw new Error('no_input');
    if (typeof purgeable !== 'string') throw new Error('not_a_string');

    return purgeable.replace(chars.pattern!, '');
  } catch (err) {
    if (/(?:no_input)/i.test(err.toString())) throw new AwesomeZalgoError('The banish function at least requires some text as input!');
    if (/(?:not_a_string)/i.test(err.toString())) throw new AwesomeZalgoError('The banish function expects input of type string as first argument!');
    throw err;
  }
};

export default zalgo;