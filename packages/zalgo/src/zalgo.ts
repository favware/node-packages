import chars from './chars';
import { ZalgoOptions, ZalgoCountsMap } from './interfaces';
import { hasOwnProperty, unicodeStringSplitter, randomizer, ZalgoError } from './utils';

/**
 * Zalgofies any given text
 *
 * @param text Input text to zalgolize
 * @param options Options for the Zalgo
 * @returns The door to hell
 * @example
 * ```ts
 * zalgo('some text') // ==> ŝ̜̩͇̼̥̼́̏͢o͎͊͜ḿ̛̩̳̖͕̞̩̭ͪe͖̺̣̹̺̋̀͛̽͝ ̖͍̭͓̯̠͑͑͢t̼̪̋͌͢eͯ̋͏͖͎͍̩̭̮x̢͚̄̾̀̈ͧ̓ͩ̚t̪ͫ͝
 *```
 */
export const zalgo = (
  text: string,
  options: ZalgoOptions = {
    up: true,
    middle: true,
    down: true,
    size: ''
  }
): string => {
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
      else if (options.size === 'maxi')
        counts = { up: randomizer(16) + 3, middle: randomizer(4) + 1, down: randomizer(64) + 3 };
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
    if (/(?:no_input)/i.test(err.toString()))
      throw new ZalgoError('The zalgo function at least requires some text as input!');
    if (/(?:not_a_string)/i.test(err.toString()))
      throw new ZalgoError('The zalgo function expects input of type string as first argument!');
    throw err;
  }
};

/**
 * De-zalgolize any text
 * @param purgeable Text to remove zalgo from
 * @returns The door to heaven
 * @example
 * ```ts
 * banish('ŝ̜̩͇̼̥̼́̏͢o͎͊͜ḿ̛̩̳̖͕̞̩̭ͪe͖̺̣̹̺̋̀͛̽͝ ̖͍̭͓̯̠͑͑͢t̼̪̋͌͢eͯ̋͏͖͎͍̩̭̮x̢͚̄̾̀̈ͧ̓ͩ̚t̪ͫ͝') // ==> some text
 * ```
 */
export const banish = (purgeable: string): string => {
  try {
    if (!purgeable) throw new Error('no_input');
    if (typeof purgeable !== 'string') throw new Error('not_a_string');

    return purgeable.replace(chars.pattern!, '');
  } catch (err) {
    if (/(?:no_input)/i.test(err.toString()))
      throw new ZalgoError('The banish function at least requires some text as input!');
    if (/(?:not_a_string)/i.test(err.toString()))
      throw new ZalgoError('The banish function expects input of type string as first argument!');
    throw err;
  }
};

export default zalgo;
