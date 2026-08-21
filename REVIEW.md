# Docs review queue

Questions that can't be answered from the codebase, the screenshots or public
XNAT documentation. Grouped by what they block.

## Blocks launch

- [ ] **De-identification obligations.** Who is responsible for de-identifying
      before upload? What ethics approval is presupposed? What must a user do if
      identifiable data reaches the archive, and will RCC purge it?
      Currently the only statement of this anywhere is a `:::note` inside step 1
      of `uploading-data/web-upload.mdx`.
- [ ] **Site anonymiser coverage.** `anonymising-data/site-anonymiser.md` says
      HIRF and CAI data is anonymised on-site. `getting-started` names HIRF, CAI
      **and TRI**. Which is right, and is the DICOM tag table current? This is a
      privacy claim, so it needs to be exact.

## Blocks new pages

- [ ] **Data residency and lifecycle.** Where do the bytes actually live? Does
      deleting in XNAT delete in UQ-RDM? What happens at project end? Backups?
- [x] **Who can create a project.** Answered: UQ users can request their own.
      Non-UQ AAF users and non-AAF users cannot; their projects are created by
      the facility or they are granted access by a project lead. Non-AAF users
      additionally need an AAF VHO account first. Captured in
      `using-xnat/projects/your-project.mdx`.
- [ ] **Facility project creation.** Projects for HIRF, CAI and TRI data are
      sometimes created automatically and sometimes not. What determines it?
      The Facility data tab currently tells users to check their project list
      and contact the facility if it is missing, which avoids the question but
      does not answer it.
- [ ] **Automated facility uploads.** With CTP retired, what sends imaging data
      from HIRF, CAI and TRI scanners to XNAT, and who operates it? How long
      does it normally take, does the data land in the project directly or wait
      in the prearchive, and how long should a user wait before chasing it —
      with the facility or with RCC support? Blocks
      `uploading-data/facility-uploads.md`, currently `draft: true`.
- [ ] **Which instance for which user.** `xnat.rcc` vs `opex.xnat` vs
      `irc5.xnat`. The homepage flags the latter two as UQ network or VPN only,
      and `partials/sign-in-aaf.mdx` already hedges with "if you have been
      provided with a project specific XNAT link, use that one instead" —
      that hedge exists because the rule was never written down.
- [ ] **Support routing.** When is it `rcc-support@uq.edu.au` vs
      `HIRFAdministration@health.qld.gov.au`? Business hours? Escalation path?
      The "~24 hours" turnaround appears on two pages with no source.

## Corrections to existing pages

- [ ] **XNAT version in production.** Determines whether the quoted UI strings
      are right.
- [ ] **"Simply downloaded archive structure"** — quoted on the downloading page.
      Is the real checkbox label "Simplify downloaded archive structure"? Left
      verbatim rather than silently corrected.
- [ ] **Alias token expiry.** `alias-tokens.md` says 60 days. This is
      site-configurable in XNAT — confirm for this instance.
- [ ] **Storage quota.** "1TB storage and 1 million files" — current? Per
      project or per user? What does a user see when they hit it?
- [ ] **Feature availability.** The Actions menu in `using-xnat/subjects.png`
      shows XSync, Pipelines and Event Service. None are documented. Are they
      generally available, restricted, or disabled?
- [ ] **AAF Keycloak login error.** There is an unused screenshot at
      `logging-into-xnat/ais-keycloak-login-error.png` showing "Unexpected error
      when authenticating with identity provider". What is the fix? Someone hit
      this and never wrote it up.
- [ ] **FAQ content.** `user-guides/faq.md` is an honest placeholder. Real
      questions from the ticket queue would be better than invented ones.

## Upstream documentation gaps

- [ ] **How to use Neurodesk from an XNAT notebook.** neurodesk.org has an
      applications list and install-focused getting-started docs, but nothing
      covering day-to-day use for someone handed a running notebook server.
      `processing-data/interactive-analysis` currently points at
      `neurodesk.org/getting-started/hosted/xnat/` as the improvable target.

## Drafted content awaiting sign-off

Pages drafted from screenshots and public XNAT docs are marked either
`draft: true` (excluded from production builds) or with a review banner and a
sidebar badge. Nothing drafted should be published without a pass from someone
who runs the service.
