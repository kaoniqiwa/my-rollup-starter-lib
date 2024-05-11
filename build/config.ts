import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';
import pkg from '../package.json';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const resolve = (_path) => path.resolve(__dirname, '../', _path);

export default [
  {
    output: {
      file: resolve(pkg.browser),
      format: 'umd',
      name: 'howLongUntilLunch',
      globals: {
        ms: 'ms',
      },
    },
  },
  {
    output: [
      {
        file: resolve(pkg.main),
        format: 'cjs',
      },
      {
        file: resolve(pkg.module),
        format: 'es',
      },
    ],
  },
];
