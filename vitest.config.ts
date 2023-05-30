/// <reference types='vitest' />
import { defineConfig, mergeConfig } from 'vitest/config';
import path from 'path';
import viteConfig from './vite.config';

export default mergeConfig(viteConfig, defineConfig({
    test: {
      globals: true,
      exclude: ['node_modules/*/**'],
      environment: 'jsdom',
      setupFiles: [path.resolve(__dirname, 'config', 'vitest', 'vitestSetup.ts')],
      
    },
  }))