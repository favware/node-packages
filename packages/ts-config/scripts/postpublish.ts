import { copy, remove, rmdir } from 'fs-nextra';
import { join, resolve } from 'path';

async function postpublish() {
  const rootDir = resolve(__dirname, '..');

  await copy(join(rootDir, 'temp', 'tsconfig.json'), join(rootDir, 'tsconfig.json'));
  await remove(join(rootDir, 'temp', 'tsconfig.json'));
  await rmdir(join(rootDir, 'temp'));
}

postpublish();
