Documentation for UQ Research Computing Centre (RCC) platforms, built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## Sites

| Site | Folder | Production | Preview of `main` |
| --- | --- | --- | --- |
| XNAT | `sites/xnat` | https://docs.xnat.rcc.uq.edu.au | https://uq-rcc-xnat.pages.dev |
| Pitschi | `sites/pitschi` | Not yet published | https://uq-rcc-pitschi.pages.dev |
| HPC | `sites/hpc` | Not yet published | https://uq-rcc-hpc.pages.dev |

> [!NOTE]
> The preview links always show the latest version of `main`. Production only changes when someone runs **Promote to production**.

## Updating the docs

There are three ways to update the docs

### Editing on GitHub

> [!NOTE]
> If you do not have write access to this repository, GitHub automatically asks you to fork it first, and your change arrives as a pull request instead.

1. Open the page on its site and select **Edit page** at the bottom. GitHub opens the page's source file in its editor.
2. Make your changes. Use the **Preview** tab to check the formatting.
3. Select **Commit changes**, add a short message, and choose **Commit directly to the `main` branch**. The [`main` preview](#sites) updates in 1 to 2 minutes. The live site only changes when someone runs **Promote to production**.

To have a change reviewed before it reaches `main`, see [Using branches and pull requests](#using-branches-and-pull-requests).

Keep the block between the `---` lines at the top of the file. A page without a `title` there stops the whole site from building.

### Using branches and pull requests

To review a change before it reaches `main`, choose **Create a new branch for this commit and start a pull request** when you commit, then open the pull request.

- The pull request builds a preview of the branch at `https://<branch>.uq-rcc-<site>.pages.dev`, where `<branch>` is the branch name in lower case.
- A panel at the top of the pull request description shows the build's progress, then links to the branch preview and to a preview of that exact commit.
- Every further push to the branch updates the preview and the panel.
- Merging the pull request brings the change into `main` and updates the `main` preview. Production still only changes when someone runs **Promote to production**.

To preview a branch without a pull request, run the **Preview** workflow for it from the **Actions** tab.

### Local development

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
