import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      'twin.semi': path.resolve(__dirname, 'src'),
    },
  },
  test: {},
});
