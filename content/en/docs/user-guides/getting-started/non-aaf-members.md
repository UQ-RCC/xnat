---
title: "Non-AAF members"
linkTitle: "Non-AAF members"
weight: 40
description: >
  Non-University, non-AAF members and other users
---


Non-University, non-AAF members
  - Non-University, non-AAF members and other users
  - e.g. QLD Health, TRI, QIMR, QLD Xray


## Signing into XNAT

1. Open a ticket with QRIScloud support (Example below)

   {{< card header="To: support@qriscloud.org.au" subtitle="Subject: User account for XNAT Project">}}
   Acquisition site:
   Affiliated facility or project
   {{< /card >}}

## Creating an XNAT Project

1. Create (or use an existing) **UQ-RDM HPC Collection**
   - **UQ-RDM HPC collections** ends with **-Q** and a 4-digit numerical identifier (e.g. PROJ001-**Q0189**)
   - UQ-RDM collections ending with **-A** (e.g. PROJ001-**A0189**) or **-I** (PROJ001-**I0189**) are **non-HPC collections**
   - If you have an existing UQ-RDM HPC Collection, continue on to Step 6
   - To create a UQ-RDM HPC collection, follow [this](../../create-xnat-project/create-q-collection-uq-users/) guide
   <br><br>
2. Open a ticket with QRIScloud support (Example below)

   {{< card header="To: support@qriscloud.org.au" subtitle="Subject: XNAT project **PROJ001-Q0189**">}}
   Please create an XNAT project for RDM collection **PROJ001-Q0189**
   {{< /card >}}

3. The support ticket will inform you when the project is set up.
   - An XNAT project will be created with the matching **PROJXXX-QXXXX** name.
   - An **xnat** directory will be created in the RDM collection for storing the XNAT data files.
   - Please do not write or modify anything under the **xnat** directory.

XNAT Project setup typically takes around ~24 hours from ticket submission.
An automated email from XNAT will be sent through when project is ready, and your user has been added
