import { RollupOptions, defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';

import configs from './build/config';

export default defineConfig((commandArgs) => {
  return configs.map((config) => {
    return {
      input: 'src/main.ts',
      output: config.output,
      plugins: [commonjs(), nodeResolve(), typescript(), buble()],
    } as RollupOptions;
  });
});
