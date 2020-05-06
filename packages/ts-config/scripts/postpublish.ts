import { copy, remove } from 'fs-nextra';
import { join, resolve } from 'path';

async function postpublish() {
  const rootDir = resolve(__dirname, '..');

  await copy(join(rootDir, 'temp', 'tsconfig.json'), join(rootDir, 'tsconfig.json'));
  await remove(join(rootDir, 'temp'));
}

postpublish();
