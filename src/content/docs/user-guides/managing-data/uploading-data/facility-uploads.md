---
title: Automated facility uploads
description: How imaging data acquired at HIRF, CAI or TRI reaches your XNAT project without you uploading it
draft: true
---

:::caution[Draft — not yet reviewed]
This page is a skeleton. The details marked below need confirming by someone who
runs the service before it is published.
:::

If your data is acquired at HIRF, CAI or TRI, you do not need to upload it. The
facility sends it to XNAT for you.

## What happens

<!-- NEEDS CONFIRMING: the transfer mechanism, now that CTP is being retired.
     What sends the data from the scanner to XNAT, and who operates it? -->

1. Your session is acquired at the facility.
2. The data is de-identified on-site before it leaves the facility. See
   [On-site anonymisation](/user-guides/managing-data/anonymising-data/site-anonymiser)
   for the DICOM tags this changes.
3. The data is sent to UQ XNAT and archived into your project.

<!-- NEEDS CONFIRMING: how long this normally takes, and whether the data lands
     in the project directly or waits in the prearchive first. -->

## If your data has not arrived

- Check the prearchive — data waiting there has arrived but not been archived.
  See [Fixing stuck uploads](/user-guides/managing-data/uploading-data/prearchive).
- Check you have access to the project. Data can be in XNAT before you are added
  to the project. See [Your project](/user-guides/using-xnat/projects/your-project).
- If neither applies, contact the facility that acquired the data.

<!-- NEEDS CONFIRMING: how long a user should wait before chasing this, and
     whether they contact the facility or RCC support first. -->
