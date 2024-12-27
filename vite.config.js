import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/toast/index.jsx', // path to your main entry file
      name: 'tmt-toast', // global variable name
      fileName: (format) => `toast-library.${format}.js`, // output file name
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
