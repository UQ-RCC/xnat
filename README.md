Documentation for UQ Research Computing Centre (RCC) platforms, built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

| Site | Folder | Production | Preview of `main` |
| --- | --- | --- | --- |
| XNAT | `sites/xnat` | https://docs.xnat.rcc.uq.edu.au | https://uq-rcc-xnat.pages.dev |
| Pitschi | `sites/pitschi` | Not yet published | https://uq-rcc-pitschi.pages.dev |
| HPC | `sites/hpc` | Not yet published | https://uq-rcc-hpc.pages.dev |

## Local development

Install once from the repository root, then run Astro from the site's folder:

```
npm install
cd sites/<site>
npx astro dev          # start the site at http://localhost:4321
npx astro build        # build the site to dist/
npx astro check        # type-check the site
npx astro preview      # preview the production build
node ../../.github/scripts/check-links.mjs dist   # check internal links and redirects
```

The dev server keeps running in the background after the command returns. Stop it with `npx astro dev stop` from the same folder. The `npm run` scripts in the root `package.json` run the XNAT site.

## Previews

Pushes to `main`, pull requests and manual runs of the **Preview** workflow deploy each site to Cloudflare Pages. The `main` previews are in the table above.

Other branches are at `https://<branch>.uq-rcc-<site>.pages.dev`, where `<branch>` is the branch name in lower case. A branch gets a preview when it has a pull request, or when you run **Preview** for it from the **Actions** tab.

For a pull request, the preview links also appear at the top of the pull request description.

## Structure

<pre>
<a href="sites">sites/</a>
├── <a href="sites/xnat">xnat/</a>
│   ├── <a href="sites/xnat/astro.config.mjs">astro.config.mjs</a>     site config, sidebar and legacy redirects
│   ├── <a href="sites/xnat/public">public/</a>              static files
│   └── <a href="sites/xnat/src">src/</a>
│       ├── <a href="sites/xnat/src/content/docs">content/docs/</a>    pages and colocated images
│       ├── <a href="sites/xnat/src/components">components/</a>      site components
│       └── <a href="sites/xnat/src/styles">styles/</a>          site styling
├── <a href="sites/pitschi">pitschi/</a>
│   ├── <a href="sites/pitschi/astro.config.mjs">astro.config.mjs</a>     site config
│   └── <a href="sites/pitschi/src">src/</a>
│       ├── <a href="sites/pitschi/src/content/docs">content/docs/</a>    pages and images
│       └── <a href="sites/pitschi/src/components">components/</a>      navbar links
└── <a href="sites/hpc">hpc/</a>
    ├── <a href="sites/hpc/astro.config.mjs">astro.config.mjs</a>     site config and sidebar
    └── <a href="sites/hpc/src/content/docs">src/content/docs/</a>    pages, with guides/ and policy/ sections
<a href="shared">shared/</a>                      navbar shared by every site
<a href=".github/workflows">.github/workflows/</a>           Build, Preview and Promote to production
<a href=".github/scripts">.github/scripts/</a>             link checker and preview panel
</pre>
