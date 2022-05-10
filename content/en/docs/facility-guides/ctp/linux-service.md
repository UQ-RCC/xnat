---
title: "Linux Service"
linkTitle: "Linux Service"
weight: 3
description: >
  Enabling CTP as a Linux Service 
---

## Ubuntu

Open `./linux/ctpService-ubuntu.sh`. Update the following parameters:

```
USER=ubuntu
CTP_HOME=/opt/ctp/CTP
JAVA_BIN=/usr/lib/jvm/java-17-openjdk-amd64/bin
JAVA=$JAVA_BIN/java
CTP_PID=$CTP_HOME/ctp.pid
```

Run the following to install the ctpService into init.d

```
sudo ln -s ./linux/ctpService-ubuntu.sh /etc/init.d/ctpService
sudo update-rc.d ctpService defaults 98 02
```

Start and stop CTP using the following commands

```
sudo service ctpService start
sudo service ctpService stop
```