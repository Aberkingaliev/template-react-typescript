import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [react(), svgLoader({defaultImport: 'component'})],
  
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
