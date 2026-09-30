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
node ../../scripts/check-links.mjs dist   # check internal links and redirects
```

The dev server keeps running in the background after the command returns. Stop it with `npx astro dev stop` from the same folder. The `npm run` scripts in the root `package.json` run the XNAT site.

## Previews

Pushes to `main`, pull requests and manual runs of the **Preview** workflow deploy each site to Cloudflare Pages. The `main` previews are in the table above.

Other branches are at `https://<branch>.uq-rcc-<site>.pages.dev`, where `<branch>` is the branch name in lower case. A branch gets a preview when it has a pull request, or when you run **Preview** for it from the **Actions** tab.

For a pull request, the preview links also appear at the top of the pull request description.

## Structure

```
sites/
├── xnat/
│   ├── astro.config.mjs     site config, sidebar and legacy redirects
│   ├── public/              files served as-is, including the CNAME custom domain
│   └── src/
│       ├── content/docs/    pages and colocated images
│       ├── components/      site components
│       └── styles/          site styling
├── pitschi/
│   ├── astro.config.mjs     site config
│   └── src/
│       ├── content/docs/    pages and images
│       └── components/      navbar links
└── hpc/
    ├── astro.config.mjs     site config and sidebar
    └── src/content/docs/    pages, with guides/ and policy/ sections
shared/                      navbar shared by every site
scripts/                     link checker, branding asset generator
.github/workflows/           Build, Preview and Promote to production
```
