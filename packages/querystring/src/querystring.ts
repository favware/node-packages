import { FunctionSource, ParseOptions, QuerystringError, QuerystringObject, StringifyOptions } from './types';

/**
 * Checks what kind of primitive type the property is and transforms accordingly
 *
 * @remarks
 * Used for stringify
 *
 * @param v Input to check for primitive type
 */
const stringifyPrimitive = <T extends unknown>(v: T): string => {
  // eslint-disable-line @typescript-eslint/no-explicit-any
  switch (typeof v) {
    case 'string':
      return v;
    case 'boolean':
      return v ? 'true' : 'false';
    case 'number':
      return isFinite(v) ? v.toString() : '';
    default:
      return '';
  }
};

/**
 * Gracefully handles errors thrown by other functions
 *
 * @param err The error message to parse
 * @param source The source of the error, one of {@link FunctionSource}
 */
const handleQuerystringError = (err: string, source: FunctionSource): string | QuerystringError => {
  switch (source) {
    case FunctionSource.Parse:
      return { err };
    case FunctionSource.Stringify:
    default:
      return err;
  }
};

/**
 * Stringifies an object
 *
 * @param obj Object to stringify
 * @param options Options for the stringify, see {@link IStringifyOptions}
 * @returns The stringified query object
 * @example
 * ```ts
 * stringify({prop: 'value', prop2: 'value2'})
 * ```
 *
 * @example
 * ```ts
 * stringify({prop: 'value', prop2: 'value2'}, {separator: '&', equals: '=', includeQuestion: false})
 * ```
 *
 * @example
 * ```ts
 * stringify({prop: 'value', prop2: 'value2'}, {separator: '&&', equals: '=', includeQuestion: true})
 * ```
 */
export const stringify = (
  obj: QuerystringObject,
  options: StringifyOptions = { separator: '&', equals: '=', includeQuestion: false }
): string => {
  try {
    if (!obj || Object.keys(obj).length <= 0) throw new Error('object_is_empty');
    if (typeof obj !== 'object') throw new Error('input_not_object');
    if (!options.separator) options.separator = '&';
    if (!options.equals) options.equals = '=';
    if (!options.includeQuestion) options.includeQuestion = false;
    const keys = Object.keys(obj)
      .sort() // eslint-disable-line @typescript-eslint/require-array-sort-compare
      .map(key => {
        const ks = encodeURIComponent(stringifyPrimitive(key)) + options.equals!;
        if (obj[key] === undefined || obj[key] === null) return '';
        if (Array.isArray(obj[key])) {
          return obj[key].map((v: string) => ks + encodeURIComponent(stringifyPrimitive(v))).join(options.separator);
        }

        return ks + encodeURIComponent(stringifyPrimitive(obj[key]));
      })
      .filter(Boolean);

    if (options.includeQuestion) keys[0] = `?${keys[0]}`;

    return keys.join(options.separator);
  } catch (err) {
    if (/object_is_empty/i.test(err.toString())) {
      return `${options.includeQuestion ? '?' : ''}${encodeURIComponent(stringifyPrimitive(obj))}`;
    }
    if (/input_not_object/i.test(err.toString())) {
      return handleQuerystringError(
        '@Favware/Querystring: Your input was not an object. Please supply an object when using Stringify',
        FunctionSource.Stringify
      ) as string;
    }

    return err;
  }
};

/**
 * Parses a querystring back to an object
 *
 * @param qs Querystring to parse
 * @param options Options for the parse, see {@link IParseOptions}
 * @returns A JavaScript object of the parsed parameters
 * @example
 * ```ts
 * parse('?prop=value&prop2=value2')
 * ```
 *
 * @example
 * ```ts
 * parse('?prop=value&prop2=value2', {separator: '&', equals: '='})
 * ```
 *
 * @example
 * ```ts
 * parse('prop=value&&prop2=value2', {separator: '&&', equals: '='})
 * ```
 */
export const parse = (qs = '', options: ParseOptions = { separator: '&', equals: '=' }): QuerystringObject => {
  try {
    if (typeof qs !== 'string') throw new Error('input_not_string');
    if (qs === '') return {};
    if (/^https?:\/\//.test(qs)) qs = qs.split('?')[1];
    if (!options.separator) options.separator = '&';
    if (!options.equals) options.equals = '=';
    if (qs.startsWith('?')) qs = qs.slice(1);
    const obj: QuerystringObject = {};
    const regexp = /\+/g;
    const queries: string[] = qs.split(options.separator);
    const maxKeys = 1000;

    let len = queries.length;
    if (maxKeys > 0 && len > maxKeys) len = maxKeys;

    for (const query of queries) {
      const x = query.replace(regexp, '%20');
      const idx = x.indexOf(options.equals);
      let kstr;
      let vstr;

      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = '';
      }

      const k = decodeURIComponent(kstr);
      const v = decodeURIComponent(vstr);

      if (!(k in obj)) {
        obj[k] = v;
      } else if (Array.isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }

    return obj;
  } catch (err) {
    if (/input_not_string/i.test(err.toString())) {
      return handleQuerystringError(
        '@Favware/Querystring: Your input was not an string. Please supply a string when using Parse',
        FunctionSource.Parse
      ) as QuerystringError;
    }

    return err;
  }
};

export default stringify;
