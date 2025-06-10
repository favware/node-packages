import { defineConfig } from 'tsup';
import { baseOptions } from '../../scripts/tsup.config.js';

export default [
  defineConfig({
    ...baseOptions,
    outDir: 'dist/cjs',
    format: 'cjs',
    outExtension: () => ({ js: '.cjs' })
  }),
  defineConfig({
    ...baseOptions,
    outDir: 'dist/esm',
    format: 'esm',
    outExtension: () => ({ js: '.mjs' })
  }),
  defineConfig({
    ...baseOptions,
    outDir: 'dist/iife',
    format: 'iife',
    globalName: 'FavwareConverter'
  })
];
