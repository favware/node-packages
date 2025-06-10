import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'lcov', 'cobertura'],
      exclude: [
        ...(configDefaults.coverage.exclude ?? []),
        '**/node_modules/**',
        '**/dist/**',
        '**/tests/**',
        'packages/crypto/src/browser-safe-randombytes.ts'
      ]
    },
    projects: [
      './packages/converter/vitest.config.ts',
      './packages/crypto/vitest.config.ts',
      './packages/querystring/vitest.config.ts',
      './packages/yamlreader/vitest.config.ts',
      './packages/zalgo/vitest.config.ts'
    ]
  },
  esbuild: {
    target: 'es2020'
  }
});
