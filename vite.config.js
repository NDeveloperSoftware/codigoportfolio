import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import ReactRefresh from '@vitejs/plugin-react-refresh';
import VitePluginWindicss from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),VitePluginWindicss()],
});
