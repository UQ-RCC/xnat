---
title: "Installation"
linkTitle: "Installation"
weight: 1
description: >
  CTP Installation 
---

### Installing CTP on Windows 10
CTP installation steps

1. Create a new user for CTP on UQ RCC XNAT (not an AAF/OpenID user) with required project access, without admin access
2. Download the following files
    * [CTP-installer.jar](https://github.com/UQ-RCC/CTP/raw/4e617b1d1c4437a7c5631adc6bd6ae7204c7a0bb/products/CTP-installer.jar)
    * [ctp_clinical_site_to_xnat_config.xml](https://github.com/Australian-Imaging-Service/configuration/raw/0c784a9bdd817ee5e0534034a5a108b4a1c6f4aa/CTP/ctp_clinical_site_to_xnat_config.xml)
    * [dcmtk-3.6.6-win64-dynamic.zip](https://dicom.offis.de/download/dcmtk/dcmtk366/bin/dcmtk-3.6.6-win64-dynamic.zip)
    * [dicom_viewer_Mrbrain.zip](http://www.rubomedical.com/dicom_files/dicom_viewer_Mrbrain.zip)
    * Optional if you need more DICOM samples: [sample1.zip](https://download.nrg.wustl.edu/pub/data/sample1.zip)
3. Install CTP using:
    ```
    cd INSTALL_FOLDER (replace with your actual folder)
    java -jar CTP-installer.jar
    ```
4. Replace CTP/config.xml with ctp_clinical_site_to_xnat_config.xml
5. Edit CTP/config.xml
    * Change "xxxx.xxxx" in two "url" tags to "xnat.rcc.uq.edu.au"
    * Change "xxxx" username and password tags to match new user from step 1
    * If CTP internet access is via a proxy server, add the proxy server element to the Server config
      ```
      ...
      <Server ...>
        <ProxyServer
          proxyIPAddress=""
          proxyPort=""
          proxyUsername=""
          proxyPassword=""/>
      </Server>
      ...
      ```
      Once this element is added proxy server settings can be updated in the CTP Launcher GUI
6. Add CTP the anonymiser script
    * Copy CTP/scripts/DicomServiceAnonymizer.script to CTP/scripts/dicom-anonymizer-sender.script
    * Add the PROJECTID parameter to the list of parameters at the start of the file
        * `<p t="PROJECTID">my xnat project id</p>`
    * Change the PatientComments element 0010,4000 to set XNAT project routing info
        * `@always()@append(){Project:@param(@PROJECTID) Subject:@contents([0010,0010]) Session:@contents([0008,0050])}`
    * Review/set other parameters at the start of the file
        * PROFILENAME, eg. AIS-Clinical-Site-210604
        * DATEINC, eg. 0
        * PROJECTNAME, SITEID, SITENAME, TRIALNAME, TRIALSPONSOR as required
    * Optional: review script to check anonymisation settings are appropriate
7. Start CTP GUI
    ```
    java -jar Launcher.jar
    ```
8. Click the CTP "Start" button
9. Click the "CTP Home Page" button to open the Web UI
    * If the browser can't connect, check CTP is not already running, or try changing the Server port
10. Login 
    * Top RHS banner should show "Welcome admin"
11. Optional: click "User Manager" to change default usernames/passwords
12. Optional: click "DICOM Anonymizer" to view/edit anonymiser script
13. Unzip DCMTK and MrBrain dicom sample
14. Try sending an dicom to CTP using dcmtk
    ```
    cd dcmtk-3.6.5-win64-dynamic/bin
    dcmsend localhost 25055 ../../dicom_viewer_Mrbrain/MRBRAIN.DCM
    ```
15. Login to the XNAT server with an admin account to view Prearchive
    * Use "Upload" → "Go to prearchive"
    * DICOM should appear in "Receiving" status, with project id assigned from step 6
        * Optional: non-admin users need to search by subject/etc
    * Use Refresh to check when "Ready" or it disappears from list (as it has been routed to the project)
    * Debugging: use dcm2xml from DCMTK to check anonymised dicom file under CTP/roots/FileAfterAnonymization25055
16. Logout and login with the new XNAT user from step 1
17. Navigate to the project set in step 6
    * You should see the dicom listed as subject "1737775597"
18. Use subject "1737775597" → "MR Session" → "View Images" to view the uploaded image
19. Try a dicom send from the scanner using PC address and port 25055 (check windows firewall settings?)
20. Enable CTP as a Windows Service. Instructions [here](/docs/facility-guides/ctp/windows-service)

### Further information
If you need a different commit of CTP-installer
```
git clone https://github.com/johnperry/CTP
cd CTP/products
git checkout <commit> CTP-Installer.jar
```
If you need other AIS CTP config files
```
git clone https://github.com/Australian-Imaging-Service/configuration.git
cd configuration/CTP
```
CTP documentation links:

[MIRC CTP Wiki](http://mircwiki.rsna.org/index.php?title=MIRC_CTP)

[CTP DICOM Anonymizer](http://mircwiki.rsna.org/index.php?title=The_CTP_DICOM_Anonymizer)
