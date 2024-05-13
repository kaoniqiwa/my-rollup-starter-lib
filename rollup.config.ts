import {
  RollupOptions,
  defineConfig,
  type InputOptions,
  type OutputOptions,
} from 'rollup';

import configs from './build/config.mjs';

interface Config {
  input: InputOptions;
  output: OutputOptions;
}

export default defineConfig((commandArgs) => {
  return (configs as Config[]).map((config: Config): RollupOptions => {
    return {
      input: config.input.input,
      output: config.output,
      plugins: config.input.plugins,
    } as RollupOptions;
  });
});
