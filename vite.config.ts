import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr(), checker({ typescript: true })],
});
