import { mkdirp, copy } from 'fs-nextra';
import { resolve, join } from 'path';

async function prepublish() {
  const rootDir = resolve(__dirname, '..');

  await mkdirp(join(rootDir, 'dist'));
  await copy(join(rootDir, 'src', 'tsconfig.json'), join(rootDir, 'dist', 'tsconfig.json'));
}

prepublish();
