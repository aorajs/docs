import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'AoraJS',
  mode: 'site',
  outputPath: 'dist',
  base: '/',
  publicPath: '/',
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/aorajs/aora',
    },
  ],
  polyfill: false,
});
