import { ConverterError, definitions, roundNumber } from './helpers';
import { ConvertOptions, System, UnitData, UnitDefinition } from './interfaces';

/**
 * Converts input from one unit to another unit
 * @param value The input value to convert
 * @param fromUnit The unit to convert from
 * @param toUnit The unit to convert to
 * @param options _(Optional)_ Options for the conversion
 * @returns Will return a number if the function succeeded or a string with an error message if not
 * @example
 * ```ts
 * convert(5, 'm', 'ft')
 * ```
 *
 * @example
 * ```ts
 * convert(5, 'c', 'f', { precision: 2 })
 * ```
 */
export const convert = (
  value: number,
  fromUnit: string,
  toUnit: string,
  options: ConvertOptions = { precision: 8 }
): number | string => {
  try {
    if (!value || !fromUnit || !toUnit) throw new Error('missing_input');
    if (typeof value !== 'number') throw new Error('value_not_number');
    if (typeof fromUnit !== 'string') throw new Error('fromUnit_not_string');
    if (typeof toUnit !== 'string') throw new Error('toUnit_not_string');

    const supportedIds = Object.values(definitions)
      .map((definition: UnitDefinition) => definition.data.map((data: UnitData) => data.id))
      .flat();

    if (!supportedIds.includes(fromUnit)) throw new Error('fromUnit_not_supported');
    if (!supportedIds.includes(fromUnit)) throw new Error('toUnit_not_supported');
    if (!options.precision) options.precision = 2;
    if (fromUnit === toUnit) return value;

    let definitionData: UnitDefinition = {
      name: '',
      primary: { default: '', ratio: 1, transform: undefined },
      secondary: { default: '', ratio: 1, transform: undefined },
      data: [{ id: '', system: System.PRIMARY, multiplier: 1 }]
    };

    Object.values(definitions).forEach((definition: UnitDefinition) => {
      const idsInDefinition = definition.data.map((unit: UnitData) => unit.id);
      if (idsInDefinition.includes(fromUnit) && idsInDefinition.includes(toUnit)) definitionData = definition;
    });

    if (!definitionData.name) throw new Error('no_data_found');

    const fromData = definitionData.data.find((unit) => unit.id === fromUnit);
    const toData = definitionData.data.find((unit) => unit.id === toUnit);
    if (!fromData) throw new Error('fromUnit_not_supported');
    if (!toData) throw new Error('toUnit_not_supported');
    if (fromData.uniqueTransform) throw new Error('fromUnit_has_uniqueTransform');

    let result = value * fromData.multiplier;

    if (fromData.valueShift) result -= fromData.valueShift;

    if (fromData.system !== toData.system) {
      const transform = definitionData[fromData.system]!.transform; // eslint-disable-line @typescript-eslint/unbound-method
      if (typeof transform === 'function') {
        result = transform(result);
      } else {
        result *= definitionData[fromData.system]!.ratio;
      }
    }

    if (toData.valueShift) result += toData.valueShift;

    if (toData.uniqueTransform) return toData.uniqueTransform(result);

    return roundNumber(result / toData.multiplier, options.precision);
  } catch (err) {
    if (/(?:missing_input)/i.test(err.toString()))
      throw new ConverterError('You are lacking some input arguments, please supply all arguments');
    if (/(?:value_not_number)/i.test(err.toString()))
      throw new ConverterError('Your input value is not of type number');
    if (/(?:fromUnit_not_string)/i.test(err.toString()))
      throw new ConverterError('Your fromUnit is not of type string');
    if (/(?:toUnit_not_string)/i.test(err.toString())) throw new ConverterError('Your toUnit is not of type string');
    if (/(?:fromUnit_not_supported)/i.test(err.toString()))
      throw new ConverterError('Your fromUnit is not supported by this library');
    if (/(?:toUnit_not_supported)/i.test(err.toString()))
      throw new ConverterError('Your toUnit is not supported by this library');
    if (/(?:no_data_found)/i.test(err.toString()))
      throw new ConverterError(`Cannot convert incompatible unit of ${fromUnit} to ${toUnit}`);
    if (/(?:fromUnit_has_uniqueTransform)/i.test(err.toString())) {
      throw new ConverterError(
        `
          Looks like your from unit had a "unique transform".
          Units with a unique transform can only be used as the "toUnit"
          as they return the final conversion result.
        `
          .replace(/(?:\n(?:\s*))+/g, ' ')
          .replace(/^ (.+) $/, '$1')
      );
    }

    throw new ConverterError(
      `Unhandled Error, please contact the developer of the package. Message: ${err.toString()}`
    );
  }
};
