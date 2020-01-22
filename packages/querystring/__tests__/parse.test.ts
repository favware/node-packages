import { parse } from '../src/querystring';
import { oneLine } from 'common-tags';

describe('Standard Behaviour', () => {
  test('should work with empty input', () => {
    const expected = {};
    const actual = parse('');
    expect(actual).toMatchSnapshot();
    expect(actual).toMatchObject(expected);
  });

  test('should work without options', () => {
    const expected = { prop: 'value', prop2: 'value2' };
    const actual = parse('?prop=value&prop2=value2');
    expect(actual).toMatchSnapshot();
    expect(actual).toMatchObject(expected);
  });

  test('should work when key exists multiple times', () => {
    const expected = { prop: ['value', 'value'] };
    const actual = parse('?prop=value&prop=value');
    expect(actual).toMatchSnapshot();
    expect(actual).toMatchObject(expected);
  });

  test('should work when key has array-like value', () => {
    const expected = { prop: "['value', 'value']" };
    const actual = parse("?prop=['value', 'value']");
    expect(actual).toMatchSnapshot();
    expect(actual).toMatchObject(expected);
  });

  test('should work with no parameters', () => {
    const expected = {};
    const actual = parse();
    expect(actual).toMatchSnapshot();
    expect(actual).toMatchObject(expected);
  });

  test('should work with valid options', () => {
    const expected = { prop: 'value', prop2: 'value2' };
    const actual = parse('?prop=value&prop2=value2', { separator: '&', equals: '=' });
    expect(actual).toMatchSnapshot();
    expect(actual).toMatchObject(expected);
  });

  test('should work when passing a full URL', () => {
    const expected = { prop: 'value', prop2: 'value2' };
    const actual = parse('https://google.com/?prop=value&prop2=value2', { separator: '&', equals: '=' });
    expect(actual).toMatchSnapshot();
    expect(actual).toMatchObject(expected);
  });

  test('should work when exceeding max keys', () => {
    /* eslint-disable max-len */
    const keys = oneLine`
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    prop=value&prop0=value&prop1=value&prop2=value&prop3=value&prop4=value&prop5=value&prop6=value&prop7=value&prop8=value&prop9=value&prop10=value&prop11=value&prop12=value&prop13=value&prop14=value&prop15=value&prop16=value&prop17=value&prop18=value&prop19=value&prop20=value&
    `.replace(/ /gm, '');
    const expected = {
      prop: [
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value'
      ],
      prop2: [
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value',
        'value'
      ]
    };
    /* eslint-enable max-len */
    const actual = parse(`?${keys}`, { separator: '&', equals: '=' });
    expect(actual).toMatchSnapshot();
    expect(actual).toMatchObject(expected);

    expect(true).toBe(true);
  });
});

describe('Error checking', () => {
  /* eslint-disable @typescript-eslint/ban-ts-ignore */
  test('should work with wrong options', () => {
    const expected = { prop: 'value', prop2: 'value2' };
    // @ts-ignore
    const actual = parse('?prop%value&prop2%value2', { seperator: '&', equals: '%' });
    expect(actual).toMatchSnapshot();
    expect(actual).toMatchObject(expected);
  });

  test('should error with wrong input', () => {
    const expected = {
      err: '@Favware/Querystring: Your input was not an string. Please supply a string when using Parse'
    };
    // @ts-ignore
    const actual = parse({ prop: 'value', prop2: 'value2' });
    expect(actual).toMatchSnapshot();
    expect(actual).toMatchObject(expected);
  });

  test('should work when passing invalid separator and equals', () => {
    const expected = { prop: 'value', prop2: 'value2' };
    // @ts-ignore
    const actual = parse('?prop=value&prop2=value2', { separator: null, equals: null });
    expect(actual).toMatchSnapshot();
    expect(actual).toMatchObject(expected);
  });
  /* eslint-enable @typescript-eslint/ban-ts-ignore */
});
