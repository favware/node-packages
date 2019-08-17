var {stringify, parse} = require('@favware/querystring');
// Or for babel / typescript:
// import stringify, { parse } from '@favware/querystring';

// base usage
console.log(stringify({prop: 'value', prop2: 'value2'}));
console.log(parse('?prop=value&prop2=value2'));

// supply options
console.log(stringify({prop: 'value', prop2: 'value2'}, {separator: '&', equals: '=', includeQuestion: false}));
console.log(parse('?prop=value&prop2=value2', {separator: '&', equals: '='}));

// customize options
console.log(stringify({prop: 'value', prop2: 'value2'}, {separator: '&&', equals: '=', includeQuestion: true}));
console.log(parse('prop=value&&prop2=value2', {separator: '&&', equals: '='}));