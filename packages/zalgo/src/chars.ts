/* eslint-disable max-len */
import { Chars } from './interfaces';

/**
 * Supported Zalgo characters, based on {@link https://metacpan.org/pod/Acme::Zalgo | Acme::Zalgo}
 *
 * ```ts
 * const { chars } = require('@favware/zalgo');
 *
 * console.log(chars);
 * ```
 */
export const chars: Chars = {
  up: [
    '̍',
    '̎',
    '̄',
    '̅',
    '̿',
    '̑',
    '̆',
    '̐',
    '͒',
    '͗',
    '͑',
    '̇',
    '̈',
    '̊',
    '͂',
    '̓',
    '̈́',
    '͊',
    '͋',
    '͌',
    '̃',
    '̂',
    '̌',
    '͐',
    '̀',
    '́',
    '̋',
    '̏',
    '̒',
    '̓',
    '̔',
    '̽',
    '̉',
    'ͣ',
    'ͤ',
    'ͥ',
    'ͦ',
    'ͧ',
    'ͨ',
    'ͩ',
    'ͪ',
    'ͫ',
    'ͬ',
    'ͭ',
    'ͮ',
    'ͯ',
    '̾',
    '͛',
    '͆',
    '̚'
  ],
  middle: ['̕', '̛', '̀', '́', '͘', '̡', '̢', '̧', '̨', '̴', '̵', '̶', '͏', '͜', '͝', '͞', '͟', '͠', '͢', '̸', '̷', '͡', '҉'],
  down: [
    '̖',
    '̗',
    '̘',
    '̙',
    '̜',
    '̝',
    '̞',
    '̟',
    '̠',
    '̤',
    '̥',
    '̦',
    '̩',
    '̪',
    '̫',
    '̬',
    '̭',
    '̮',
    '̯',
    '̰',
    '̱',
    '̲',
    '̳',
    '̹',
    '̺',
    '̻',
    '̼',
    'ͅ',
    '͇',
    '͈',
    '͉',
    '͍',
    '͎',
    '͓',
    '͔',
    '͕',
    '͖',
    '͙',
    '͚',
    '̣'
  ]
};

chars.all = [...chars.up, ...chars.middle, ...chars.down];
chars.pattern = RegExp(`(${chars.all.join('|')})`, 'g');

export default chars;
