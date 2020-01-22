import { green, red } from 'chalk';
import { writeJSONAtomic } from 'fs-nextra';
import { sync as glob } from 'glob';
import { join } from 'path';
import eslintConfig from '../packages/eslint-config/src/';

(async () => {
  try {
    await Promise.all(
      glob('**/.eslintrc', {
        cwd: join(__dirname, '../'),
        ignore: 'node_modules/**',
        dot: true
      })
        .map(file => join(__dirname, '../', file))
        .map(file => writeJSONAtomic(file, eslintConfig))
    );

    // eslint-disable-next-line no-console
    console.log(green('Duplicated ESLint config'));
    process.exit(0);
  } catch (error) {
    console.error(red(error));
    process.exit(1);
  }
})();
