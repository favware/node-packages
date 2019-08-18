const { speedtest } = require('@favware/speedtest');
// import { speedtest } from '@favware/speedtest';
// you can also use a default import for stringify!

const test = await speedtest({ maxTime: 5000 });

test.on('data', data => {
  console.dir(data);
});

test.on('error', err => {
  console.error(err);
});