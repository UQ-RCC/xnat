// @ts-check
import { defineSite } from '../../shared/define-site.mjs';

export default defineSite({
  url: 'https://docs.xnat.rcc.uq.edu.au',
  title: 'UQ XNAT (demo)',
  description: 'Demo of the XNAT site in the multi-site layout',
  sidebar: [{ label: 'Guides', items: [{ label: 'Getting started', slug: 'guides/getting-started' }] }],
});
