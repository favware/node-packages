<div align="center">
  <p>
  <a href="https://favware.tech/zalgo"><img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/website-project-icons/zalgo.png" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> @favware/zalgo</h1>
<h3> Invoke and banish the power of the Zalgo Monster</h3>
  </p>
</div>

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/favware/node-packages?logo=github&style=flat-square)](https://github.com/favware/node-packages/blob/master/LICENSE.md)
[![CircleCI](https://img.shields.io/circleci/build/github/favware/node-packages?logo=circleci&style=flat-square)](https://circleci.com/gh/favware/node-packages/tree/master)
[![Codecov](https://img.shields.io/codecov/c/github/favware/node-packages?logo=codecov&style=flat-square)](https://codecov.io/gh/favware/node-packages)

**Bundle Sizes**

[![npm bundle size](https://img.shields.io/bundlephobia/min/@favware/zalgo?label=zalgo%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/zalgo)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@favware/zalgo?label=zalgo%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/zalgo)
[![npm](https://img.shields.io/npm/v/@favware/zalgo?color=crimson&label=zalgo%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/zalgo)

**Social Media and Donations**

[![Join Discord server](https://img.shields.io/discord/512303595966824458?color=697EC4&label=Join%20Discord%20Server&logo=discord&logoColor=FDFEFE&style=flat-square)](https://favware.tech/redirect/server)
[![Twitter Follow](https://img.shields.io/twitter/follow/favna_?label=Follow%20@Favna_&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/Favna_/follow)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://www.patreon.com/bePatron?u=9336537)](https://www.patreon.com/bePatron?u=9336537)
[![PayPal Donate](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Donate%20with%20Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XMAYCF9SDHZ34)](https://www.patreon.com/bePatron?u=9336537)

---

This library uses the Zalgo character set from  [Acme::Zalgo](https://metacpan.org/pod/Acme::Zalgo)

# Install

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add @favware/zalgo

# npm install @favware/zalgo
```

* * *

# Usage

```js
const { zalgo, banish, chars } = require('awesome-zalgo');
// Or for babel / typescript:
// import zalgo, { banish, chars } from 'awesome-zalgo';

// Zalgo usage
zalgo('some text')


// > ŝ̜̩͇̼̥̼́̏͢o͎͊͜ḿ̛̩̳̖͕̞̩̭ͪe͖̺̣̹̺̋̀͛̽͝ ̖͍̭͓̯̠͑͑͢t̼̪̋͌͢eͯ̋͏͖͎͍̩̭̮x̢͚̄̾̀̈ͧ̓ͩ̚t̪ͫ͝



// Banish usage
banish('ŝ̜̩͇̼̥̼́̏͢o͎͊͜ḿ̛̩̳̖͕̞̩̭ͪe͖̺̣̹̺̋̀͛̽͝ ̖͍̭͓̯̠͑͑͢t̼̪̋͌͢eͯ̋͏͖͎͍̩̭̮x̢͚̄̾̀̈ͧ̓ͩ̚t̪ͫ͝')


// > some text

// To log all the supported chars use:
console.log(chars);
```

# Documentation

## Constants

<dl>
<dt><a href="#chars">chars</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#zalgo">zalgo(text, [options])</a> ⇒ <code>string</code></dt>
<dd><p>Zalgolize any text</p>
</dd>
<dt><a href="#banish">banish(purgeable)</a> ⇒ <code>string</code></dt>
<dd><p>De-zalgolize any text</p>
</dd>
</dl>

<a name="chars"></a>

## chars
**Kind**: global constant  
**Example**  
```ts
const { chars } = require('@favware/zalgo');
// import { chars } from '@favware/zalgo'

console.log(chars);
```
<a name="zalgo"></a>

## zalgo(text, [options]) ⇒ <code>string</code>
Zalgolize any text

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Input text to zalgolize |
| [options] | <code>IZalgoOptions</code> | Options for the Zalgo |

**Example**  
```ts
const zalgo = require('@favware/zalgo');
// import zalgo from '@favware/zalgo';

// Zalgo usage
zalgo('some text')


// > ŝ̜̩͇̼̥̼́̏͢o͎͊͜ḿ̛̩̳̖͕̞̩̭ͪe͖̺̣̹̺̋̀͛̽͝ ̖͍̭͓̯̠͑͑͢t̼̪̋͌͢eͯ̋͏͖͎͍̩̭̮x̢͚̄̾̀̈ͧ̓ͩ̚t̪ͫ͝
```
<a name="banish"></a>

## banish(purgeable) ⇒ <code>string</code>
De-zalgolize any text

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| purgeable | <code>string</code> | Text to remove zalgo from |

**Example**  
```ts
const { banish } = require('@favware/zalgo');
// import { basnish } from '@favware/zalgo';

// Banish usage
banish('ŝ̜̩͇̼̥̼́̏͢o͎͊͜ḿ̛̩̳̖͕̞̩̭ͪe͖̺̣̹̺̋̀͛̽͝ ̖͍̭͓̯̠͑͑͢t̼̪̋͌͢eͯ̋͏͖͎͍̩̭̮x̢͚̄̾̀̈ͧ̓ͩ̚t̪ͫ͝')


// > some text
```
