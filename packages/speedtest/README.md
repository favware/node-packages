<div align="center">
  <p>
  <a href="https://favware.tech/speedtest"><img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/website-project-icons/speedtest.png" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> @favware/speedtest</h1>
<h3> Speedtest utility to test your internet speed</h3>
  </p>
</div>

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/favware/node-packages?logo=github&style=flat-square)](https://github.com/favware/node-packages/blob/master/LICENSE.md)
[![CircleCI](https://img.shields.io/circleci/build/github/favware/node-packages?logo=circleci&style=flat-square)](https://circleci.com/gh/favware/node-packages/tree/master)
[![Codecov](https://img.shields.io/codecov/c/github/favware/node-packages?logo=codecov&style=flat-square)](https://codecov.io/gh/favware/node-packages)

**Bundle Sizes**

[![npm bundle size](https://img.shields.io/bundlephobia/min/@favware/speedtest?label=speedtest%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/speedtest)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@favware/speedtest?label=speedtest%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/speedtest)
[![npm](https://img.shields.io/npm/v/@favware/speedtest?color=crimson&label=speedtest%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/speedtest)

**Social Media and Donations**

[![Join Discord server](https://img.shields.io/discord/512303595966824458?color=697EC4&label=Join%20Discord%20Server&logo=discord&logoColor=FDFEFE&style=flat-square)](https://favware.tech/redirect/server)
[![Twitter Follow](https://img.shields.io/twitter/follow/favna_?label=Follow%20@Favna_&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/Favna_/follow)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://www.patreon.com/bePatron?u=9336537)](https://www.patreon.com/bePatron?u=9336537)
[![PayPal Donate](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Donate%20with%20Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XMAYCF9SDHZ34)](https://www.patreon.com/bePatron?u=9336537)

---

NodeJS based SpeedTest.net library

**Key Features**
- Useable in NodeJS through package manager of choice
- Typesafe
- Bundled with Rollup for maximum size reduction (only 1kB minified + gzipped!) and ES module support
- Generated TypeScript declarations

# Install

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add @favware/speedtest

# npm install @favware/speedtest
```

* * *

# Usage

Once installed you can run the speedtest, which runs entirely automatically and emits events when it's done.

```js
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
```

# Considerations

The test results are fudged to be in-line with what speedtest.net (owned by Ookla) produces. Please see the
[Ookla test flow](http://www.ookla.com/support/a21110547/what+is+the+test+flow+and) description to find out why it is
necessary to do this. It is certainly possible to copy Ookla's test method in node.js, but it's a significant job.

The test results use correction factors which were derived by dividing bitrates recorded from speedtest.net by raw bitrates recorded using this module, using averages over a statistically insufficient number of tests. Even in consideration of this, the current method is likely to produce very similar results as speedtest.net, as long as the internet connection with
the server has a relatively low [packet jitter](http://en.wikipedia.org/wiki/Jitter#Packet_jitter_in_computer_networks).

# Documentation

## Functions

<dl>
<dt><a href="#pingSingleServer">pingSingleServer()</a></dt>
<dd><p>Pings a single server and returns the ping time based on process.hrtime()</p>
</dd>
<dt><a href="#pingServers">pingServers()</a></dt>
<dd><p>Loops all servers and pings each to determine the best server to use</p>
</dd>
</dl>

<a name="pingSingleServer"></a>

## pingSingleServer()
Pings a single server and returns the ping time based on process.hrtime()

**Kind**: global function  
<a name="pingServers"></a>

## pingServers()
Loops all servers and pings each to determine the best server to use

**Kind**: global function  
