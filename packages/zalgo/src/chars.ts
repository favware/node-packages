/**
 * Interface for the characters object
 * @typedef {IChars} IChars characters object
 * @property {string[]} [all] All characters
 * @property {string[]} up characters going up
 * @property {string[]} middle characters in the middle
 * @property {string[]} down characters going below
 * @property {RegExp} [pattern] Stored RegExp pattern
 */
export type IChars = {
  all?: string[];
  up: string[];
  middle: string[];
  down: string[];
  pattern?: RegExp;

  [indexSignature: string]: string[] | RegExp | undefined;
};

/* eslint-disable max-len */
/**
 * @constant
 * @name chars
 *
 * @example
 * const { chars } = require('@favware/zalgo');
 * // import { chars } from '@favware/zalgo'
 *
 * console.log(chars);
 */
export const chars: IChars = {
  up: [ '̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒', '͗', '͑', '̇', '̈', '̊', '͂', '̓', '̈́', '͊', '͋', '͌', '̃', '̂', '̌', '͐', '̀', '́', '̋', '̏', '̒', '̓', '̔', '̽', '̉', 'ͣ', 'ͤ', 'ͥ', 'ͦ', 'ͧ', 'ͨ', 'ͩ', 'ͪ', 'ͫ', 'ͬ', 'ͭ', 'ͮ', 'ͯ', '̾', '͛', '͆', '̚' ],
  middle: [ '̕', '̛', '̀', '́', '͘', '̡', '̢', '̧', '̨', '̴', '̵', '̶', '͏', '͜', '͝', '͞', '͟', '͠', '͢', '̸', '̷', '͡', '҉' ],
  down: [ '̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̤', '̥', '̦', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰', '̱', '̲', '̳', '̹', '̺', '̻', '̼', 'ͅ', '͇', '͈', '͉', '͍', '͎', '͓', '͔', '͕', '͖', '͙', '͚', '̣' ],
};
/* eslint-enable max-len */

chars.all = [ ...chars.up, ...chars.middle, ...chars.down ];
chars.pattern = RegExp(`(${chars.all.join('|')})`, 'g');

export default chars;