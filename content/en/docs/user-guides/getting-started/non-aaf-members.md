---
title: "Non-AAF members"
linkTitle: "Non-AAF members"
weight: 30
description: >
  Non-University, non-AAF members and other users
aliases:
    - /docs/user-guides/create-xnat-project/create-q-collection-uq-users
---

This is for users from non-AAF member organisations, including:
  - QLD Health, TRI, QIMR, QLD Xray

Non-AAF members usually require XNAT access for: 
- Management of data acquisition from sites such as CAI, HIRF, TRI
- Collaborating on projects managed on UQ-RCC XNAT

XNAT uses AAF for login. QCIF/QRIScloud can provide AAF Virtual Home (VHO) accounts for non-AAF users.

## Creating an AAF VHO account
---

#### Step 1
Open a ticket with RCC support to request an AAF account

_Example below (replace __________ with your details)_

{{< card header="**To:** rcc-support@uq.edu.au" subtitle="**Subject:** XNAT AAF account for project __________" >}}
Hello RCC support

I require an AAF account to access the UQ AIS XNAT service<br>

My details are below<br>
Organisation: __________<br>
Data Acquisition Site: __________<br>
{{< /card >}}

#### Step 2
AAF's VHO account will return an email regarding the VHO account registration process

#### Step 3
_After account is provisioned, continue on to the [Signing into XNAT guide](/docs/user-guides/getting-started/non-aaf-members#signing-into-xnat)_

## Signing into XNAT
---
#### Step 1
Open [https://xnat.rcc.uq.edu.au](https://xnat.rcc.uq.edu.au)

{{% alert title="Note" color="warning" %}}
This is the link to the UQ AIS XNAT. If you have been provided with a project specific XNAT link to use, use that one instead
{{% /alert %}}


#### Step 2
Login in with the AAF Single sign-on button (_See below_).

<img src="/docs/user-guides/login-to-xnat/xnat-aaf-login-page.png" width="100%" style="border: 1px solid #ddd"></img>

Select the **AAF Virtual Home** option (_See below_) and login with your AAF VHO credentials.

<img src="/docs/user-guides/login-to-xnat/aaf-virtual-home-login.png" width="50%" style="border: 1px solid #ddd"></img>
<i class="fa-solid fa-arrow-right fa-xl" style="color: black;"></i>
<img src="/docs/user-guides/login-to-xnat/aaf-vho-signin.png" width="25%" style="border: 1px solid #ddd"></img>

#### Step 3

After the AAF sign-in, you should be redirected back to XNAT (_Example below_)

There will be **no projects listed** when signing in for the first-time, as your user account would have just been created.

<img src="/docs/user-guides/getting-started/xnat-signed-in.png" width="100%" style="border: 1px solid #ddd"></img>

## Accessing XNAT Project
---

#### If you are Acquiring data at HIRF, CAI or TRI
- The respective facility will organise the project creation.
- You will receive a follow up email when access has been granted
- Contact rcc-support@uq.edu.au if you have not received access within 5 working days
#### If you are collaborating on an existing XNAT project
- Contact the project lead to grant you access to the XNAT project
