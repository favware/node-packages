import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import progress from 'rollup-plugin-progress';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import cleaner from 'rollup-plugin-cleaner';
import copy from 'rollup-plugin-copy';

export default opts => {
  const options = {...opts};
  const input = options.input ? options.input : 'src/index.ts';
  const plugins = options.plugins && options.plugins.length ? options.plugins : [];
  const externalConfig = options.externalConfig && options.externalConfig.length ? options.externalConfig : [];
  const output = options.output && options.output.length ? options.output : [
    {
      file: './dist/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: './dist/index.es.js',
      format: 'es',
      exports: 'named',
      sourcemap: true,
    }
  ];

  return {
    input,
    output,
    external: externalConfig,
    plugins: [
      cleaner({
        targets: [
          './dist/'
        ],
      }),
      progress(),
      external(),
      resolve({preferBuiltins: true }),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
      }),
      commonjs(),
      terser({ ecma: 6 }),
      copy(
        {
          targets: [ { src: 'docs/example.js', dest: 'dist/' } ],
          copyOnce: true,
        }
      ),
      ...plugins
    ],
  };
};