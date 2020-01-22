export class ZalgoError extends Error {
  /**
   * Create a ZalgoError
   * @param message The message the error should show
   */
  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = 'ZalgoError';
    this.stack = '';
  }
}

/**
 * Splits a string into unicode compatible characters
 *
 * @param splittable The text to start splitting
 */
export const unicodeStringSplitter = (splittable: string): string[] => {
  // eslint-disable-next-line max-len, no-misleading-character-class
  const multicharRegex = /([\uD800-\uDBFF])([\uDC00-\uDFFF])([\uD800-\uDBFF])?([\uDC00-\uDFFF])?|([0-9])?([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F\uFE0F]+)/g;
  const characters = splittable.replace(multicharRegex, '•').split('');

  let m: RegExpExecArray | null;
  let ri = 0;

  // eslint-disable-next-line no-cond-assign
  while ((m = multicharRegex.exec(splittable))) {
    m.index -= ri;
    ri += m[0].length - 1;
    characters.splice(m.index, 1, m[0]);
  }

  return characters;
};

/**
 * Checks if object has a certain property
 *
 * @param obj Object to traverse
 * @param prop Property to find
 */
export const hasOwnProperty = <O extends {}, K extends keyof O>(obj: O, prop: K) => obj && obj[prop];

/**
 * Draws a random number given any maximum
 *
 * @param maximum Maximum to randomize towards
 */
export const randomizer = (maximum: number): number => ~~(Math.random() * maximum);
