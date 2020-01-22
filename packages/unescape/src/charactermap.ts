/**
 * For performance, this library only handles a subset of most common entities.
 *
 * Either log the charsets or check them out on {@link https://favware.tech/unescape | the documentation}
 *
 * ```ts
 * const { charSets } = require('@favware/unescape');
 * console.log(charSets)
 * ```
 */
export const charSets: { [key: string]: string } = {
  '&quot;': '"',
  '&#34;': '"',
  '&#034;': '"',
  '&#x22;': '"',

  '&apos;': "'",
  '&#39;': "'",
  '&#039;': "'",
  '&#x27;': "'",

  '&amp;': '&',
  '&#38;': '&',
  '&#038;': '&',
  '&#x26;': '&',

  '&gt;': '>',
  '&#62;': '>',
  '&#062;': '>',
  '&#x3e;': '>',

  '&lt;': '<',
  '&#60;': '<',
  '&#060;': '<',
  '&#x3c;': '<',

  '&copy;': '©',
  '&#169;': '©',
  '&#xa9;': '©',

  '&reg;': '®',
  '&#174;': '®',
  '&#xae;': '®',

  '&cent;': '¢',
  '&#162;': '¢',
  '&#xa2;': '¢',

  '&#36;': '$',
  '&#x24;': '$',

  '&euro;': '€',
  '&#8364;': '€',

  '&pound;': '£',
  '&#163;': '£',
  '&#xa3;': '£',

  '&yen;': '¥',
  '&#165;': '¥',
  '&#xa5;': '¥',

  '&nbsp;': ' ',
  '&#160;': ' ',
  '&#xa0;': ' ',

  '&rsquo;': '’',
  '&#8217;': '’',
  '&#x2019;': '’',

  '&lsquo;': '‘',
  '&#8216;': '‘',
  '&#x2018;': '‘',

  '&hellip;': '…',
  '&#8230;': '…',
  '&#x2026;': '…',

  '&trade;': '™',
  '&#8482;': '™',
  '&#x2122;': '™'
};
