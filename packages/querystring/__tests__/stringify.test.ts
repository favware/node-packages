import stringify from '../src';

describe('Standard Behaviour', () => {
  test('should work with empty input', () => {
    const expected = '';
    const actual = stringify({});
    expect(actual).toMatchSnapshot();
    expect(actual).toBe(expected);
  });

  test('should work with empty input and custom options', () => {
    const expected = '?';
    const actual = stringify({}, { separator: '&', equals: '=', includeQuestion: true });
    expect(actual).toMatchSnapshot();
    expect(actual).toBe(expected);
  });

  test('should work without options', () => {
    const expected = 'prop=value&prop2=value2&prop3=true&prop4=6&prop5=false&prop6=&prop7=value1&prop7=value2';
    const actual = stringify({
      prop: 'value',
      prop2: 'value2',
      prop3: true,
      prop4: 6,
      prop5: false,
      prop6: Infinity,
      prop7: ['value1', 'value2']
    });
    expect(actual).toMatchSnapshot();
    expect(actual).toBe(expected);
  });

  test('should exclude props that are undefined or null', () => {
    const expected = '';
    const actual = stringify({
      prop: undefined,
      prop2: null
    });

    expect(actual).toMatchSnapshot();
    expect(actual).toBe(expected);
  });

  test('should work with valid options', () => {
    const expected = '?prop=value&prop2=value2';
    const actual = stringify(
      { prop: 'value', prop2: 'value2' },
      { separator: '&', equals: '=', includeQuestion: true }
    );
    expect(actual).toMatchSnapshot();
    expect(actual).toBe(expected);
  });

  test('confirm default export works', () => {
    const expected = '?prop=value&prop2=value2';
    const actual = stringify(
      { prop: 'value', prop2: 'value2' },
      { separator: '&', equals: '=', includeQuestion: true }
    );
    expect(actual).toMatchSnapshot();
    expect(actual).toBe(expected);
  });
});

describe('Error checking', () => {
  /* eslint-disable @typescript-eslint/ban-ts-ignore */
  test('should work with wrong options', () => {
    const expected = 'prop%value=prop2%value2';
    // @ts-ignore
    const actual = stringify(
      { prop: 'value', prop2: 'value2' },
      { separator: '=', equals: '%', includeQeustion: true }
    );
    expect(actual).toMatchSnapshot();
    expect(actual).toBe(expected);
  });

  test('should work with invalid separator and equals options', () => {
    const expected = '?prop=value&prop2=value2';
    // @ts-ignore
    const actual = stringify(
      { prop: 'value', prop2: 'value2' },
      { separator: null, equals: null, includeQuestion: true }
    );
    expect(actual).toMatchSnapshot();
    expect(actual).toBe(expected);
  });

  test('should error with wrong input', () => {
    const expected = '@Favware/Querystring: Your input was not an object. Please supply an object when using Stringify';
    // @ts-ignore
    const actual = stringify('testing wrong input');
    expect(actual).toMatchSnapshot();
    expect(actual).toBe(expected);
  });
  /* eslint-enable @typescript-eslint/ban-ts-ignore */
});
