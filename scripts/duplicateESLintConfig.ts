import chalk from 'chalk';
import eslintConfig from '../packages/eslint-config/src/';
import { writeFileSync as writeJson } from 'jsonfile';
import path from 'path';

const rootConfigPath = path.join(__dirname, '../.eslintrc');

writeJson(rootConfigPath, eslintConfig);

// eslint-disable-next-line no-console
console.log(chalk.green('Duplicated ESLint config'));
process.exit(0);