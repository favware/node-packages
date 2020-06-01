import cleaner from 'rollup-plugin-cleaner';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import { resolve as resolveDir } from 'path';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: './dist/index.es.js',
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    cleaner({
      targets: ['./dist/']
    }),
    typescript({ tsconfig: resolveDir(__dirname, 'src', 'tsconfig.json') }),
    terser({
      ecma: 5,
      // This will ensure that whenever Rollup is in watch (dev) mode, console logs will not be removed
      compress: { drop_console: !Reflect.has(process.env, 'ROLLUP_WATCH') }, // eslint-disable-line @typescript-eslint/naming-convention
      output: { comments: false }
    })
  ]
};
