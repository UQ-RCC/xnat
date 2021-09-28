---
title: "Windows Service"
linkTitle: "Windows Service"
weight: 2
description: >
  Enabling CTP as a Windows Service 
---

The CTP install.bat script uses Apache procrun. Use the following steps to enable CTP as a Windows service, including an update to use a JRE other than system default (leave out step 2 if using the system default JRE)

1. Install CTP
    ```
    java -jar CTP-installer.jar
    ```
2. To use JRE other than system default, edit `<ctp-home>/windows/install.bat`. Find the --Jvm=auto, add --JavaHome entry and set both as follows
    ```
    --JavaHome="<jre home> " ^
    --Jvm="<jre-home>\bin\server\jvm.dll" ^
    ```
    * ^ is needed to wrap/continue command line in batch file
    * The jvm.dll location under <jre-home> is the same for JRE 1.7 and 1.8 installs. Confirm this is the case for other JREs/JDKs
3. Run install.bat as Administrator to create the CTP windows service
    ```
    cd <ctp-home>/windows
    install
    ```
4. Open Windows Services as Administrator and start the CTP service
5. Open CTP administration page in Web browser
6. Confirm the correct JRE is reported in Admin → System Properties and/or Admin → Log Viewer → ctp.log

#### Troubleshooting
* Installation paths are set in install.bat during CTP install so it won't work if you move the CTP folder somewhere else after install
* If removing the service (with uninstall.bat) leaves the service stuck in delete pending state, reboot the system to complete

#### Further information

* [Running CTP as a Windows service](https://mircwiki.rsna.org/index.php?title=Running_CTP_as_a_Windows_Service)
* [Apache procrun](https://commons.apache.org/proper/commons-daemon/procrun.html)