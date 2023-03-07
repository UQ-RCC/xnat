---
title: "UQ members"
linkTitle: "UQ members"
weight: 20
description: >
  UQ Researchers, Staff and Students
---

## Signing into XNAT

1. Open https://xnat.rcc.uq.edu.au
2. Login in with the AAF Single sign-on button (shown below)
   {{% alert color="white" %}}
   <img src="/docs/user-guides/getting-started/xnat-aaf-login-page.png" width="60%" height="30%" style="border: 1px solid grey">
   {{% /alert %}}

3. This will take you to the AAF central login page (shown below)
   - Find and select your institute from the list
   - Continue to your Organisation
   - Sign in using your Organisation credentials

   {{% alert color="white" %}}
   <img src="/docs/user-guides/getting-started//aaf-central-login.png"  width="40%" height="30%" style="border: 1px solid grey">
   {{% /alert %}}

   {{% alert color="warning" %}}
   If you cannot find your institute in the drop-down list, follow [this](../non-aaf-members)
   {{% /alert %}}

4. After the AAF sign-in, you should be redirected back to XNAT.
   There will be no projects listed for first-time sign-ins, as your user account would have just been created. Refer to next section for setting up an XNAT project
   {{% alert color="white" %}}
   <img src="/docs/user-guides/getting-started//xnat-signed-in.png" width="60%" height="30%" style="border: 1px solid grey">
   {{% /alert %}}

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
