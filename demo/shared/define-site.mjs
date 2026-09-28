// Shared config for the demo sites, reusing the live site's styles from src/.
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repo = (path) => fileURLToPath(new URL(`../../${path}`, import.meta.url));

export function defineSite({ url, title, description, sidebar }) {
  return defineConfig({
    site: url,
    vite: { server: { fs: { allow: [repo('')] } } },
    integrations: [
      starlight({
        title,
        description,
        locales: { root: { label: 'English', lang: 'en-AU' } },
        customCss: [
          repo('src/styles/tokens.css'),
          './src/styles/brand.css',
          repo('src/styles/base.css'),
          repo('src/styles/components.css'),
        ],
        components: { ThemeSelect: repo('src/components/ThemeSelect.astro') },
        sidebar,
      }),
    ],
  });
}
