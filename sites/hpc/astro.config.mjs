// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'UQ RCC HPC',
      locales: { root: { label: 'English', lang: 'en-AU' } },
      editLink: { baseUrl: 'https://github.com/UQ-RCC/platform-docs/edit/main/sites/hpc/' },
      customCss: ['../../shared/styles/navbar.css'],
      components: {
        ThemeSelect: '../../shared/components/ThemeSelect.astro',
      },
      sidebar: [
        { label: 'Overview', slug: 'overview' },
        { label: 'Bunya updates', slug: 'bunya-updates' },
        { label: 'Guides', items: [{ autogenerate: { directory: 'guides' } }] },
        { label: 'Policy', items: [{ autogenerate: { directory: 'policy' } }] },
      ],
    }),
  ],
});
