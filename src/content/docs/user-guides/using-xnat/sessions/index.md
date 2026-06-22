---
title: Sessions
description: Managing Scan Sessions
---

Sessions are divided into three types, based on modality information extracted from the DICOM metadata
- MR
- CT
- PET


The following is an example MR session

![Example MR session](./session-1.png)

## Editing Sessions
We can edit session details and metadata from the actions panel on the right

![Edit session actions panel](./session-2.png)

Here we can change some of the key properties of the sessions, such as
- Change session name
- Move sessions to other projects
- Move sessions to other subjects
- Create a new subject, and move session to that subject
- Fix invalid or blank session names

![Session properties](./session-3.png)

## Viewing scans

The Scans themselves are listed at the bottom with the relevant series descriptions and other information
If you hover over one of them, and click the highlighted view details button. This will open up a more details and an image preview window

![Session scan list](./scans/session-scan.png)

Here we can also view View DICOM headers

![View DICOM headers](./scans/scan-1.png)

And see the DICOM headers as shown on the right

![DICOM headers panel](./scans/scan-2.png)
