---
title: "Command line tools"
linkTitle: "Command line tools"
weight: 10
description: >
  Command line tools
---

## XnatUtils
https://github.com/Australian-Imaging-Service/xnatutils

Install xnatutils using
```
pip3 install xnatutils
```

#### Authenticating using `.netrc`
1. Create an [alias token](/docs/user-guides/logging-into-xnat/alias-tokens/). Or use an existing alias token
2. Create a `.netrc` file in your home directory with the following details
```
machine https://xnat.rcc.uq.edu.au
user <your-alias-token>
password <your-alias-secret>
```

## xnatpy

https://xnat.readthedocs.io/en/latest/

## Pyxnat

https://pyxnat.github.io/pyxnat 
