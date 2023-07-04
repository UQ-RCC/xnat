---
title: "Site anonymiser"
linkTitle: "Site anonymiser"
weight: 20
description: >
  Site anonymiser
---

HIRF and CAI data are anonymised on-site by default with the following protocols

## Modified Tags

| DICOM Tag                      | Original value | New value                                                     |
|--------------------------------|----------------|---------------------------------------------------------------|
| PatientBirthDate               | 10/12/2000     | 1/1/2000                                                      |
| PatientComments                | XXXXXXXX       | Project:Proj001 Subject:TEST_MR Session:TEST_MR-20210405T1220 |
| ReferringPhysicianName         | Proj001        | Proj001                                                       |
| PatientName                    | XXXXXXXX       | TEST_MR                                                       |
| PatientID                      | TEST_MR        | TEST_MR-20210405T1220                                         |

## Blanked Tags
| DICOM Tag                      |
|--------------------------------|
| AccessionNumber                |
| ImageComments                  |
| OperatorName                   |
| OtherPatientIDs                |
| AdditionalPatientHistory       |
| AdmittingDiagnosisDescription  |
| MedicalRecordLocator           |
| NameOfPhysicianReadingStudy    |
| Occupation                     |
| OtherPatientNames              |
| PatientBirthTime               |
| PerformingPhysicianName        |
| PhysicianOfRecord              |
| ReferringPhysicianAddress      |
| ReferringPhysicianPhoneNumbers |
