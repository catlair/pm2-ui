import { defineConfig } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';
import slate from '@park-ui/panda-preset/colors/slate';
import purple from '@park-ui/panda-preset/colors/purple';

export default defineConfig({
  preflight: true,
  presets: [
    '@pandacss/preset-base',
    createPreset({ accentColor: purple, grayColor: slate, radius: 'sm' }),
  ],
  include: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  jsxFramework: 'solid', // or 'solid' or 'vue'
  outdir: 'styled-system',
});
