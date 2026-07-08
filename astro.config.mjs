// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tlaforgue.github.io',
  base: '/website-league-of-legends', // à retirer si le repo s'appelle <ton-pseudo>.github.io
  trailingSlash: 'never', // comportement d'URL prévisible, sans ambiguïté
});