/** Interface for the characters object */
export interface Chars extends Record<string, string[] | RegExp | undefined> {
  /** All characters */
  all?: string[];
  /** Characters going up */
  up: string[];
  /** Characters in the middle */
  middle: string[];
  /** Characters going below */
  down: string[];
  /** Stored RegExp pattern */
  pattern?: RegExp;
}

/** Options for the Zalgo screw up */
export interface ZalgoOptions {
  /** Whether the zalgo should go up */
  up?: boolean;
  /** Whether the zalgo should go in the middle */
  middle?: boolean;
  /** Whether the zalgo should go downards */
  down?: boolean;
  /** Whether the zalgo should be mini or maxi */
  size?: 'mini' | 'maxi' | '';
}

/** Counts map for the zalgo */
export interface ZalgoCountsMap extends Record<string, number> {
  up: number;
  middle: number;
  down: number;
}
