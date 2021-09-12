/** Options for the {@link stringify} function */
export interface StringifyOptions {
  /** Separator the querystring should get */
  separator?: string;
  /** Equals sign the querystring should use */
  equals?: string;
  /** Whether the querystring should be automatically prefixed with a `?` */
  includeQuestion?: boolean;
  /**
   * Whether to use [`encodeURIComponent`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
   * on the parameters
   *
   * @default true
   */
  encodeUriComponents?: boolean;
}

/** Options for the {@link parse} function */
export interface ParseOptions {
  /** Separator the querystring has */
  separator?: string;
  /** Equals sign the querystring has */
  equals?: string;
}

/**
 * Checks what kind of primitive type the property is and transforms accordingly
 *
 * @remarks
 * Used for stringify
 *
 * @param v Input to check for primitive type
 */
export function stringifyPrimitive<T extends unknown>(v: T, encode: boolean | undefined): string {
  let primitive: string;

  switch (typeof v) {
    case 'string':
      primitive = v;
      break;
    case 'boolean':
      primitive = v ? 'true' : 'false';
      break;
    case 'number':
      primitive = isFinite(v) ? v.toString() : '';
      break;
    default:
      primitive = '';
  }

  return encode ? encodeURIComponent(primitive) : primitive;
}

/**
 * Stringifies an object
 *
 * @param obj Object to stringify
 * @param options Options for the stringify, see {@link StringifyOptions}
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
export function stringify<I>(
  obj: I,
  options: StringifyOptions = { separator: '&', equals: '=', includeQuestion: false, encodeUriComponents: true }
): string {
  try {
    if (!obj || Object.keys(obj).length <= 0) throw new Error('object_is_empty');
    if (typeof obj !== 'object') throw new Error('input_not_object');
    if (!Reflect.has(options, 'separator')) options.separator = '&';
    if (!Reflect.has(options, 'equals')) options.equals = '=';
    if (!Reflect.has(options, 'includeQuestion')) options.includeQuestion = false;
    if (!Reflect.has(options, 'encodeUriComponents')) options.encodeUriComponents = true;

    const combinedValues: string[] = [];
    for (const [key, value] of Object.entries(obj)) {
      const ks = stringifyPrimitive(key, options.encodeUriComponents) + options.equals!;
      if (Array.isArray(value)) {
        const combinedInnerValues: string[] = [];
        for (const innerValue of value) {
          combinedInnerValues.push(ks + stringifyPrimitive(innerValue, options.encodeUriComponents));
        }
        combinedValues.push(combinedInnerValues.join(options.separator));
      } else {
        combinedValues.push(ks + stringifyPrimitive(value, options.encodeUriComponents));
      }
    }

    if (options.includeQuestion) combinedValues[0] = `?${combinedValues[0]}`;

    return combinedValues.join(options.separator);
  } catch (err) {
    if (/object_is_empty/i.test((err as Error).message)) {
      return `${options.includeQuestion ? '?' : ''}${encodeURIComponent(stringifyPrimitive(obj, options.encodeUriComponents))}`;
    }
    if (/input_not_object/i.test((err as Error).message)) {
      throw '@Favware/Querystring: Your input was not an object. Please supply an object when using Stringify.';
    }

    throw err;
  }
}

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
export function parse<R extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>>(
  qs = '',
  options: ParseOptions = { separator: '&', equals: '=' }
): R {
  try {
    if (typeof qs !== 'string') throw new Error('input_not_string');
    if (qs === '') return {} as R;
    // eslint-disable-next-line prefer-destructuring
    if (/^https?:\/\//.test(qs)) qs = qs.split('?')[1];
    if (!options.separator) options.separator = '&';
    if (!options.equals) options.equals = '=';
    if (qs.startsWith('?')) qs = qs.slice(1);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const obj = {} as any;
    const regexp = /\+/g;
    const queries: string[] = qs.split(options.separator);

    for (const query of queries) {
      const x = query.replace(regexp, '%20');
      const idx = x.indexOf(options.equals);
      let keyStr;
      let valueStr;

      if (idx >= 0) {
        keyStr = x.substr(0, idx);
        valueStr = x.substr(idx + 1);
      } else {
        keyStr = x;
        valueStr = '';
      }

      const k = decodeURIComponent(keyStr);
      const v = decodeURIComponent(valueStr);

      if (!Reflect.has(obj, k)) {
        obj[k] = v;
      } else if (Array.isArray(obj[k])) {
        obj[k].push(v);
      } else {
        (obj as Record<PropertyKey, unknown>)[k] = [obj[k], v];
      }
    }

    return obj as R;
  } catch (err) {
    if (/input_not_string/i.test((err as Error).message)) {
      throw '@Favware/Querystring: Your input was not an string. Please supply a string when using Parse.';
    }

    throw err;
  }
}
