---
title: "UQ members"
linkTitle: "UQ members"
weight: 20
description: >
  UQ Researchers, Staff and Students
---

1. Open https://xnat.rcc.uq.edu.au
2. Login in with the AAF Single sign-on button (shown below)
   {{% alert color="white" %}}
   <img src="/docs/user-guides/getting-started/xnat-aaf-login-page.png" width="60%" height="30%">
   {{% /alert %}}

3. This will take you to the AAF central login page (shown below)
   - Find and select your institute from the list
   - Continue to your Organisation
   - Sign in using your Organisation credentials

   {{% alert color="white" %}}
   <img src="/docs/user-guides/getting-started/aaf-central-login.png"  width="40%" height="30%">
   {{% /alert %}}

   {{% alert color="warning" %}}
   If you cannot find your institute in the drop-down list, follow [this](../non-aaf-members)
   {{% /alert %}}

4. After the AAF sign-in, you should be redirected back to XNAT.
   There will be no projects listed for first-time sign-ins, as your user account would have just been created
   {{% alert color="white" %}}
   <img src="/docs/user-guides/getting-started/xnat-signed-in.png" width="60%" height="30%">
   {{% /alert %}}

5. Create (or use an existing) **UQ-RDM HPC Collection**
   - **UQ-RDM HPC collections** ends with **-Q** and a 4-digit numerical identifier (e.g. PROJ001-**Q0189**)
   - UQ-RDM collections ending with **-A** (e.g. PROJ001-**A0189**) or **-I** (PROJ001-**I0189**) are **non-HPC collections**
   - If you have an existing UQ-RDM HPC Collection, continue on to Step 6
   - To create a UQ-RDM HPC collection, follow [this](/docs/user-guides/create-xnat-project/create-q-collection-uq-users/) guide
   <br><br>
6. Request an XNAT Project
   - Open a ticket with QRIScloud support (support@qriscloud.org.au)
     - Ask them to make your Q-collection available to XNAT
     - Quote the collection number in the email
   - The support ticket will inform you when the project is set up.
     - An XNAT project will be created with the matching Q**** name.
     - An “xnat” directory will be created in the Q**** collection for storing the XNAT data files.
     - Please do not write or modify anything under the “xnat” directory.
 