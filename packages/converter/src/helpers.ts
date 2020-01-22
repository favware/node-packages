import { System, UnitDefinition } from './interfaces';

/**
 * Rounds any number to a given precision
 * @method
 * @name roundNumber
 * @param num The number to round
 * @param precision The precision to use
 * @returns rounded off number
 */
export const roundNumber = (num: number, precision = 8): number => {
  if (!num.toString().includes('e')) {
    return Number(`${Math.round(Number(`${num}e+${precision}`))}e-${precision}`);
  }
  const arr = `${num}`.split('e');
  let sig = '';
  if (Number(arr[1]) + precision > 0) sig = '+';

  return Number(`${Math.round(Number(`${Number(arr[0])}e${sig}${Number(arr[1]) + precision}`))}e-${precision}`);
};

/**
 * All the unit definitions used by the library
 */
export const definitions: UnitDefinition[] = [
  {
    name: 'acceleration',
    primary: { default: 'g', ratio: 1 },
    data: [
      { id: 'gf', system: System.PRIMARY, multiplier: 9.80665 },
      { id: 'm/s2', system: System.PRIMARY, multiplier: 1 }
    ]
  },
  {
    name: 'angle',
    primary: { default: 'deg', ratio: 1 },
    data: [
      { id: 'rad', system: System.PRIMARY, multiplier: 180 / Math.PI },
      { id: 'deg', system: System.PRIMARY, multiplier: 1 },
      { id: 'grad', system: System.PRIMARY, multiplier: 9 / 10 },
      { id: 'arcmin', system: System.PRIMARY, multiplier: 1 / 60 },
      { id: 'arcsec', system: System.PRIMARY, multiplier: 1 / 3.6e3 }
    ]
  },
  {
    name: 'apparentPower',
    primary: { default: 'va', ratio: 1 },
    data: [
      { id: 'va', system: System.PRIMARY, multiplier: 1 },
      { id: 'miva', system: System.PRIMARY, multiplier: 1e-3 },
      { id: 'kva', system: System.PRIMARY, multiplier: 1e3 },
      { id: 'mva', system: System.PRIMARY, multiplier: 1e6 },
      { id: 'gva', system: System.PRIMARY, multiplier: 1e9 }
    ]
  },
  {
    name: 'area',
    primary: { default: 'm2', ratio: 10.7639 },
    secondary: { default: 'ft2', ratio: 1 / 10.76391 },
    data: [
      { id: 'mm2', system: System.PRIMARY, multiplier: 1e-6 },
      { id: 'cm2', system: System.PRIMARY, multiplier: 1e-4 },
      { id: 'm2', system: System.PRIMARY, multiplier: 1 },
      { id: 'dm', system: System.PRIMARY, multiplier: 1e2 },
      { id: 'ha', system: System.PRIMARY, multiplier: 1e4 },
      { id: 'km2', system: System.PRIMARY, multiplier: 1e6 },
      { id: 'in2', system: System.SECONDARY, multiplier: 1 / 144 },
      { id: 'yd2', system: System.SECONDARY, multiplier: 9 },
      { id: 'ft2', system: System.SECONDARY, multiplier: 1 },
      { id: 'ac', system: System.SECONDARY, multiplier: 43560 },
      { id: 'mi2', system: System.SECONDARY, multiplier: 27878400 }
    ]
  },
  {
    name: 'charge',
    primary: { default: 'co', ratio: 1 },
    data: [
      { id: 'co', system: System.PRIMARY, multiplier: 1 },
      { id: 'mco', system: System.PRIMARY, multiplier: 1e-3 },
      { id: 'mico', system: System.PRIMARY, multiplier: 1e-6 },
      { id: 'nco', system: System.PRIMARY, multiplier: 1e-9 },
      { id: 'pco', system: System.PRIMARY, multiplier: 1e-12 }
    ]
  },
  {
    name: 'current',
    primary: { default: 'a', ratio: 1 },
    data: [
      { id: 'a', system: System.PRIMARY, multiplier: 1 },
      { id: 'ma', system: System.PRIMARY, multiplier: 1e-3 },
      { id: 'ka', system: System.PRIMARY, multiplier: 1e3 }
    ]
  },
  {
    name: 'digital',
    primary: { default: 'b', ratio: 1 / 8 },
    secondary: { default: 'by', ratio: 8 },
    data: [
      { id: 'b', system: System.PRIMARY, multiplier: 1 },
      { id: 'kb', system: System.PRIMARY, multiplier: 1024 },
      { id: 'mb', system: System.PRIMARY, multiplier: 1048576 },
      { id: 'gb', system: System.PRIMARY, multiplier: 1073741824 },
      { id: 'tb', system: System.PRIMARY, multiplier: 1099511627776 },
      { id: 'by', system: System.SECONDARY, multiplier: 1 },
      { id: 'kby', system: System.SECONDARY, multiplier: 1024 },
      { id: 'mby', system: System.SECONDARY, multiplier: 1048576 },
      { id: 'gby', system: System.SECONDARY, multiplier: 1073741824 },
      { id: 'tby', system: System.SECONDARY, multiplier: 1099511627776 }
    ]
  },
  {
    name: 'each',
    primary: { default: 'ea', ratio: 1 },
    data: [
      { id: 'ea', system: System.PRIMARY, multiplier: 1 },
      { id: 'dz', system: System.PRIMARY, multiplier: 12 }
    ]
  },
  {
    name: 'energy',
    primary: { default: 'j', ratio: 1 },
    data: [
      { id: 'j', system: System.PRIMARY, multiplier: 1 },
      { id: 'kj', system: System.PRIMARY, multiplier: 1e3 },
      { id: 'wh', system: System.PRIMARY, multiplier: 3.6e3 },
      { id: 'miwh', system: System.PRIMARY, multiplier: 3.6 },
      { id: 'kwh', system: System.PRIMARY, multiplier: 3.6e6 },
      { id: 'mwh', system: System.PRIMARY, multiplier: 3.6e9 },
      { id: 'gwh', system: System.PRIMARY, multiplier: 3.6e12 }
    ]
  },
  {
    name: 'force',
    primary: { default: 'n', ratio: 1 },
    data: [
      { id: 'n', system: System.PRIMARY, multiplier: 1 },
      { id: 'kn', system: System.PRIMARY, multiplier: 1e3 },
      { id: 'lbf', system: System.PRIMARY, multiplier: 4.44822 }
    ]
  },
  {
    name: 'frequency',
    primary: { default: 'hz', ratio: 1 },
    data: [
      { id: 'mihz', system: System.PRIMARY, multiplier: 1e-3 },
      { id: 'hz', system: System.PRIMARY, multiplier: 1 },
      { id: 'khz', system: System.PRIMARY, multiplier: 1e3 },
      { id: 'mhz', system: System.PRIMARY, multiplier: 1e6 },
      { id: 'ghz', system: System.PRIMARY, multiplier: 1e9 },
      { id: 'thz', system: System.PRIMARY, multiplier: 1e12 },
      { id: 'rpm', system: System.PRIMARY, multiplier: 1 / 60 },
      { id: 'deg/s', system: System.PRIMARY, multiplier: 1 / 3.6e2 },
      { id: 'rad/s', system: System.PRIMARY, multiplier: 1 / (Math.PI * 2) }
    ]
  },
  {
    name: 'illuminance',
    primary: { default: 'lx', ratio: 1 / 10.76391 },
    secondary: { default: 'ft-cd', ratio: 10.76391 },
    data: [
      { id: 'lx', system: System.PRIMARY, multiplier: 1 },
      { id: 'ft-cd', system: System.SECONDARY, multiplier: 1 }
    ]
  },
  {
    name: 'length',
    primary: { default: 'm', ratio: 3.28084 },
    secondary: { default: 'ft', ratio: 1 / 3.28084 },
    data: [
      { id: 'mm', system: System.PRIMARY, multiplier: 1e-3 },
      { id: 'cm', system: System.PRIMARY, multiplier: 1e-2 },
      { id: 'dm', system: System.PRIMARY, multiplier: 1e-1 },
      { id: 'm', system: System.PRIMARY, multiplier: 1 },
      { id: 'dem', system: System.PRIMARY, multiplier: 10 },
      { id: 'hm', system: System.PRIMARY, multiplier: 100 },
      { id: 'km', system: System.PRIMARY, multiplier: 1e3 },
      { id: 'in', system: System.SECONDARY, multiplier: 12 },
      { id: 'yd', system: System.SECONDARY, multiplier: 3 },
      { id: 'ft-us', system: System.SECONDARY, multiplier: 1.000002 },
      { id: 'ft', system: System.SECONDARY, multiplier: 1 },
      {
        id: 'fti',
        system: System.SECONDARY,
        multiplier: 1,
        uniqueTransform: (value: number) =>
          `
              ${Math.floor(value)} ${Math.floor(value) === 1 ? 'foot' : 'feet'}
              and ${roundNumber((value % 1) * 12, 0)} inches
            `
            .replace(/(?:\n(?:\s*))+/g, ' ')
            .replace(/^ (.+) $/, '$1')
      },
      { id: 'fathom', system: System.SECONDARY, multiplier: 6 },
      { id: 'mi', system: System.SECONDARY, multiplier: 5280 },
      { id: 'nmi', system: System.SECONDARY, multiplier: 6076.12 }
    ]
  },
  {
    name: 'mass',
    primary: { default: 'g', ratio: 1 / 453.592 },
    secondary: { default: 'lb', ratio: 453.592 },
    data: [
      { id: 'mcg', system: System.PRIMARY, multiplier: 1e-6 },
      { id: 'mg', system: System.PRIMARY, multiplier: 1e-3 },
      { id: 'g', system: System.PRIMARY, multiplier: 1 },
      { id: 'kg', system: System.PRIMARY, multiplier: 1000 },
      { id: 'mt', system: System.PRIMARY, multiplier: 1e6 },
      { id: 'oz', system: System.SECONDARY, multiplier: 1 / 16 },
      { id: 'lb', system: System.SECONDARY, multiplier: 1 },
      { id: 't', system: System.SECONDARY, multiplier: 2e3 }
    ]
  },
  {
    name: 'pace',
    primary: { default: 's/m', ratio: 0.3048 },
    secondary: { default: 's/ft', ratio: 1 / 0.3048 },
    data: [
      { id: 'min/km', system: System.PRIMARY, multiplier: 0.06 },
      { id: 's/m', system: System.PRIMARY, multiplier: 1 },
      { id: 'min/min', system: System.SECONDARY, multiplier: 0.0113636 },
      { id: 's/ft', system: System.SECONDARY, multiplier: 1 }
    ]
  },
  {
    name: 'partsPer',
    primary: { default: 'ppm', ratio: 1e-6 },
    data: [
      { id: 'ppm', system: System.PRIMARY, multiplier: 1 },
      { id: 'ppb', system: System.PRIMARY, multiplier: 1e-3 },
      { id: 'ppt', system: System.PRIMARY, multiplier: 1e-6 },
      { id: 'ppq', system: System.PRIMARY, multiplier: 1e-9 }
    ]
  },
  {
    name: 'power',
    primary: { default: 'w', ratio: 1 },
    data: [
      { id: 'w', system: System.PRIMARY, multiplier: 1 },
      { id: 'miw', system: System.PRIMARY, multiplier: 1e-3 },
      { id: 'kw', system: System.PRIMARY, multiplier: 1e3 },
      { id: 'mew', system: System.PRIMARY, multiplier: 1e6 },
      { id: 'gw', system: System.PRIMARY, multiplier: 1e9 }
    ]
  },
  {
    name: 'pressure',
    primary: { default: 'kpa', ratio: 0.00014503768078 },
    secondary: { default: 'psi', ratio: 1 / 0.00014503768078 },
    data: [
      { id: 'pa', system: System.PRIMARY, multiplier: 1e-3 },
      { id: 'hpa', system: System.PRIMARY, multiplier: 1e-1 },
      { id: 'kpa', system: System.PRIMARY, multiplier: 1 },
      { id: 'mpa', system: System.PRIMARY, multiplier: 1e3 },
      { id: 'bar', system: System.PRIMARY, multiplier: 100 },
      { id: 'torr', system: System.PRIMARY, multiplier: 101325 / 760000 },
      { id: 'psi', system: System.SECONDARY, multiplier: 1e-3 },
      { id: 'ksi', system: System.SECONDARY, multiplier: 1 }
    ]
  },
  {
    name: 'reactiveEnergy',
    primary: { default: 'varh', ratio: 1 },
    data: [
      { id: 'varh', system: System.PRIMARY, multiplier: 1 },
      { id: 'mivarh', system: System.PRIMARY, multiplier: 1e-3 },
      { id: 'kvarh', system: System.PRIMARY, multiplier: 1e3 },
      { id: 'mvarh', system: System.PRIMARY, multiplier: 1e6 },
      { id: 'gvarh', system: System.PRIMARY, multiplier: 1e9 }
    ]
  },
  {
    name: 'reactivePower',
    primary: { default: 'var', ratio: 1 },
    data: [
      { id: 'var', system: System.PRIMARY, multiplier: 1 },
      { id: 'mivar', system: System.PRIMARY, multiplier: 1e-3 },
      { id: 'kvar', system: System.PRIMARY, multiplier: 1e3 },
      { id: 'mvar', system: System.PRIMARY, multiplier: 1e6 },
      { id: 'gvar', system: System.PRIMARY, multiplier: 1e9 }
    ]
  },
  {
    name: 'speed',
    primary: { default: 'km/h', ratio: 1 / 1.609344 },
    secondary: { default: 'mph', ratio: 1.609344 },
    data: [
      { id: 'm/s', system: System.PRIMARY, multiplier: 3.6 },
      { id: 'km/h', system: System.PRIMARY, multiplier: 1 },
      { id: 'mph', system: System.SECONDARY, multiplier: 1 },
      { id: 'knot', system: System.SECONDARY, multiplier: 1.150779 },
      { id: 'ft/s', system: System.SECONDARY, multiplier: 0.681818 }
    ]
  },
  {
    name: 'temperature',
    primary: { default: 'c', ratio: 1, transform: (C: number) => (C * 9) / 5 + 32 },
    secondary: { default: 'f', ratio: 1, transform: (F: number) => (F - 32) * (5 / 9) },
    data: [
      {
        id: 'c',
        system: System.PRIMARY,
        multiplier: 1,
        valueShift: 0
      },
      {
        id: 'k',
        system: System.PRIMARY,
        multiplier: 1,
        valueShift: 273.15
      },
      {
        id: 'f',
        system: System.SECONDARY,
        multiplier: 1,
        valueShift: 0
      },
      {
        id: 'r',
        system: System.SECONDARY,
        multiplier: 1,
        valueShift: 459.67
      }
    ]
  },
  {
    name: 'time',
    primary: { default: 's', ratio: 1 },
    data: [
      { id: 'ns', system: System.PRIMARY, multiplier: 1e-9 },
      { id: 'mu', system: System.PRIMARY, multiplier: 1e-6 },
      { id: 'ms', system: System.PRIMARY, multiplier: 1e-3 },
      { id: 'min', system: System.PRIMARY, multiplier: 60 },
      { id: 'h', system: System.PRIMARY, multiplier: 60 * 60 },
      { id: 'd', system: System.PRIMARY, multiplier: 60 * 60 * 24 },
      { id: 'week', system: System.PRIMARY, multiplier: 60 * 60 * 24 * 7 },
      { id: 'month', system: System.PRIMARY, multiplier: (60 * 60 * 24 * 365.25) / 12 },
      { id: 'year', system: System.PRIMARY, multiplier: 60 * 60 * 24 * 365.25 }
    ]
  },
  {
    name: 'voltage',
    primary: { default: 'v', ratio: 1 },
    data: [
      { id: 'v', system: System.PRIMARY, multiplier: 1 },
      { id: 'mv', system: System.PRIMARY, multiplier: 1e-3 },
      { id: 'kv', system: System.PRIMARY, multiplier: 1e3 }
    ]
  },
  {
    name: 'volume',
    primary: { default: 'l', ratio: 33.8140227 },
    secondary: { default: 'fl-oz', ratio: 1 / 33.8140227 },
    data: [
      { id: 'mm3', system: System.PRIMARY, multiplier: 1e-6 },
      { id: 'cm3', system: System.PRIMARY, multiplier: 1e-4 },
      { id: 'ml', system: System.PRIMARY, multiplier: 1e-4 },
      { id: 'cl', system: System.PRIMARY, multiplier: 1e-2 },
      { id: 'dl', system: System.PRIMARY, multiplier: 1e-1 },
      { id: 'l', system: System.PRIMARY, multiplier: 1 },
      { id: 'kl', system: System.PRIMARY, multiplier: 1e3 },
      { id: 'm3', system: System.PRIMARY, multiplier: 1e3 },
      { id: 'km3', system: System.PRIMARY, multiplier: 1e12 },
      { id: 'tsp', system: System.SECONDARY, multiplier: 1 / 6 },
      { id: 'tbs', system: System.SECONDARY, multiplier: 1 / 2 },
      { id: 'in3', system: System.SECONDARY, multiplier: 0.55411 },
      { id: 'fl-oz', system: System.SECONDARY, multiplier: 1 },
      { id: 'cup', system: System.SECONDARY, multiplier: 8 },
      { id: 'pnt', system: System.SECONDARY, multiplier: 16 },
      { id: 'qt', system: System.SECONDARY, multiplier: 32 },
      { id: 'gal', system: System.SECONDARY, multiplier: 128 },
      { id: 'ft3', system: System.SECONDARY, multiplier: 957.506 },
      { id: 'yd3', system: System.SECONDARY, multiplier: 25852.7 }
    ]
  },
  {
    name: 'volumeFlowRate',
    primary: { default: 'l/s', ratio: 33.8140227 },
    secondary: { default: 'fl-oz/s', ratio: 1 / 33.8140227 },
    data: [
      { id: 'mm3/s', system: System.PRIMARY, multiplier: 1e-6 },
      { id: 'cm3/s', system: System.PRIMARY, multiplier: 1e-4 },
      { id: 'ml/s', system: System.PRIMARY, multiplier: 1e-4 },
      { id: 'cl/s', system: System.PRIMARY, multiplier: 1e-2 },
      { id: 'dl/s', system: System.PRIMARY, multiplier: 1e-1 },
      { id: 'l/s', system: System.PRIMARY, multiplier: 1 },
      { id: 'l/min', system: System.PRIMARY, multiplier: 1 / 60 },
      { id: 'l/h', system: System.PRIMARY, multiplier: 1 / 3.6e3 },
      { id: 'kl/s', system: System.PRIMARY, multiplier: 1e3 },
      { id: 'kl/min', system: System.PRIMARY, multiplier: 50 / 3 },
      { id: 'kl/h', system: System.PRIMARY, multiplier: 5 / 18 },
      { id: 'm3/s', system: System.PRIMARY, multiplier: 1e3 },
      { id: 'm3/min', system: System.PRIMARY, multiplier: 50 / 3 },
      { id: 'm3/h', system: System.PRIMARY, multiplier: 5 / 18 },
      { id: 'km3/h', system: System.PRIMARY, multiplier: 1e12 },
      { id: 'tsp/s', system: System.SECONDARY, multiplier: 1 / 6 },
      { id: 'tbs/s', system: System.SECONDARY, multiplier: 1 / 2 },
      { id: 'in3/s', system: System.SECONDARY, multiplier: 0.55411 },
      { id: 'in3/min', system: System.SECONDARY, multiplier: 0.55411 / 60 },
      { id: 'in3/h', system: System.SECONDARY, multiplier: 0.55411 / 3.6e3 },
      { id: 'fl-oz/s', system: System.SECONDARY, multiplier: 1 },
      { id: 'fl-oz/min', system: System.SECONDARY, multiplier: 1 / 60 },
      { id: 'fl-oz/h', system: System.SECONDARY, multiplier: 1 / 3.6e3 },
      { id: 'cup/s', system: System.SECONDARY, multiplier: 8 },
      { id: 'pnt/s', system: System.SECONDARY, multiplier: 16 },
      { id: 'pnt/min', system: System.SECONDARY, multiplier: 16 / 60 },
      { id: 'pnt/h', system: System.SECONDARY, multiplier: 16 / 3.6e3 },
      { id: 'qt/s', system: System.SECONDARY, multiplier: 32 },
      { id: 'gal/s', system: System.SECONDARY, multiplier: 128 },
      { id: 'gal/min', system: System.SECONDARY, multiplier: 128 / 60 },
      { id: 'gal/h', system: System.SECONDARY, multiplier: 128 / 3.6e3 },
      { id: 'ft3/s', system: System.SECONDARY, multiplier: 957.506 },
      { id: 'ft3/min', system: System.SECONDARY, multiplier: 957.506 / 60 },
      { id: 'ft3/h', system: System.SECONDARY, multiplier: 957.506 / 3.6e3 },
      { id: 'yd3/s', system: System.SECONDARY, multiplier: 25852.7 },
      { id: 'yd3/min', system: System.SECONDARY, multiplier: 25852.7 / 60 },
      { id: 'yd3/h', system: System.SECONDARY, multiplier: 25852.7 / 3.6e3 }
    ]
  }
];

export class ConverterError extends Error {
  /**
   * Create an ConverterError
   * @param message The message the error should show
   */
  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = 'ConverterError';
    this.stack = '';
  }
}
