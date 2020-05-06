import chalk from 'chalk';
import fs from 'fs';
import glob from 'glob';
import { join } from 'path';

const onlyPattern = /(?:describe\.only|it\.only|test\.only)/gm;
const files = glob
  .sync('**/*.test.?(j|t)s?(x)', { cwd: join(__dirname, '../packages') })
  .map((file) => join(__dirname, '../packages', file));

let shouldError = false;
const badFiles: string[] = [];
const badPatterns: string[] = [];

for (const file of files) {
  const fileContent = fs.readFileSync(file, { encoding: 'utf8' });
  const fileHasPattern = fileContent.match(onlyPattern);

  if (fileHasPattern && fileHasPattern.length) {
    shouldError = true;
    for (const pattern of fileHasPattern) {
      badFiles.push(file);
      badPatterns.push(pattern);
    }
  }
}

if (shouldError) {
  // eslint-disable-next-line no-console
  console.error(
    [
      `${chalk.red('\nLooks like you left focused tests, I found these hits:')}`,
      `${badPatterns
        .map(
          (pattern, index) =>
            `- ${chalk.cyan(pattern)} \t${pattern.includes('describe') ? '' : '\t'}  in \t ${badFiles[index]}`
        )
        .join('\n')}`,
      `${chalk.cyan('Please remove all the focused tests!\n')}`
    ].join('\n')
  );
  process.exit(1);
}

process.exit(0);
