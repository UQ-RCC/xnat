// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Every content page's slug (used to redirect the old Hugo `/docs/...` URLs).
const slugs = [
  'user-guides',
  'user-guides/faq',
  'user-guides/getting-started',
  'user-guides/logging-into-xnat',
  'user-guides/using-xnat',
  'user-guides/using-xnat/projects',
  'user-guides/using-xnat/projects/granting-access',
  'user-guides/using-xnat/projects/request-storage',
  'user-guides/using-xnat/subjects',
  'user-guides/using-xnat/sessions',
  'user-guides/using-xnat/search',
  'user-guides/managing-data',
  'user-guides/managing-data/downloading-data',
  'user-guides/managing-data/downloading-data/zip-download',
  'user-guides/managing-data/downloading-data/desktop-client',
  'user-guides/managing-data/downloading-data/download-scan',
  'user-guides/managing-data/viewing-images',
  'user-guides/managing-data/uploading-data',
  'user-guides/managing-data/uploading-data/web-upload',
  'user-guides/managing-data/uploading-data/resource-uploader',
  'user-guides/managing-data/uploading-data/prearchive',
  'user-guides/managing-data/syncing-data',
  'user-guides/managing-data/anonymising-data',
  'user-guides/managing-data/anonymising-data/project-anonymiser',
  'user-guides/managing-data/anonymising-data/site-anonymiser',
  'user-guides/processing-data',
  'user-guides/processing-data/command-line-tools',
  'user-guides/processing-data/interactive-analysis',
  'facility-guides',
  'facility-guides/ctp',
  'facility-guides/ctp/installation',
  'facility-guides/ctp/proxy-server',
];

