import { defineConfig } from '@solidjs/start/config';
import UnoCSS from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  vite: {
    plugins: [tsconfigPaths({ root: './' }) as any, UnoCSS()],
  },
  ssr: false,
});
