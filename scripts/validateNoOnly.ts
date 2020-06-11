import { KlasaConsole } from '@klasa/console';
import fs from 'fs';
import glob from 'glob';
import { join } from 'path';

const kConsole = new KlasaConsole({
  useColor: true,
  timestamps: true,
  utc: false
});

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
  kConsole.error('Looks like you left focused tests, I found these hits:');
  kConsole.error(badPatterns.map((pattern, index) => `- ${pattern}\t→\t${badFiles[index]}`).join('\n'));
  kConsole.error('Please remove all the focused tests!');
  process.exit(1);
}
