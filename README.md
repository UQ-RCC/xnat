_Information on the **UQ XNAT** is available at [docs.xnat.rcc.uq.edu.au](https://docs.xnat.rcc.uq.edu.au)_

---

The XNAT documentation site is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build). The repository also holds copied Pitschi and HPC documentation for future site work.

## Local development

```
npm install
npm run dev      # start XNAT at http://localhost:4321
npm run build    # build XNAT to sites/xnat/dist
npm run check    # check XNAT source
npm run check:links # check XNAT internal links and redirects
npm run preview  # preview the production build locally
```

## Structure

- `sites/xnat/src/content/docs/`: live XNAT pages and colocated images
- `sites/xnat/src/components/` and `sites/xnat/src/styles/`: XNAT components and styling
- `sites/xnat/astro.config.mjs`: XNAT site config, sidebar and legacy redirects
- `sites/xnat/public/CNAME`: XNAT custom domain
- `sites/pitschi/src/content/docs/` and `sites/hpc/src/content/docs/`: source copies awaiting site review; neither is built yet
