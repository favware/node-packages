import { relative, resolve as resolveDir } from 'node:path';
import type { Options } from 'tsup';

export const baseOptions: Options = {
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  minify: false,
  skipNodeModulesBundle: true,
  sourcemap: true,
  target: 'es2019',
  tsconfig: relative(__dirname, resolveDir(process.cwd(), 'src', 'tsconfig.json')),
  keepNames: true
};
