---
title: "For UQ members"
linkTitle: "For UQ members"
weight: 10
description: >
  UQ Staff and Students
aliases:
    - /docs/user-guides/create-xnat-project/create-q-collection-uq-users
---

#### Step 1

{{% alert color="warning" %}}
If you have an existing UQ-RDM HPC collection, skip to [Step 2](./Step-2)
{{% /alert %}}

Create (or use an existing) **UQ-RDM HPC Collection**
- **UQ-RDM HPC collections** ends with **-Q** and a 4-digit numerical identifier (e.g. PROJ001-**Q0189**)
- UQ-RDM collections ending with **-A** (e.g. PROJ001-**A0189**) or **-I** (PROJ001-**I0189**) are **non-HPC collections**
- If you have an existing UQ-RDM HPC Collection, continue on to Step 6
- To create a UQ-RDM HPC collection, follow [this](../../create-xnat-project/create-q-collection-uq-users/) guide
<br><br>

Open https://rdm.uq.edu.au/create-record

{{% alert color="white" %}}
<img src="/docs/user-guides/create-xnat-project/uqrdm-create-record.png" width="50%" height="50%" style="border: 1px solid grey">
{{% /alert %}}

(1) and (2) are required fields

For (3) Data storage:
- Tick the 2nd checkbox (“The project data needs to be mounted on UQ HPC facilities”)
- Leave the 1st check box unticked (“The project will store identifiable human data”)

Fill the rest of the record as per your project details and "Request Data Storage)

For any questions about UQ-RDM, please refer to https://guides.library.uq.edu.au/for-researchers/uq-research-data-manager

#### Step 2
Open a ticket with QRIScloud support (Example below)

{{< card header="To: support@qriscloud.org.au" subtitle="Subject: XNAT project **PROJ001-Q0189**">}}
Please create an XNAT project for RDM collection **PROJ001-Q0189**
{{< /card >}}

#### Step 3
The support ticket will inform you when the project is set up.
- An XNAT project will be created with the matching **PROJXXX-QXXXX** name.
- An **xnat** directory will be created in the RDM collection for storing the XNAT data files.
- Please do not write or modify anything under the **xnat** directory.

XNAT Project setup typically takes around ~24 hours from ticket submission.
An automated email from XNAT will be sent through when project is ready, and your user has been added