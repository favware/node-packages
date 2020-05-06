import { remove, rmdir } from 'fs-nextra';
import { join, resolve } from 'path';

async function postpublish() {
  const rootDir = resolve(__dirname, '..');

  await remove(join(rootDir, 'dist', 'tsconfig.json'));
  await rmdir(join(rootDir, 'dist'));
}

postpublish();
