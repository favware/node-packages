import find from 'find';
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import { stripIndents } from "common-tags";

const files = find.fileSync(/\.test\.(?:t|j)s$/, path.join(__dirname, '../packages'));
const onlyPattern = new RegExp(/(?:describe\.only|it\.only|test\.only)/, 'gm');

let shouldError = false;
let badFiles: string[] = [];
let badPatterns: string[] = [];

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
  console.error(stripIndents(
    `
      ${chalk.red('\nLooks like you left focused tests, I found these hits:')}

      ${badPatterns.map((pattern, index) => `- ${chalk.cyan(pattern)} \t${pattern.includes('describe') ? '' : '\t'}  in \t ${badFiles[index]}`).join('\n')}

      ${chalk.cyan(`Please remove all the focused tests!\n`)}
    `
  ));
  process.exit(1)
}