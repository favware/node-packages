import { stringify } from '../src';

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
    const expected = 'prop=value&prop2=value2&prop3=true&prop4=6&prop5=false&prop6=&prop7=value1&prop7=value2&prop8=';
    const actual = stringify({
      prop: 'value',
      prop2: 'value2',
      prop3: true,
      prop4: 6,
      prop5: false,
      prop6: Infinity,
      prop7: ['value1', 'value2'],
      prop8: undefined
    });
    expect(actual).toMatchSnapshot();
    expect(actual).toBe(expected);
  });

  test('should exclude props that are undefined or null', () => {
    const expected = 'prop=&prop2=';
    const actual = stringify({
      prop: undefined,
      prop2: null
    });

    expect(actual).toMatchSnapshot();
    expect(actual).toBe(expected);
  });

  test('should work with valid options', () => {
    const expected = '?prop=value&prop2=value2';
    const actual = stringify({ prop: 'value', prop2: 'value2' }, { separator: '&', equals: '=', includeQuestion: true });
    expect(actual).toMatchSnapshot();
    expect(actual).toBe(expected);
  });

  test('confirm default export works', () => {
    const expected = '?prop=value&prop2=value2';
    const actual = stringify({ prop: 'value', prop2: 'value2' }, { separator: '&', equals: '=', includeQuestion: true });
    expect(actual).toMatchSnapshot();
    expect(actual).toBe(expected);
  });

  test('should not encode Uri Components when specified', () => {
    const expected = 'prop=value+_{}":';
    const actual = stringify({ prop: 'value+_{}":' }, { encodeUriComponents: false });
    expect(actual).toMatchSnapshot();
    expect(actual).toBe(expected);
  });

  test('should encode Uri Components when specified', () => {
    const expected = 'prop=value%2B_%7B%7D%22%3A';
    const actual = stringify({ prop: 'value+_{}":' }, { encodeUriComponents: true });
    expect(actual).toMatchSnapshot();
    expect(actual).toBe(expected);
  });
});

describe('Error checking', () => {
  test('should work with wrong options', () => {
    const expected = 'prop%value=prop2%value2';
    const actual = stringify(
      { prop: 'value', prop2: 'value2' },
      // @ts-expect-error This is testing TS-invalid code that is handled in JS
      { separator: '=', equals: '%', includeQeustion: true }
    );
    expect(actual).toMatchSnapshot();
    expect(actual).toBe(expected);
  });

  test('should work with invalid separator and equals options', () => {
    const expected = '?propnullvaluenullprop2nullvalue2';
    const actual = stringify(
      { prop: 'value', prop2: 'value2' },
      // @ts-ignore ts-expect-error doesn't recognize this as a valid usecase yet
      { separator: null, equals: null, includeQuestion: true }
    );
    expect(actual).toMatchSnapshot();
    expect(actual).toBe(expected);
  });

  test('should error with wrong input', () => {
    expect(() => stringify('testing wrong input')).toThrowError(
      '@Favware/Querystring: Your input was not an object. Please supply an object when using Stringify.'
    );
  });
});
