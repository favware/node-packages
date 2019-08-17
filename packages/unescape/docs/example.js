const { unescape, charSets } = require('@favware/unescape');
// import unescape, { charSets } from '@favware/unescape';

const text = '&lt;div&gt;unescaped&lt;/div&gt;';

console.log(unescape('&lt;div&gt;abc&lt;/div&gt;'));
console.log(unescape`&lt;div&gt;abc&lt;/div&gt;`);
console.log(unescape`awesome text with some ${text} section`);

// Log the supported characters
console.log(charSets);