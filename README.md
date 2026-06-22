_Information on the **UQ XNAT** is available at [docs.xnat.rcc.uq.edu.au](https://docs.xnat.rcc.uq.edu.au)_

---

This documentation site is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## Local development

```
npm install
npm run dev      # start a dev server at http://localhost:4321
npm run build    # build the production site to ./dist
npm run preview  # preview the production build locally
```

## Structure

- `src/content/docs/` — documentation pages (Markdown / MDX), colocated with their images
- `src/components/` — interactive components (email request forms)
- `src/styles/custom.css` — UQ purple theme overrides
- `astro.config.mjs` — site config, sidebar and redirects from the old Hugo `/docs/` URLs
- `public/CNAME` — custom domain
