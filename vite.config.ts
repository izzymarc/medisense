import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin({
      FIREBASE_API_KEY: null,
      FIREBASE_AUTH_DOMAIN: null,
      FIREBASE_PROJECT_ID: null,
      FIREBASE_STORAGE_BUCKET: null,
      FIREBASE_MESSAGING_SENDER_ID: null,
      FIREBASE_APP_ID: null,
      MEASUREMENT_ID: null,
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/',
  server: {
    historyApiFallback: true,
    port: 5173
  },
});
