import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import * as path from 'path';
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [],
        parserOpts: {
          plugins: ['decorators-legacy'],
        },
      },
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://apis.data.go.kr',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
        secure: false,
        ws: true,
      },
    },
  },
});
