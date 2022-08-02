import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import monacoEditorPlugin from './plugins/vite-plugin-moncao-edito/index';
import path from "path";

export default defineConfig({
  assetsInclude: [
    '**/*.wasm'
  ],
  plugins: [
    solidPlugin(),
    monacoEditorPlugin({ monacoPackage: 'monaco-editor-vite-fix' }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      "~@": path.resolve(__dirname, "/src"),
    },
  },

  test: {
    environment: 'happy-dom',
    deps: {
      inline: [
        /solid-testing-library/,
        /monaco-editor-vite-fix/,
      ],
    },
  },
});

