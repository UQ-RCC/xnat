---
title: "Anonymising Data"
linkTitle: "Anonymising Data"
weight: 50
description: >
  Anonymising Data
---

Dicomedit
: https://wiki.xnat.org/xnat-tools/dicomedit/dicomedit-6-3-language-reference

The Project level anonymiser uses a scripting syntax called DicomEdit  to modify, reassign or blank DICOM tags.
You can actually use this to create automated workflow for renaming DICOM metadata on datasets

The example in this screenshot basically replicates the behaviour in the HIRF onsite anonymiser for remapping the ReferringPhysicianName, PatientName and PatientID

You can use DICOMedit to enforce a particular naming and tagging scheme across your entire project this way.

If you have you’re wanting to use the Project level anonymiser, but unsure where to start with DICOMedit
I’d suggest getting in touch, we should be able to help you out.
