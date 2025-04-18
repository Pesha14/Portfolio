import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
});