import cleaner from 'rollup-plugin-cleaner';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

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
    typescript({
      tsconfig: './src/tsconfig.json'
    }),
    terser({
      ecma: 5,
      // eslint-disable-next-line @typescript-eslint/camelcase
      compress: { drop_console: true },
      output: { comments: false }
    })
  ]
};
