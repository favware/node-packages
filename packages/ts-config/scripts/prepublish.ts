import { copy, mkdirp } from 'fs-nextra';
import { join, resolve } from 'path';

async function prepublish() {
  const rootDir = resolve(__dirname, '..');

  await mkdirp(join(rootDir, 'temp'));
  await copy(join(rootDir, 'tsconfig.json'), join(rootDir, 'temp', 'tsconfig.json'));
  await copy(join(rootDir, 'src', 'tsconfig.json'), join(rootDir, 'tsconfig.json'));
}

prepublish();
