// eslint-disable-next-line
const { zalgo, banish, chars } = require('../src');

describe('No option testing', () => {
  test('should zalgo normally', () => {
    const text = 'That rug really tied the room together';
    const evil = zalgo(text);
    const pure = banish(evil);

    expect(pure).toBe(text);
    expect(chars.pattern.test(evil)).toBe(true);
  });

  test('should skip emojis', () => {
    const text = 'These are some annoying emojis: 💦😂🔥';
    const evil = zalgo(text);
    const pure = banish(evil);

    expect(pure).toBe(text);
    expect(chars.pattern.test(evil)).toBe(true);
  });
});

describe('Option Testing', () => {
  test('should support mini zalgo', () => {
    const text = 'the answer to life, the universe and everything is 42';
    const evil = zalgo(text, { size: 'mini' });
    const pure = banish(evil);

    expect(pure).toBe(text);
    expect(chars.pattern.test(evil)).toBe(true);
  });

  test('should support maxi zalgo', () => {
    const text = "I'm sorry, Dave. I'm afraid I can't do that.";
    const evil = zalgo(text, { size: 'maxi' });
    const pure = banish(evil);

    expect(pure).toBe(text);
    expect(chars.pattern.test(evil)).toBe(true);
  });

  test('should support only upper zalgo', () => {
    const text = 'With great power there must also come – great responsibility.';
    const evil = zalgo(text, { up: true, middle: false, down: true });
    const pure = banish(evil);

    expect(pure).toBe(text);
    expect(chars.pattern.test(evil)).toBe(true);
  });

  test('should support only middle zalgo', () => {
    const text = 'So Long, and Thanks for All the Fish';
    const evil = zalgo(text, { up: false, middle: true, down: false });
    const pure = banish(evil);

    expect(pure).toBe(text);
    expect(chars.pattern.test(evil)).toBe(true);
  });

  test('should support only down zalgo', () => {
    const text = 'I know kung fu.';
    const evil = zalgo(text, { up: false, middle: false, down: true });
    const pure = banish(evil);

    expect(pure).toBe(text);
    expect(chars.pattern.test(evil)).toBe(true);
  });
});
