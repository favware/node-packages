const { readYaml } = require('@favware/yamlreader');

const data = readYaml('/path/to/some/yaml/file');
console.log(data) // => JavaScript object with the keys from the yaml