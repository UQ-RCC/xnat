---
title: "UQ members"
linkTitle: "UQ members"
weight: 10
description: >
  UQ Staff and Students
aliases:
    - /docs/user-guides/create-xnat-project/create-q-collection-uq-users
---

## Signing into XNAT
---
#### Step 1
Open https://xnat.rcc.uq.edu.au

#### Step 2
Login in with the AAF Single sign-on button (shown below).

Follow the AAF login process for your organisation

<img src="/docs/user-guides/getting-started/xnat-aaf-login-page.png" width="60%" height="30%" style="border: 1px solid grey; margin-bottom:10px">

{{% alert color="warning" %}}
If you cannot find your organisation in the AAF list, try the instructions for [non-aaf-members](../non-aaf-members)
{{% /alert %}}

#### Step 3

After the AAF sign-in, you should be redirected back to XNAT (Example below)

There will be **no projects listed** when signing in for the first-time, as your user account would have just been created.

<img src="/docs/user-guides/getting-started//xnat-signed-in.png" width="60%" height="30%" style="border: 1px solid grey; margin-bottom:10px">

_Proceed to to next section for setting up an XNAT project_

## Creating XNAT project

For UQ users, XNAT uses UQ-RDM HPC collections for storage allocation.<br>
For any general questions about UQ-RDM, please refer to the [library guides](https://guides.library.uq.edu.au/for-researchers/uq-research-data-manager)

#### Step 1

Before creating an XNAT project, you'll require a UQ-RDM **HPC Collection**
- **HPC collections** ends with **-Q** and a 4-digit numerical identifier (e.g. PROJ001-**Q0189**)
- **Non-HPC collections** end with **-A** (e.g. PROJ001-**A0189**) or **-I** (PROJ001-**I0189**)

{{% alert color="warning" %}}
If you have an existing UQ-RDM **HPC collection** (ending with **-Qxxxx**), skip to [Step 2](./#step-2)
{{% /alert %}}

To create a new UQ-RDM **HPC Collection**, proceed with the following

Open https://rdm.uq.edu.au/create-record and sign-in

<img src="/docs/user-guides/create-xnat-project/uqrdm-create-record.png" width="40%" height="40%" style="border: 1px solid grey">
<br><br>
<font color='Fuchsia'>(1)</font> and <font color='blue'>(2)</font> are required fields. Fill these and the rest of the record as per your project details.

{{% alert title="Important" color="warning" %}}
For <font color='red'>(3)</font> Data storage:
- [ ] Leave the 1st check box unticked (_The project will store identifiable human data_)
- [x] Tick the 2nd checkbox (_The project data needs to be mounted on UQ HPC facilities_)

Any other combination will be incompatible with XNAT, requiring a new RDM request 
{{% /alert %}}

Proceed to **REQUEST DATA STORAGE** (bottom right)

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

XNAT Project setup typically takes around ~24 hours from ticket submission.<br>
An automated email from XNAT will be sent through when project is ready, and your user has been added