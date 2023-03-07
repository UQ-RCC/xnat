---
title: "AAF members"
linkTitle: "AAF members"
weight: 30
description: >
  Australian University or AAF members
---

## Signing into XNAT

#### Step 1
Open https://xnat.rcc.uq.edu.au

#### Step 2
Login in with the AAF Single sign-on button (shown below)
{{% alert color="white" %}}
<img src="/docs/user-guides/getting-started/xnat-aaf-login-page.png" width="60%" height="30%" style="border: 1px solid grey">
{{% /alert %}}

Use the AAF login process for your organisation

{{% alert color="warning" %}}
If you cannot find your organisation in the AAF list, follow the instructions for [non-aaf-members](../non-aaf-members)
{{% /alert %}}

#### Step 3

After the AAF sign-in, you should be redirected back to XNAT (Example below)

There will be **no projects listed** when signing in for the first-time, as your user account would have just been created.

{{% alert color="white" %}}
<img src="/docs/user-guides/getting-started//xnat-signed-in.png" width="60%" height="30%" style="border: 1px solid grey">
{{% /alert %}}

Proceed to to next section for setting up an XNAT project

## Creating an XNAT Project

### For UQ members

#### Step 1
Create (or use an existing) **UQ-RDM HPC Collection**
- **UQ-RDM HPC collections** ends with **-Q** and a 4-digit numerical identifier (e.g. PROJ001-**Q0189**)
- UQ-RDM collections ending with **-A** (e.g. PROJ001-**A0189**) or **-I** (PROJ001-**I0189**) are **non-HPC collections**
- If you have an existing UQ-RDM HPC Collection, continue on to Step 6
- To create a UQ-RDM HPC collection, follow [this](../../create-xnat-project/create-q-collection-uq-users/) guide
<br><br>

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

### For Non-UQ HIRF Members

{{% alert color="warning" %}}
If you are a UQ HIRF member, use the process for [UQ members](#for-uq-members)
{{% /alert %}}

#### Step 1
Open a ticket with QRIScloud support (Example below)

{{< card header="To: support@qriscloud.org.au" subtitle="Subject: ">}}
Require an XNAT project for data collected from HIRF for Project **Project**
{{< /card >}}

#### Step 2
Qriscloud support