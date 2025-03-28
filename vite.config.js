import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  
  plugins: [react()],
  build:{
    outDir: "build"
  },
  resolve: {
    alias: [
      { find: '@userAuth', replacement: '/src/userAuth' },
      { find: '@components', replacement: '/src/components' },
      { find: '@theme', replacement: '/src/theme' },
      { find: '@schedules', replacement: '/src/schedules' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@employer-dashboard', replacement: '/src/employer-dashboard' },
      { find: '@employee-dashboard', replacement: '/src/employee-dashboard' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@dashboard', replacement: '/src/dashboard' },
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:80',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
