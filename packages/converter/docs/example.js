const { convert, definitions } = require('@favware/converter');
const { inspect } = require('util');
// Or for babel / typescript:
// import converter, { definitions } from '@favware/converter';
// import { inspect } from 'util'; ==> Note that this requires @types/node !!

// Just pass required arguments
// expected output: 0.22046244
console.log(convert(100, 'g', 'lb'));

// Specify decimal precision
// expected output: 0.22
console.log(convert(100, 'g', 'lb', { precision: 3 }));

// Will not work if you pass units of different groups
// expected error: Cannot convert incompatible unit of g to m
console.log(convert(100, 'g', 'm'));

// Log all supported definitions
console.log(inspect(definitions, { showHidden: false, depth: null }));