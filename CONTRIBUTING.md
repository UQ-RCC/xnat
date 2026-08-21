# Contributing

This repository holds the documentation for [UQ XNAT](https://docs.xnat.rcc.uq.edu.au),
operated by the Research Computing Centre at The University of Queensland.

Corrections are welcome from anyone who uses the service. If a screenshot is out
of date or a step no longer matches what XNAT does, that is worth reporting even
if you do not fix it yourself.

## Quickest way to fix a page

Every page has an **Edit page** link at the bottom. It opens the file in the
GitHub web editor, where you can make a change and open a pull request without
cloning anything.

## Working locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build, run this before opening a PR
```

Content lives in `src/content/docs/`, one directory per section. Screenshots sit
beside the page that uses them. The sidebar and the URL redirects are both in
`astro.config.mjs`.

## Writing conventions

- **Australian English** — anonymise, organisation, de-identified.
- **Second person, imperative.** "Select **Upload**", not "we can select Upload".
- **Every page needs `title` and `description` frontmatter.** The description is
  the meta description, the social card text and the search result snippet, so
  make it a real sentence rather than a repeat of the title.
- **Sentence case for headings**, and at least two `##` headings per page so the
  table of contents has something to show. Do not open a page at `###`.
- **Quote the interface exactly.** If XNAT's button says **Begin Upload**, write
  that, in bold, with the same capitalisation.
- Prefer `<Steps>` for ordered procedures, `<Tabs>` for mutually exclusive
  paths, and plain prose for explanation.

## Screenshots

- **Never include real patient data, or anything that could identify a
  participant.** Use a demo project with synthetic data. This is a public
  repository and its history cannot be quietly rewritten.
- Colocate images with the page that references them.
- Write alt text describing what to look for, not what the page is.

## Renaming and moving pages

A page's URL comes from its filename, so renaming a file changes its URL. The
site carries around 60 redirects for URLs that already exist in the wild
(`astro.config.mjs`). If you move or rename a page, add a redirect from the old
path and check the build still passes.

## Review

Pull requests are reviewed by RCC. For anything about the service itself rather
than the documentation, contact `rcc-support@uq.edu.au`.
