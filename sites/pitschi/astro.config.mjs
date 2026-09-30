// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'UQ Pitschi',
      locales: { root: { label: 'English', lang: 'en-AU' } },
      customCss: ['../../shared/styles/navbar.css'],
      components: {
        SocialIcons: './src/components/NavLinks.astro',
        ThemeSelect: '../../shared/components/ThemeSelect.astro',
      },
    }),
  ],
});
