import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'lcov', 'cobertura'],
      exclude: [...(configDefaults.coverage.exclude ?? []), 'src/browser-safe-randombytes.ts']
    }
  },
  esbuild: {
    target: 'es2020'
  }
});
