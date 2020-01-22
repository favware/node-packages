import configure from '../../rollup.config';
import { terser } from 'rollup-plugin-terser';

export default configure({
  input: 'src/index.ts',
  plugins: [terser({ ecma: 5 })]
});
