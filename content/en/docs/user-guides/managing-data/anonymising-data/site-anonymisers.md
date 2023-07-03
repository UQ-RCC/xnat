---
title: "Site anonymisers"
linkTitle: "Site anonymisers"
weight: 50
description: >
  Site anonymisers
---

HIRF and CAI data are anonymised on-site with the following protocols

## Blanked Tags
| DICOM Tag                     |
|-------------------------------|
|AccessionNumber                |
|ImageComments                  |
|OperatorName                   |
|OtherPatientIDs                |
|AdditionalPatientHistory       |
|AdmittingDiagnosisDescription  |
|MedicalRecordLocator           |
|NameOfPhysicianReadingStudy    |
|Occupation                     |
|OtherPatientNames              |
|PatientBirthTime               |
|PerformingPhysicianName        |
|PhysicianOfRecord              |
|ReferringPhysicianAddress      |
|ReferringPhysicianPhoneNumbers |

## Modified tags
| DICOM tag              | Example value                                               |
|------------------------|-------------------------------------------------------------|
| PatientBirthDate       | 1/1/2000                                                    |
| PatientComments        | Project:QUTRT Subject:TEST_MR Session:TEST_MR-20210908T1448 |
| ReferringPhysicianName | QUTRT                                                       |
| PatientName            | TEST_MR                                                     |
| PatientID              | TEST_MR-20210908T1448                                       |