// Old Hugo `/docs/<slug>` -> new `/<slug>`, plus the legacy Hugo aliases.
const redirects = {
  '/docs': '/',
  ...Object.fromEntries(slugs.map((s) => [`/docs/${s}`, `/${s}`])),
  // Getting Started was split into per-member pages; it's now a single tabbed
  // page that selects the member type via a `?member=` query param. Redirect
  // every old per-member URL (both the Astro and original Hugo `/docs/` forms)
  // and the legacy Hugo aliases to the matching tab.
  '/user-guides/getting-started/uq-members':
    '/user-guides/getting-started/?member=uq-members',
  '/user-guides/getting-started/other-aaf-members':
    '/user-guides/getting-started/?member=other-aaf-members',
  '/user-guides/getting-started/non-aaf-members':
    '/user-guides/getting-started/?member=non-aaf-members',
  '/user-guides/getting-started/hirf-users': '/user-guides/getting-started/',
  '/docs/user-guides/getting-started/uq-members':
    '/user-guides/getting-started/?member=uq-members',
  '/docs/user-guides/getting-started/other-aaf-members':
    '/user-guides/getting-started/?member=other-aaf-members',
  '/docs/user-guides/getting-started/non-aaf-members':
    '/user-guides/getting-started/?member=non-aaf-members',
  '/docs/user-guides/getting-started/hirf-users': '/user-guides/getting-started/',

  // The standalone "AAF login" page was merged into the Logging into XNAT
  // overview (AAF tab). Alias tokens moved to Processing Data (it's about
  // authenticating external tools, not website login).
  '/user-guides/logging-into-xnat/aaf-login': '/user-guides/logging-into-xnat/',
  '/docs/user-guides/logging-into-xnat/aaf-login': '/user-guides/logging-into-xnat/',
  '/user-guides/logging-into-xnat/alias-tokens':
    '/user-guides/processing-data/alias-tokens',
  '/docs/user-guides/logging-into-xnat/alias-tokens':
    '/user-guides/processing-data/alias-tokens',

  // Scans folded into the Sessions overview.
  '/user-guides/using-xnat/sessions/scans':
    '/user-guides/using-xnat/sessions/#viewing-scans',
  '/docs/user-guides/using-xnat/sessions/scans':
    '/user-guides/using-xnat/sessions/#viewing-scans',

  // CTP Windows/Linux service pages merged into one OS-tabbed page.
  '/facility-guides/ctp/windows-service': '/facility-guides/ctp/run-as-service',
  '/facility-guides/ctp/linux-service': '/facility-guides/ctp/run-as-service',
  '/docs/facility-guides/ctp/windows-service': '/facility-guides/ctp/run-as-service',
  '/docs/facility-guides/ctp/linux-service': '/facility-guides/ctp/run-as-service',

  // Legacy aliases declared in the original Hugo front matter.
  '/docs/user-guides/create-xnat-project': '/user-guides/getting-started',
  '/docs/user-guides/create-xnat-project/create-q-collection-uq-users':
    '/user-guides/getting-started/?member=uq-members',
  '/docs/user-guides/create-xnat-project/create-q-collection-non-uq-users':
    '/user-guides/getting-started/?member=other-aaf-members',
  '/docs/user-guides/browsing-xnat': '/user-guides/using-xnat',
  '/docs/user-guides/login-to-xnat': '/user-guides/logging-into-xnat',
  '/docs/user-guides/login-to-xnat/aaf-login': '/user-guides/logging-into-xnat/',
};

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.xnat.rcc.uq.edu.au',
  redirects,
  integrations: [
    starlight({
      title: 'UQ AIS XNAT',
      description:
        'Storing, managing and analysing de-identified imaging data for UQ projects and collaborators',
      customCss: ['./src/styles/custom.css'],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      components: {
        // Replace the header's social-icons slot with our top-nav links.
        SocialIcons: './src/components/NavLinks.astro',
        // Cycling theme toggle (auto → light → dark) instead of the dropdown.
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      sidebar: [
        {
          label: 'User Guides',
          items: [
            // FAQ hidden from the sidebar until it has real content.
            // The page still exists at /user-guides/faq (kept for old redirects).
            // Getting Started is now a single tabbed page (member type via tabs).
            { label: 'Getting Started', slug: 'user-guides/getting-started' },
            // Logging into XNAT is now a single page (AAF + RCC Authenticate tabs).
            { label: 'Logging into XNAT', slug: 'user-guides/logging-into-xnat' },
            {
              label: 'Using XNAT',
              items: [
                { label: 'Overview', slug: 'user-guides/using-xnat' },
                {
                  label: 'Projects',
                  items: [
                    { label: 'Overview', slug: 'user-guides/using-xnat/projects' },
                    { label: 'Granting Access', slug: 'user-guides/using-xnat/projects/granting-access' },
                    { label: 'Request Storage', slug: 'user-guides/using-xnat/projects/request-storage' },
                  ],
                },
                { label: 'Subjects', slug: 'user-guides/using-xnat/subjects' },
                { label: 'Sessions', slug: 'user-guides/using-xnat/sessions' },
                { label: 'Search', slug: 'user-guides/using-xnat/search' },
              ],
            },
            {
              label: 'Managing Data',
              items: [
                {
                  label: 'Downloading Data',
                  items: [
                    { label: 'Overview', slug: 'user-guides/managing-data/downloading-data' },
                    { label: 'Zip Download', slug: 'user-guides/managing-data/downloading-data/zip-download' },
                    { label: 'Desktop client', slug: 'user-guides/managing-data/downloading-data/desktop-client' },
                    { label: 'Download Scan', slug: 'user-guides/managing-data/downloading-data/download-scan' },
                  ],
                },
                { label: 'Viewing Images', slug: 'user-guides/managing-data/viewing-images' },
                {
                  label: 'Uploading Data',
                  items: [
                    { label: 'Overview', slug: 'user-guides/managing-data/uploading-data' },
                    { label: 'Web Upload', slug: 'user-guides/managing-data/uploading-data/web-upload' },
                    { label: 'Resource uploader', slug: 'user-guides/managing-data/uploading-data/resource-uploader' },
                    { label: 'Prearchive', slug: 'user-guides/managing-data/uploading-data/prearchive' },
                  ],
                },
                { label: 'Syncing Data', slug: 'user-guides/managing-data/syncing-data' },
                {
                  label: 'Anonymising Data',
                  items: [
                    { label: 'Overview', slug: 'user-guides/managing-data/anonymising-data' },
                    { label: 'Project anonymiser', slug: 'user-guides/managing-data/anonymising-data/project-anonymiser' },
                    { label: 'Site anonymiser', slug: 'user-guides/managing-data/anonymising-data/site-anonymiser' },
                  ],
                },
              ],
            },
            {
              label: 'Processing Data',
              items: [
                { label: 'Alias tokens', slug: 'user-guides/processing-data/alias-tokens' },
                { label: 'Command line tools', slug: 'user-guides/processing-data/command-line-tools' },
                { label: 'Interactive Analysis', slug: 'user-guides/processing-data/interactive-analysis' },
              ],
            },
          ],
        },
        {
          label: 'Facility Guides',
          items: [
            {
              label: 'Clinical Trials Processor (CTP)',
              items: [
                { label: 'Overview', slug: 'facility-guides/ctp' },
                { label: 'Installation', slug: 'facility-guides/ctp/installation' },
                { label: 'Run CTP as a service', slug: 'facility-guides/ctp/run-as-service' },
                { label: 'Proxy Server Settings', slug: 'facility-guides/ctp/proxy-server' },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
