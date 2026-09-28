// Shared config for every demo site. A site passes only what differs; the
// styles and theme toggle come straight from the live XNAT site in src/, to
// show the framework can be shared without copying it.
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repo = (path) => fileURLToPath(new URL(`../../${path}`, import.meta.url));

export function defineSite({ url, title, description, sidebar }) {
  return defineConfig({
    site: url,
    // Sites import shared files from outside their own folder.
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
