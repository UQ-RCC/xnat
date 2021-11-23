---
title: "Proxy Server Settings"
linkTitle: "Proxy Server Settings"
weight: 2
description: >
  Updating CTP Proxy Server Settings
---

If CTP uses a proxy server for internet access, you can update the CTP proxy server settings on Windows as follows

1. Stop the CTP Windows service
  * If you already have a Services short-cut on the Windows desktop, double-click the short-cut to start Windows Services
  * If not, click the Windows start button, start typing "services" and the Services App icon should appear
    * Click the Services App icon to start Windows Services
  * Locate the CTP service in the list of services, right-click and select **Stop** from the context menu
2. Start the CTP Launcher
  * If you already have a CTP Launcher short-cut on the Windows desktop, double-click the short-cut to start the CTP Launcher
  * If not, locate the CTP service in the list of services again, right-click and select **Properties** from the context menu
    1. Use the **Path to executable** entry to find the installation folder for CTP. It will be in the form ```<install folder>\windows\CTP.exe```
    2. Open a Windows Command prompt window
      1. Click the Windows Start button, start typing "cmd" and the Command Prompt App icon should appear
      2. Click the Command Prompt App icon to start the Command Prompt
    3. In the Command Prompt window, enter the following commands
      ```
      cd <install folder>
      java -jar Launcher.jar
      ```
3. Navigate to the CTP Launcher Configuration tab
4. Use the navigation panel on the left to select **Configuration** -> **Server** -> **ProxyServer**
5. Update the proxy server settings in the right panel as required. You can set an IP address or host name in the proxyIPAddress field
6. Select **File** -> **Save** from the main menu bar to save your changes
7. Close the CTP Launcher using the Window close button at the top right
8. Close the Command Prompt window
9. Re-Start the CTP Windows service using Windows Services
  * Locate the CTP service in the list of services, right-click and select **Start** from the context menu

#### Troubleshooting
* If the CTP Windows service Stop is disabled, try restarting Windows Services as administrator by right-clicking the icon and selecting **Run as administrator**

#### Further information

* [CTP Server Settings](https://mircwiki.rsna.org/index.php?title=MIRC_CTP#Server)
