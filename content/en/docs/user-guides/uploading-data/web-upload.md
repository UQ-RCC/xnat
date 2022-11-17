---
title: "Web Upload"
linkTitle: "Web Upload"
weight: 4
description: >
  Upload using XNAT compressed uploader
---

## Uploading DICOM datasets
{{% pageinfo color="primary" %}}
This is for uploading **de-identified DICOM** files using the uploader directly from the XNAT website
{{% /pageinfo %}}

1. De-identify DICOM on scanner or upload pc
2. Zip DICOM files into a zip file
3. Login to XNAT (see [Login to XNAT](/docs/user-guides/login-to-xnat/))
4. From the top panel, select **Upload &rarr; Images &rarr; Compressed Uploader**

![text](/docs/user-guides/uploading-data/upload-menu.png)

5. Specify the following options:
   - **Project**
   - **Destination**: Select **Prearchive**
   - **Choose file** to select zipped file with DICOMs

![text](/docs/user-guides/uploading-data/compressed-uploader.png)

6.	Click **Begin Upload**
  Wait for:
    - Upload percent bar to finish (**percent bar may not appear for small datasets) 
    - **Background processes** panel to appear on bottom right
    - Green tick on under **Upload extraction/review for archival**


![text](/docs/user-guides/uploading-data/upload-success.png)

{{% alert title="" color="warning" %}}
In case of **Background process** errors, expand panel using double arrows on bottom right for more details
![text](/docs/user-guides/uploading-data/upload-failure.png)
{{% /alert %}}


For further information refer to the [XNAT official guide on using the compressed image uploader](https://wiki.xnat.org/documentation/how-to-use-xnat/image-session-upload-methods-in-xnat/using-the-compressed-image-uploader)
