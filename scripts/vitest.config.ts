import type { ESBuildOptions } from 'vite';
import { defineConfig, type UserConfig } from 'vitest/config';

export const createVitestConfig = (options: UserConfig = {}) =>
  defineConfig({
    ...options,
    test: {
      ...options?.test,
      globals: true,
      coverage: {
        ...options.test?.coverage,
        provider: 'v8',
        enabled: true,
        reporter: ['text', 'lcov', 'clover'],
        exclude: [
          ...(options.test?.coverage?.exclude ?? []),
          '**/node_modules/**',
          '**/dist/**',
          '**/tests/**',
          'packages/crypto/src/browser-safe-randombytes.ts'
        ]
      }
    },
    esbuild: {
      ...options?.esbuild,
      target: (options?.esbuild as ESBuildOptions | undefined)?.target ?? 'es2020'
    }
  });
