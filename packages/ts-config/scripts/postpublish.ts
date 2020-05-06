import { rmdir } from 'fs-nextra';
import { join, resolve } from 'path';

async function postpublish() {
  const rootDir = resolve(__dirname, '..');

  await rmdir(join(rootDir, 'dist'));
}

postpublish();
