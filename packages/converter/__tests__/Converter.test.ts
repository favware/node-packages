import converter, { convert } from '../src';

describe('verify support for all combinations', () => {
  test('should support primary-default to primary', () => {
    const expected = 0.001;
    const actual = convert(1, 'g', 'kg');
    expect(actual).toBe(expected);
  });

  test('should support primary to primary-default', () => {
    const expected = 1000;
    const actual = convert(1, 'kg', 'g');
    expect(actual).toBe(expected);
  });

  test('should support primary to primary', () => {
    const expected = 0.001;
    const actual = convert(1, 'kg', 'mt');
    expect(actual).toBe(expected);
  });

  test('should support secondary to secondary', () => {
    const expected = 0.00003125;
    const actual = convert(1, 'oz', 't');
    expect(actual).toBe(expected);
  });

  test('should support secondary-default to secondary', () => {
    const expected = 16;
    const actual = convert(1, 'lb', 'oz');
    expect(actual).toBe(expected);
  });

  test('should support secondary to secondary-default', () => {
    const expected = 0.0625;
    const actual = convert(1, 'oz', 'lb');
    expect(actual).toBe(expected);
  });

  test('should support primary-default to secondary-default', () => {
    const expected = 0.00220462;
    const actual = convert(1, 'g', 'lb');
    expect(actual).toBe(expected);
  });

  test('should support secondary-default to primary-default', () => {
    const expected = 453.592;
    const actual = convert(1, 'lb', 'g');
    expect(actual).toBe(expected);
  });

  test('should support primary to secondary-default', () => {
    const expected = 2.20462442;
    const actual = convert(1, 'kg', 'lb');
    expect(actual).toBe(expected);
  });

  test('should support secondary to primary-default', () => {
    const expected = 28.3495;
    const actual = convert(1, 'oz', 'g');
    expect(actual).toBe(expected);
  });

  test('should support primary to secondary', () => {
    const expected = 35.27399072;
    const actual = convert(1, 'kg', 'oz');
    expect(actual).toBe(expected);
  });

  test('should support secondary to primary', () => {
    const expected = 0.0283495;
    const actual = convert(1, 'oz', 'kg');
    expect(actual).toBe(expected);
  });
});

describe('verify transform ratio works', () => {
  test('should support celcius to fahrenheit', () => {
    const expected = 33.8;
    const actual = convert(1, 'c', 'f');
    expect(actual).toBe(expected);
  });

  test('should support fahrenheit to celcius', () => {
    const expected = -17.22222222;
    const actual = convert(1, 'f', 'c');
    expect(actual).toBe(expected);
  });

  describe('verify value shift works', () => {
    test('should support celcius to kelvin', () => {
      const expected = 274.15;
      const actual = convert(1, 'c', 'k');
      expect(actual).toBe(expected);
    });

    test('should support celcius to rankine', () => {
      const expected = 493.47;
      const actual = convert(1, 'c', 'r');
      expect(actual).toBe(expected);
    });

    test('should support fahrenheit to kelvin', () => {
      const expected = 255.92777778;
      const actual = convert(1, 'f', 'k');
      expect(actual).toBe(expected);
    });

    test('should support fahrenheit to rankine', () => {
      const expected = 460.67;
      const actual = convert(1, 'f', 'r');
      expect(actual).toBe(expected);
    });
  });
});

describe('verify unique ratios work', () => {
  test('should support meters to feet and inch', () => {
    const expected = '5 feet and 7 inches';
    const actual = convert(1.7, 'm', 'fti');
    expect(actual).toBe(expected);
  });

  test('should support non-defaults to fti', () => {
    const expected = '8815 feet and 7 inches';
    const actual = convert(2.687, 'km', 'fti');
    expect(actual).toBe(expected);
  });

  test('should be 0 inches for rounded feet', () => {
    const expected = '1 foot and 0 inches';
    const actual = convert(1, 'ft', 'fti');
    expect(actual).toBe(expected);
  });
});

describe('verify support for options', () => {
  test('modifying decimals with bit to kilobit', () => {
    const expected = 0.00098;
    const actual = convert(1, 'b', 'kb', { precision: 5 });
    expect(actual).toBe(expected);
  });

  test('modifying decimals with herz to radians per second', () => {
    const expected = 6.28;
    const actual = convert(1, 'hz', 'rad/s', { precision: 2 });
    expect(actual).toBe(expected);
  });
});

describe('verify default export works', () => {
  test('should support primary-default to primary', () => {
    const expected = 0.001;
    const actual = converter(1, 'g', 'kg');
    expect(actual).toBe(expected);
  });
});
