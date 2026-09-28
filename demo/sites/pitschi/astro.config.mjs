// @ts-check
import { defineSite } from '../../shared/define-site.mjs';

export default defineSite({
  url: 'https://docs.pitschi.rcc.uq.edu.au',
  title: 'UQ Pitschi (demo)',
  description: 'Demo of the Pitschi site in the multi-site layout',
  components: { SocialIcons: './src/components/HeaderLink.astro' },
  sidebar: [{ label: 'Guides', items: [{ label: 'Getting started', slug: 'guides/getting-started' }] }],
});
