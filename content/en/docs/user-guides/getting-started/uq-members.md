---
title: "UQ members"
linkTitle: "UQ members"
weight: 10
description: >
  For UQ Staff and Students
aliases:
    - /docs/user-guides/create-xnat-project/create-q-collection-uq-users
---

## Signing into XNAT
---
#### Step 1
Open [https://xnat.rcc.uq.edu.au](https://xnat.rcc.uq.edu.au)

#### Step 2
Login in with the AAF Single sign-on button (shown below).

Follow the AAF login process for your organisation

<img src="/docs/user-guides/login-to-xnat/xnat-aaf-login-page.png" width="60%" height="30%" style="border: 1px solid grey; margin-bottom:10px">

#### Step 3

After the AAF sign-in, you should be redirected back to XNAT (Example below)

There will be **no projects listed** when signing in for the first-time, as your user account would have just been created.

<img src="/docs/user-guides/getting-started//xnat-signed-in.png" width="60%" height="30%" style="border: 1px solid grey; margin-bottom:10px">

_Proceed to to next section for setting up an XNAT project_

## Creating XNAT project
---
For UQ users, XNAT uses UQ-RDM HPC collections for storage allocation.<br>
For any general questions about UQ-RDM, please refer to the [library guides](https://guides.library.uq.edu.au/for-researchers/uq-research-data-manager)

{{% alert title="Note" color="warning" %}}
Only one member of the project team needs to request for the project
{{% /alert %}}

#### Step 1

Before creating an XNAT project, you'll require a UQ-RDM **HPC Collection**
- **HPC collections** ends with **-Q** and a 4-digit numerical identifier (e.g. PROJ001-**Q0189**)
- **Non-HPC collections** end with **-A** (e.g. PROJ001-**A0189**) or **-I** (PROJ001-**I0189**)

{{% alert color="warning" %}}
If you have an existing UQ-RDM **HPC collection** (ending with **-Qxxxx**), skip to the [next step](./#step-2-1)
{{% /alert %}}

To create a new UQ-RDM **HPC Collection**, proceed with the following

Open [https://rdm.uq.edu.au/create-record](https://rdm.uq.edu.au/create-record) and sign-in

Fill in the record as per your project details

<img src="../uqrdm-create-record.png" width="70%" height="70%" style="border: 1px solid grey">

{{% alert title="Important" color="warning" %}}
For <font color='red'>(6) Data Storage Options</font>, select the second option (<font color='red'>_The project data needs to be mounted on UQ HPC facilities._</font>)

Any other option will be incompatible with XNAT, requiring a new RDM request 
{{% /alert %}}

**REQUEST DATA STORAGE** when complete

Move on to the next step after the RDM collection is provisioned<br>
You should have an RDM collection name ready (e.g. **PROJ001-Q0189**)

#### Step 2
Open a ticket with QRIScloud support

_Example below (replace __________ with your details)_

{{< card header="To: support@qriscloud.org.au" subtitle="Subject: Create XNAT project __________">}}
Hello QRIScloud support

Can we create an XNAT project for RDM collection __________
{{< /card >}}

#### Step 3
The support ticket will inform you when the project is set up.
- An XNAT project will be created with the matching name (e.g. **PROJ001-Q0189**)
- An **xnat** directory will be created in the RDM collection for storing the XNAT data files
- Please do not write or modify anything under the **xnat** directory

XNAT Project setup typically takes around ~24 hours from ticket submission<br>
An automated email from XNAT will be sent through when project is ready, and your user has been added