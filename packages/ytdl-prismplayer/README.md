<div align="center">
  <p>
  <a href="https://favware.tech/prismplayer"><img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/website-project-icons/prismplayer.png" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> @favware/ytdl-prismplayer</h1>
<h3> A <a href="https://github.com/fent/node-ytdl-core/">ytdl-core</a> wrapper focused on efficiency for use in Discord music bots.</h3>
  </p>
</div>

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/favware/node-packages?logo=github&style=flat-square)](https://github.com/favware/node-packages/blob/master/LICENSE.md)
[![Codecov](https://img.shields.io/codecov/c/github/favware/node-packages?logo=codecov&style=flat-square)](https://codecov.io/gh/favware/node-packages)

**Bundle Sizes**

[![npm bundle size](https://img.shields.io/bundlephobia/min/@favware/ytdl-prismplayer?label=ytdl-prismplayer%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/ytdl-prismplayer)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@favware/ytdl-prismplayer?label=ytdl-prismplayer%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/ytdl-prismplayer)
[![npm](https://img.shields.io/npm/v/@favware/ytdl-prismplayer?color=crimson&label=ytdl-prismplayer%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/ytdl-prismplayer)

**Social Media and Donations**

[![Join Discord server](https://img.shields.io/discord/512303595966824458?color=697EC4&label=Join%20Discord%20Server&logo=discord&logoColor=FDFEFE&style=flat-square)](https://favware.tech/redirect/server)
[![Twitter Follow](https://img.shields.io/twitter/follow/favna_?label=Follow%20@Favna_&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/Favna_/follow)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://www.patreon.com/bePatron?u=9336537)](https://www.patreon.com/bePatron?u=9336537)
[![PayPal Donate](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Donate%20with%20Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XMAYCF9SDHZ34)](https://www.patreon.com/bePatron?u=9336537)

---

For compatible videos, this module uses [prism-media](https://github.com/amishshah/prism-media)
to extract Opus or Vorbis audio from a stream without having to pipe it through FFmpeg first. This greatly
reduces the processing power required, making playback smoother and allowing you to play over
more connections simultaneously.

For videos where the required codec (webm + opus) isn't available, the module will fallback to
using FFmpeg to encode the stream in Opus. Many new videos on YouTube are available in this codec
so hopefully this isn't frequent.

Put simply, this module finds the most efficient way to extract a stream of Opus or Vorbis audio from a
YouTube video.

# Install

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add @favware/ytdl-prismplayer ytdl-core prism-media

# npm install @favware/ytdl-prismplayer ytdl-core prism-media
# ytdl-core and prism-media are mandatory peer dependencies
```

---

# Usage

Usage depends on the version of Discord.JS you are using, examples below. You can pass the exact same arguments as you would with the ytdl-core module, with the exception that you must `await` the function call.

### Usage in Discord.js 11.x

```js
const ytdl = require('@favware/ytdl-prismplayer');
// import ytdl from '@favware/ytdl-prismplayer'

async function play(connection, url) {
  connection.playOpusStream(await ytdl(url));
}
```

### Usage in Discord.js 12.x / master

```js
const ytdl = require('@favware/ytdl-prismplayer');
// import ytdl from '@favware/ytdl-prismplayer'

async function play(connection, url) {
  connection.play(await ytdl(url), {
    type: 'opus'
  });
}

// You can prefer vorbis instead of opus
async function play(connection, url) {
  connection.play(await ytdl(url, {}, { preferredFormat: 'vorbis' }), {
    type: 'opus'
  });
}
```

## [API Documentation](https://favware.github.io/node-packages/modules/_favware_ytdl_prismplayer.html)
