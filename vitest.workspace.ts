import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  './packages/converter/vitest.config.ts',
  './packages/crypto/vitest.config.ts',
  './packages/querystring/vitest.config.ts',
  './packages/yamlreader/vitest.config.ts',
  './packages/zalgo/vitest.config.ts'
]);
