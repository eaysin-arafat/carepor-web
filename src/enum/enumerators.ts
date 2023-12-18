// enumerators form data table

export const EnumUserType = {
  1: "SystemAdministrator",
  2: "FacilityAdministrator",
  3: "Clinician",
};

export const EnumSex = {
  1: "Male",
  2: "Female",
};

export const EnumMaritalStatus = {
  1: "Single",
  2: "Married",
  3: "Widowed",
  4: "Divorced",
};

export const EnumUnrecordable = {
  1: "TooHigh",
  2: "TooLow",
  3: "Unknown",
};

export const EnumClientSource = {
  1: "Urban",
  2: "Rural",
};

export const EnumARTStatus = {
  1: "NotOnART",
  2: "OnART",
  3: "Unknown",
};

export const EnumYesNo = {
  1: "Yes",
  2: "No",
};

export const EnumYesNoUnknown = {
  1: "Yes",
  2: "No",
  3: "Unknown",
};

export const EnumHIVTestType = {
  1: "New",
  2: "Retest",
  3: "Confirmatory",
};

export const EnumTestedAs = {
  1: "Individual",
  2: "Couple",
  3: "Family",
  4: "Other",
};

export const EnumHIVTest = {
  1: "HIV_Determine",
  2: "HIV_Bioline",
  3: "HIV_DNA_PCR",
};

export const EnumHIVTestResult = {
  1: "Positive",
  2: "Negative",
  3: "Indeterminate",
  4: "Detectable",
  5: "Not_Detected",
};

export const EnumHIVTypes = {
  1: "HIV1",
  2: "HIV2",
  3: "HIV1_HIV2",
};

export const EnumPartnerHIVStatus = {
  1: "Positive",
  2: "Negative",
  3: "Intermediate",
  4: "Refusedtestorresult",
  5: "NeverTested",
  6: "Dont_know",
};

export const EnumReligiousDenomination = {
  1: "Christian",
  2: "Muslim",
  3: "Hindu",
  4: "Buddhist",
  5: "Jewish",
  6: "None",
};

export const EnumInformationType = {
  1: "PastDrugHistory",
  2: "AdmissionHistory",
  3: "SurgicalHistory",
  4: "FamilyMedicalHistory",
  5: "AlcoholandSmokingHabits",
  6: "SiblingHistory",
};

export const EnumOperationType = {
  1: "Emergency",
  2: "Elective",
};

export const EnumCaCxResult = {
  1: "Normal",
  2: "Abnormal",
  3: "NotSure",
};

export const EnumSeverity = {
  1: "Mild",
  2: "Intermediate",
  3: "Severe",
  4: "Unknown",
};

export const EnumUserAccessModule = {
  1: "Clients",
  2: "Hts",
  3: "Vitals",
  4: "Users",
  5: "FacilityAdministration",
  6: "NursingPlan",
  7: "Surgery",
  8: "ANCService",
  9: "MedicalEncounter",
  10: "PEP",
  11: "PrEP",
  12: "ARTIHPAI",
  13: "ARTFollowUp",
  14: "UnderFive",
  15: "TBScreening",
  16: "TBFollowUp",
  17: "ARTStableOnCare",
  18: "PediatricIHPAI",
  19: "PediatricFollowUp",
  20: "PediatricStableOnCare",
  21: "ARTPediatric",
  22: "VMMC",
  23: "PreTransfusionVital",
  24: "IntraTransfusionVital",
  25: "ANCLabourAndDelivery",
  26: "ANCLabourAndDeliveryPMTCT",
  27: "PostnatalAdult",
  28: "PostnatalPediatric",
  29: "PostnatalPMTCT",
};

export const EnumGeneralCondition = {
  1: "Good",
  2: "Stable",
  3: "Critical",
};

export const EnumPallor = { 1: "Nil", 2: "Mild", 3: "Moderate", 4: "Severe" };

export const EnumGrade = {
  1: "Nil",
  2: "OnePlus",
  3: "TwoPlus",
  4: "ThreePlus",
  5: "FourPlus",
};

export const EnumPresentNotPresent = {
  1: "Present",
  2: "NotPresent",
};

export const EnumIsSuccessfulDelivery = {
  1: "Yes",
  0: "No",
};

export const EnumTypeOfDelivery = {
  1: "VaginalDelivery",
  2: "CesarianSection",
  3: "VacuumExtraction",
};

export const EnumEyeScore = {
  4: "Spontaneous",
  3: "Verbal",
  2: "Pain",
  1: "Response",
};

export const EnumVerbalScore = {
  1: "Response",
  2: "Speech",
  3: "InappropriateWords",
  4: "Confused",
  5: "Oriented",
};

export const EnumMotorScore = {
  1: "Response",
  2: "ExtensionToPain",
  3: "FlexionToPain",
  4: "WithdrawToPain",
  5: "PainfulStimulus",
  6: "Commands",
};

export const EnumDiagnosisType = {
  1: "NTG",
  2: "ICD11",
};

export const EnumConditionType = {
  1: "ChronicCondition",
  2: "NonChronicCondition",
};

export const EnumCertainty = {
  1: "Confirmed",
  2: "Suspected",
  3: "RuleOut",
  4: "RuledOut",
};

export const EnumInteractionType = {
  1: "OPD",
  2: "IPD",
};

export const EnumPiority = {
  1: "Regular",
  2: "Urgent",
  3: "Emergency",
};
export type TypePiority = keyof typeof EnumPiority;

export const EnumOrigin = {
  1: "From Within 12 km",
  2: "From More Then Within 12 km",
  3: "From Within District",
  4: "From OutSide District",
  5: "From Out Side Zambia",
  6: "Unknown",
};

// check
export const EnumBoolYesNo = {
  true: "Yes",
  false: "No",
};

export const EnumInformantRelationship = {
  1: "Spouse",
  2: "Own Child",
  3: "Step Child",
  4: "Adopted Child",
  5: "Grand Child",
  6: "Brother Sister",
  7: "Cousin",
  8: "Niece Nephew",
  9: "Brother Sister In Law",
  10: "Parent In Law",
  11: "Maidnanny House Servant",
  12: "Guardian",
  13: "Other Relationship",
};

export const EnumGuardianRelationship = {
  1: "Spouse",
  2: "OwnChild",
  3: "Stepchild",
  4: "AdoptedChild",
  5: "GrandChild",
  6: "BrotherSister",
  7: "Cousin",
  8: "NieceNephew",
  9: "BrotherSisterInlaw",
  10: "ParentInlaw",
  11: "MaidNannyHouseServant",
  12: "Guardian",
  13: "OtherRelationship",
};

export const EnumWhereDeathOccured = {
  1: "Other",
  2: "OtherFacility",
  3: "Clinic",
  4: "Hospital",
  5: "Home",
};

export const EnumBirthOutcome = {
  1: "Alive",
  2: "StillBorn",
  3: "Died",
};

export const EnumOtherFeedingOption = {
  1: "ExclusiveBreast",
  2: "ExclusiveAlternative",
  3: "SupplementalyFood",
  4: "MixedFeeding",
  5: "Complimentary",
  6: "MixedBasedFeed",
  7: "Other",
};

export const EnumReasonForMissing = {
  1: "Forgot",
  2: "SideEffects",
  3: "AwayFromHome",
  4: "Illness",
  5: "MedicinesFinished",
  6: "Other",
};

export const EnumYesNoNotApplicable = {
  1: "Yes",
  2: "No",
  3: "NotApplicable",
};

export const EnumRoute = {
  1: "Oral",
  2: "IV",
  3: "Other",
};

export const EnumReasonClientRefusedForVaccination = {
  1: "Unknown",
  2: "Sick",
  3: "Other",
};

export const EnumSourceOfAlert = {
  1: "CallCenter",
  2: "HealthFacility",
  3: "Community",
  4: "MediaScanning",
};

export const EnumExposureRisks = {
  1: "Contactofconfirmedcase",
  2: "Attendedmassgathering",
  3: "Aeaactivelyreportingcases",
  4: "None",
};

export const EnumCovidComorbidCondition = {
  1: "Pregnancy",
  2: "Diabetes",
  3: "Cardiacdisease",
  4: "Hypertension",
  5: "COPD",
  6: "ChronicKidneyDisease",
  7: "ChronicLiverDisease",
  8: "ImmuneSystemCompromised",
  9: "Otherrespiratoryillness",
  10: "None",
};

export const EnumResultType = {
  1: "Descriptive",
  2: "Numeric",
  3: "Options",
};

export const EnumIsResultNormal = {
  1: "Normal",
  2: "Abnormal",
};

export const EnumIsCauseType = {
  1: "MainCauseOfDeath",
  2: "ContributingCauseOfDeath",
};

export const EnumRegimenFor = {
  1: "ART",
  2: "TB",
};

export const EnumTimeUnit = {
  1: "Days",
  2: "Weeks",
  3: "Months",
};

export const EnumTypeOfEntry = {
  1: "NewPatient",
  2: "TransferIn",
  3: "SilentTransfer",
};

export const EnumTypeOfEntryWithoutNew = {
  1: "TransferIn",
  2: "SilentTransfer",
};

export const EnumHIVResult = {
  1: "Yes",
  2: "No",
};

export const EnumFamilyMemberType = {
  1: "Father",
  2: "Mother",
  3: "Child",
  4: "Grandparent",
  5: "Uncle",
  6: "Aunty",
  7: "Spouse",
  8: "Other",
};

export const EnumNextOfKinType = {
  1: "Provider",
  2: "Supporter",
  3: "Guardian",
  4: "PatientOther",
  5: "Neighbor",
  6: "Parent",
  7: "Other",
};

export const EnumPatientsStatus = {
  1: "SentToAnotherClinic",
  2: "Inactivated",
  3: "StoppedART",
  4: "Reactivated",
  5: "Died",
};

export const EnumReferralReason = {
  1: "HIVCare",
  2: "STITreatment",
  3: "PatientCare",
  4: "PatientRequest",
  5: "DischargeFromFacility",
  6: "ComplicatedCare",
  7: "TransitionToAdultCare",
  8: "PenileAbnormalities",
  9: "Other",
};

export const EnumReasonForInactive = {
  1: "LostToFollowUp",
  2: "PatientIsHIVNegative",
  3: "Other",
};

export const EnumReasonForStoppingART = {
  1: "UnableToTolerateARV",
  2: "PatientOrCareGiverRequested",
  3: "ClientIsNonAdherentToARTDespiteRepetedCounselling",
  4: "ARVNonAvailable",
  5: "PatientDoesnotHaveReliableCareGiver",
  6: "ClientHasSeriousDrugToxicity",
  7: "PatientHasConditionThatPrecludesOralIntake",
  8: "PatientIsNegative",
  9: "ReligiousBelief",
  10: "Other",
};

export const EnumReasonForReactivation = {
  1: "RestartingARTAfterHavingBeenLostToFollowUp",
  2: "MoveBackToCatchmentArea",
  3: "Other",
};

export const EnumPregnancyRisk = {
  1: "HighBloodPressure",
  2: "DepressionAnxiety",
};

export const EnumBreastFeedingRisk = {
  1: "A",
  2: "B",
  3: "C",
};

export const EnumCounsellingType = {
  1: "EAC",
  2: "Nutrition",
  3: "Other",
};

export const EnumVisitPurposes = {
  1: "BuddyPickUp",
  2: "PatientPresent",
};

export const EnumClinicalMonitoring = {
  1: "NewStageCondition",
  2: "RecurrentStage3Condition",
  3: "RecurrentStage2Condition",
};

export const EnumImmunologicMonitoring = {
  1: "CD4CountBelow350",
  2: "CD4CountBelow200",
};

export const EnumVirologicMonitoring = {
  1: "ViralLoadGreaterThen1000",
  2: "ViralLoad20To1000",
  3: "ViralLoadSmallerThen20",
  4: "TargetNotDetected",
};
//++

export const EnumStableOnCareStatus = {
  1: "VirallySuppressedLast12Months",
  2: "OnARTGreaterThen1Year",
  3: "NOAdverseDrugEvents",
  4: "NoOlsOrPregnancy",
};

export const EnumCurrentlyHaveTB = {
  1: "Yes",
  2: "No",
  3: "IDontKnow",
};

export const EnumHowTBDiagnosed = {
  1: "Microscopy",
  2: "Xray",
  3: "XpertMTB",
  4: "XpertRIF",
  5: "DrugSusceptibility",
  6: "LF_LAM",
};

export const EnumKindOfTB = {
  1: "Pulmonary",
  2: "Extrapulmonary",
};

export const EnumWasATTCompleted = {
  1: "Yes",
  2: "No",
  3: "IDontKnow",
};

export const EnumMonthOfTBCourse = {
  1: "SampleMonth1",
  2: "SampleMonth2",
};

export const EnumRecencyType = {
  1: "ChildNotExposed",
  2: "ChildExposed",
  3: "StatusUnknown",
};

export const EnumChildExposureStatus = EnumRecencyType;

export const EnumFeedingCode = {
  1: "ExclusiveBreastfeeding",
  2: "ExclusiveAlternativeFormula",
  3: "AnimalMilk",
  4: "MixedFeeding",
  5: "ContinuedBreastfeeding",
  6: "MilkBasedFeed",
  7: "Complimentaryfeeding",
  8: "Other",
};

export const EnumStatus = {
  1: "MildMalnourishment",
  2: "ModerateMalnourishment",
  3: "SevereMalnourishment",
  4: "NormalNutrition",
  5: "MildObese",
  6: "ModerateObese",
  7: "SevereObese",
};

export const EnumUnderWeight = {
  1: "Normal",
  2: "ModerateUnderweight",
  3: "SevereUnderweight",
};

export const EnumObesity = {
  1: "Normal",
  2: "ModerateWasting",
  3: "SevereWasting",
  4: "OverweightOrObese",
};

export const EnumStunting = {
  1: "Normal",
  2: "ModerateStunting",
  3: "SevereStunting",
};

export const EnumMalnutritionOutcome = {
  1: "NA",
  2: "Admitted",
  3: "Cured",
  4: "Defaulted",
};

export const EnumExposerReason = {
  1: "HIVPrEP",
  2: "PEP",
  3: "PMTCT",
  4: "ART",
};

export const EnumDosesMissed = {
  1: "FollowRegularPharmacySchedule",
  2: "FollowMonthlyPharmacySchedule",
  3: "FollowWeeklyAppointmentVisits",
};

export const EnumReducePharmacyVisit = {
  1: "Monthly",
  2: "BiMonthly",
  3: "ThreeMonth",
};

export const EnumTreatmentOutcome = {
  1: "Cured",
  2: "Died",
  3: "Completed",
  4: "NotEvaluated",
  5: "RxFailed",
  6: "LostToFollowUp",
};

export const EnumDotPlan = {
  1: "Clinic",
  2: "Volunteer",
  3: "Relative",
  4: "NoDotPlan",
};

export const EnumDiseaseSite = {
  1: "PTB",
  2: "EPTB",
  3: "Both",
};

export const EnumTBType = { 1: "Susceptible", 2: "MDR", 3: "DR" };

export const EnumSusceptiblePTType = {
  1: "New",
  2: "TreatmentAfterLossToFollowUp",
  3: "Relapse",
  4: "Failure",
  5: "TransferIn",
  6: "OtherPreviouslyTreatmentWithoutKnowOutcomeStatus",
};

export const EnumTBSusceptibleRegimen = {
  1: "RHZE",
  2: "TwoRHZEPer4RH",
  3: "TwoRHZEPer10RH",
  4: "TwoRHZPerEPer4RH",
  5: "TwoRHZPerEPer10RH",
};

export const EnumMDRDRRegimenGroup = {
  1: "New",
  2: "Relapse",
  3: "TreatmentAfterLossToFollowUp",
  4: "TreatmentAfterFailureOfFirstTreatment",
  5: "TreatmentAfterFailureOfReTreatement",
  6: "TransferIn",
  7: "OtherPreviouslyTreatmentWithoutKnowOutcomeStatus",
};

export const EnumPhase = {
  1: "ContinueInitialPhase",
  2: "StartContinuationPhase",
};

export const EnumMDRDRRegimen = {
  1: "FourToSixKmMfxEtoHHD5MfxCfzEZ",
  2: "EightZKmLfxEtoCs12ZLfxEtoCs",
  3: "OtherRegimen",
};

export const EnumArtPlan = {
  1: "StartART",
  2: "ContinueART",
  3: "ModifyART",
  4: "StopART",
  5: "ReferToNextLevelOfCare",
  6: "SwitchToNextLevelofART",
};

export const EnumTPTPlan = {
  1: "ProvideTPT",
  2: "ContinueTPT",
  3: "DiscontinueTPT",
};

export const EnumCTXPlan = {
  1: "ProvideCTX",
  2: "ContinueCTX",
  3: "DiscontinueCTX",
};

export const EnumEACPlan = {
  1: "ProvideEAC",
  2: "ContinueEAC",
  3: "DiscontinueEAC",
};

export const EnumDSDPlan = {
  1: "StartinDSDCommunityBased",
  2: "StartInDSDFamilyBased",
  3: "ContinueInDSD",
  4: "TransfertoMainstream",
};

export const EnumFluconazolePlan = {
  1: "ProvideFluconazolePreEmptiveTherapy",
  2: "ContinueFluconazolePreEmptiveTherapy",
  3: "DiscontinueFluconazolePreEmptiveTherapy",
};

export const EnumAdvancedHIVCare = {
  1: "DoesPatientHaveAdvancedHIVDisease",
  2: "CrAgTestDone",
  3: "LFLAMTestDone",
  4: "CXR",
};

export const EnumFeedback = {
  1: "TakenWithPresence",
  2: "TakenWithoutPresence",
  3: "NotTaken",
};

export const EnumPresentedHIVStatus = {
  1: "Positive",
  2: "Negative",
  3: "ExposedInfant",
  4: "Unknown",
};

export const EnumPositiveNegative = {
  1: "Positive",
  2: "Negative",
};

export const EnumMandibleSize = {
  1: "Normal",
  2: "Receeding",
};

export const EnumTongueSize = {
  1: "Normal",
  2: "Large",
};

export const EnumWhenMotherTakenARV = {
  1: "Antenatal",
  2: "Intrspartum",
  3: "Postpartum",
};

export const EnumDuration = {
  1: "Minutes",
  2: "Hours",
  3: "Days",
  4: "Weeks",
  5: "Months",
  6: "Years",
};

export const EnumHowLongChildTakenARV = {
  1: "ThroughoutBreastfeeding",
  2: "SixWeeks",
  3: "Other",
};

export const EnumStatusCode = {
  1001: "Vital",
  2001: "HTS",
  2002: "ClientTypes",
  2003: "VisitTypes",
  2004: "ServicePoints",
  2005: "HIVTestingReasons",
  2006: "HTSReferredTo",
  2007: "HTSReferral",
  2008: "RiskAssessments",
  2009: "HIVNotTestingReasons",
  2010: "HIVRiskFactors",
};

export const EnumRegionalType = {
  1: "Regional",
  2: "General",
};

export const EnumLocalMedicineType = { 1: "Spinal", 2: "Epidural" };

export const EnumTypeofAnaesthesia = {
  1: "Premedication",
  2: "Induction",
  3: "Maintenance",
  4: "Analgesia",
  5: "Other",
};

export const EnumProcedureType = {
  1: "DorsalSlit",
  2: "Device",
  3: "Other",
};

export const EnumSutureType = {
  1: "Chromic",
  2: "Vicryl",
  3: "Other",
};

export const EnumLevelOfAnesthesia = {
  1: "Cervical",
  2: "Thoracic",
  3: "Lumbar",
};
// PregnancyOutcomes

export const EnumPregnencyConclidedReason = {
  1: "MaternalDeath",
  2: "EarlyTermination",
  3: "ElectiveAbortion",
  4: "SpontaneousCompleteAbortion",
  5: "SpontaneousIncompleteAbortion",
  6: "SpontaneousMissedAbortion",
  7: "SpontaneousSepticAbortion",
  8: "SpontaneousThreatenedAbortion",
  9: "SpontaneousInevitableAbortion",
  10: "DeliveredAtOtherFacilities",
  11: "Others",
};

export const EnumSyphilisTestType = {
  1: "SyphilisRDT",
  2: "RPR",
};

export const EnumBreastFeedingChoice = { 1: "EBF", 2: "ERF" };

export const EnumMetarnalOutcome = {
  1: "Good",
  2: "Fair",
  3: "Ill",
  4: "Critical",
};

export const EnumPregnancyConclusion = {
  1: "EarlyTermination",
  2: "Ectopic",
  3: "FullTerm",
  4: "MolarPregnancy",
  5: "PseudoPregnancy",
};

export const EnumEarlyTerminationReason = {
  1: "ElectiveAbortion",
  2: "SpontaneousCompleteAbortion",
  3: "SpontaneousIncompleteAbortion",
  4: "SpontaneousMissedAbortion",
  5: "SpontaneousSepticAbortion",
  6: "SpontaneousThreatenedAbortion",
  7: "SpontaneousInevitableAbortion",
};

export const EnumDeliveryMethod = {
  1: "EarlyTermination",
  2: "SVD",
  3: "BRE",
  4: "VAC",
  5: "FOR",
  6: "CeaserianSection",
};

export const EnumPueperiumOutcome = {
  1: "Normal",
  2: "Anaemia",
  3: "Fever",
  4: "Hypertension",
  5: "Infection",
};

export const EnumChildDetailBirthOutcome = {
  1: "Alive and Healthy",
  2: "Alive but Chronically Ill",
  3: "Stillborn",
  4: "Died Shortly After Birth",
  5: "Died Under Five",
  6: "Died After Five",
};

export const EnumBloodGroup = {
  1: "A Positive",
  2: "A Negative",
  3: "B Positive",
  4: "B Negative",
  5: "AB Positive",
  6: "AB Negative",
  7: "O Positive",
  8: "O Negative",
};

export const EnumRHSensitivity = {
  1: "RhesusSensitized",
  2: "RhesusNonSensitized",
};

export const EnumScoring = {
  1: "Positive",
  2: "Negative",
  3: "Indeterminate",
};

export const EnumAlbumin = {
  1: "Nil",
  2: "Trace",
  3: "Positive",
  4: "TwoPositive",
  5: "ThreePositive",
  6: "FourPositive",
};

export const EnumPresentation = {
  1: "Cephalic",
  2: "Breech",
  3: "Undefined",
};

export const EnumEngaged = { 1: "Engaged", 2: "NotEngaged" };

// FetalPresentation

export const EnumLie = {
  1: "Transverse",
  2: "Longitudinal",
  3: "Oblique",
  4: "Undefined",
};

export const EnumFetalHeart = { 1: "FMF", 2: "Heard", 3: "NotHeard" };

export const EnumConstraction = {
  1: "Regular",
  2: "Irregular",
};

export const EnumPosition = {
  1: "A",
  2: "B",
  3: "C",
};

export const EnumMalariaDose = {
  1: "ITNIssued",
  2: "ITNUsed",
  //   3: "ITNUsed",
};

export const EnumAmeniaDose = {
  1: "Screened",
  2: "IronGiven",
  3: "FeSO4Given",
};

export const EnumTetanusDose = {
  1: "PregnancyFullyTTProtected",
  2: "TTDoseGiven",
  3: "IndicateDoseNo",
};

export const EnumSyphilisDose = {
  1: "RPRTestDone",
  2: "TestPositive",
  3: "BenzPenGiven",
};

export const EnumHepatitiesBDose = {
  1: "HepBTesDone",
  2: "TestPositive",
  3: "Treated",
};

export const EnumPregnancyConfirmationWay = {
  1: "Examination",
  2: "PregnancyTest",
  3: "Ultrasound",
  4: "FetalMovements",
};

export const EnumVisitDetailsType = {
  1: "Within48hrs",
  2: "TwoToSixdays",
  3: "SevenTo42days",
  4: "After42days",
  5: "Fourteenweeks",
  6: "SixMonths",
  7: "NineMonths",
  8: "TwelveMonths",
  9: "EighteenMonths",
  10: "Other",
};

export const EnumFeeding = {
  1: "Well",
  2: "Poor",
  3: "NotFeeding",
};

export const EnumVulva = {
  1: "Normal",
  2: "Abnormal",
};

export const EnumPerineum = {
  1: "Intact",
  2: "Tear",
};

export const EnumEyesCondition = {
  1: "Dischargeb",
  2: "Jaundice",
  3: "Cataracts",
  4: "Other",
  5: "Normal",
};

export const EnumCordStumpCondition = {
  1: "Infected",
  2: "Granuloma",
  3: "Other",
  4: "Normal",
};

export const EnumTBScreening = {
  1: "SuspectedTB",
  2: "KnownTB",
  3: "TBDiagnosed",
  4: "NoTB",
};

export const EnumBirthType = {
  1: "Single",
  2: "Twins",
  3: "Triplets",
  4: "More",
};

export const EnumDeliveredType = {
  1: "DeliveredByClinician",
  2: "DeliveredByTBA",
};

export const EnumDeliveryLocation = {
  1: "Home",
  2: "HealthFacility",
};

export const EnumDeliveredBy = {
  1: "Doctor",
  2: "Midwife",
  3: "EnrolledMidwife",
  4: "Nurse",
  5: "RegisteredNurse",
  6: "EnrolledNurse",
  7: "Licentiate",
};

export const EnumTreatments = {
  1: "DextroseFivePercent",
  2: "RingersLactate",
  3: "NormalSaline",
  4: "DextroseNormalSaline",
  5: "Methergine",
  6: "Dextran70",
};

export const EnumConditionOfUterus = {
  1: "NotAssessed",
  2: "Normalcontracted",
  3: "AbnormalBoggy",
  4: "AbnormalOther",
};

export const EnumTearDegree = {
  1: "First",
  2: "Second",
  3: "Third",
  4: "Fourth",
};

export const EnumMethods = {
  1: "Formula",
  2: "Breastfeeding",
  3: "Breastfed1hr",
  4: "BreastfeedingWell",
};

export const EnumPerinatalProblems = {
  1: "CongenitalProblems",
  2: "PrePostMaturity",
  3: "LowApgarScore",
};

export const EnumTreatmentsOfPPH = {
  1: "BimanualCompression",
  2: "Medication",
  3: "BloodTransfusion",
  4: "Fluids",
  5: "Surgery",
};

export const EnumPlacenta = {
  1: "ManualRemoval",
  2: "ControlledCordTraction",
  3: "UterineMassage",
  4: "ProvisionOfOxytocin",
};

export const EnumAbnormalities = {
  1: "CNSSpinalBifidia",
  2: "CNSAnencephaly",
  3: "CardiacPDA",
  4: "SeptalASD",
  5: "SeptalVSD",
  6: "Exopholus",
  7: "TalipesUndefinedClubFoot",
  8: "Polydactyly",
  9: "CleftPalate",
  10: "CleftLip",
  11: "FalseTeeth",
  12: "ErbPalsy",
  13: "InperforateAnus",
  14: "GenitalAbnormalities",
};

export const EnumInjuries = {
  1: "SkullFracture",
  2: "FractureClavicle",
  3: "FractureUpperLimbs",
  4: "FractureLowerLimbs",
  5: "BirthAsphyxia",
  6: "Septicemia",
  7: "InstrumentalDelivery",
  8: "OtherInjury",
};

export const EnumInterventions = {
  1: "Antibiotics",
  2: "Augmentation",
  3: "Decapitation",
  4: "InductionofLabor",
  5: "SeizuireProphylaxis",
  6: "Symphysiotomy",
  7: "VaginalWash",
  8: "VersionAndExtraction",
};

export const EnumDeliveryComplications = {
  1: "AbnormalBleeding",
  2: "AbnormalPresentation",
  3: "CordProlapse",
  4: "RetainedPlacenta",
  5: "MaternalDeath",
  6: "FetalDistress",
  7: "ProlongedLabor",
  8: "ObstructedLabor",
  9: "Eclampsia",
  10: "PreEclampsia",
};

export const EnumApgarTimeSpan = {
  1: "OneMIN",
  2: "FiveMIN",
  3: "TenMIN",
};

export const EnumAppearance = {
  1: "CyanoticPerPaleAllOver",
  2: "PeripheralCyanosisOnly",
  3: "Pink",
};

export const EnumPulses = {
  1: "Zero",
  2: "SmallerThenHundred",
  3: "HumdredToHundredFourty",
};

export const EnumGrimace = {
  1: "NoResponsetoStimulation",
  2: "GrimaceOrWeakCryWhenStimulated",
  3: "CryWhenStimulated",
};

export const EnumActivity = {
  1: "Floppy",
  2: "SomeFlexion",
  3: "WelFlexedAndResisting",
};

export const EnumRespiration = {
  1: "Apneic",
  2: "SlowIrregularBreathing",
  3: "StrongCry",
};

export const EnumPeriuneums = {
  1: "Episiotomy",
  2: "Sutured",
  3: "AnteriorPerineumTear",
  4: "PosteriorPerineumTear",
  5: "VaginalTear",
  6: "CervicalTear",
  7: "Other",
};

export const EnumPregnancyIntension = {
  1: "Wants to Become Pregnant",
  2: "Does Not Intend to Get Pregnant",
  3: "Unsure or Undecided About Pregnancy Intention",
};

export const EnumReasonForFollowup = {
  1: "Stop Contraception",
  2: "Switch Method",
  3: "Issue and Concerns - Method Failure",
  4: "Continuation",
  5: "Implant Removal",
  6: "IUD Removal",
};

export const EnumReasonForStopping = {
  1: "SesireForPregnancy",
  2: "ReportedFailure",
};

export const EnumPueperalCondition = {
  1: "Normal",
  2: "Anemic",
  3: "Fever",
  4: "HyperTension",
  5: "Infected",
};

export const EnumPerineumCondition = {
  1: "Intact",
  2: "Swollen",
  3: "Hematoma",
  4: "Infected",
};

export const EnumVaginalMuscleTone = { 1: "Strong", 2: "Weak" };

export const EnumCervixColour = { 1: "Pink", 2: "Bluish" };

export const EnumCervicalConsistency = { 1: "Soft", 2: "Firm", 3: "Other" };

export const EnumUterusPosition = { 1: "Antroverted", 2: "Retroverted" };

export const EnumNormalAbnormal = { 1: "Normal", 2: "Abnormal" };

export const EnumReasonOfNotPregnant = {
  1: "LastMenstrualBleedingPast7Days",
  2: "AbstainedIntercourseNormalMensesDeliveryMiscarriageAbortion",
  3: "ConsistentlyCorrectlyReliableContraceptive",
  4: "GaveBirthLast4Weeks",
  5: "GaveBirthLessThan6MonthsFullyNearlyBreastfeedingAmenorrhoeic",
  6: "MiscarriageAbortionPast7Days",
  7: "MiscarriageAbortionPast12Days",
  8: "ReasonablyCertainWomanNotPregnant",
};

export const EnumFPMethodPlan = {
  1: "StopUsingMethod",
  2: "ContinueWithMethod",
  3: "SwitchMethod",
};

export const EnumFPMethodPlanRequest = {
  1: "CopperBearingIntrauterineDeviceCuIUD",
  2: "LevonorgestrelIntrauterineDeviceLNGIUD",
  3: "EtonogestrelETGOneRod",
  4: "LevonorgestrelLNGTwoRod",
  5: "DMPAIM",
  6: "DMPASC",
  7: "NorethisteroneEnanthateNETEN",
  8: "ProgestogenOnlyPillsPOPs",
  9: "CombinedOralContraceptivesCOCs",
  10: "CombinedContraceptivePatch",
  11: "CombinedContraceptiveVaginalRingCVR",
  12: "ProgesteroneReleasingVaginalRingPVR",
  13: "LactationalAmenorrheaMethodLAM",
  14: "MaleCondoms",
  15: "FemaleCondoms",
  16: "EmergencyContraceptivePillsECPs",
  17: "FertilityAwarenessBasedMethodsFAB",
  18: "MaleSterilization",
  19: "Withdrawal",
  20: "None",
};

export const EnumFPProvidedPlace = {
  1: "CU_IUD",
  2: "LNG_IUD",
  3: "ETG",
  4: "LNG",
  5: "DMPA_IM",
  6: "DMPA_SC",
  7: "Noresthisterone",
  8: "POPs",
  9: "COCs",
  10: "COCOP",
  11: "CVR",
  12: "PVR",
  13: "LAM",
  14: "Male_Condom",
  15: "Female_Condom",
  16: "ECPs",
  17: "FAB",
  18: "MaleSTR",
  19: "FemaleSTR",
  20: "Withdrawal",
  21: "NoMethod",
};

export const EnumClassifyFPMethod = {
  1: "Condition_For_NoRestriction",
  2: "Condition_For_Advantages_Method",
  3: "Condition_For_Theoretical_Risk",
  4: "Condition_For_Represents_Unacceptable",
};

export const EnumFamilyPlans = {
  1: "Accept",
  2: "Caution",
  3: "Delay",
  4: "Special",
};

export const EnumReasonForNoPlan = {
  1: "ProvidedOnSite",
  2: "Referral",
  3: "HomeSelfAdministered",
};

export const EnumClientNotReceivePrefferedOption = {
  1: "OutOfStockMethod",
  2: "OutOfStockEquipmentSupplies",
  3: "HealthWorkerSkillMismatch",
  4: "ClientRequiresReferral",
};

export const EnumBackupMethodUsed = {
  1: "MaleCondom",
  2: "FemaleCondom",
  3: "Abstinence",
  4: "EmergencyContraceptivePillsECPs",
};

export const EnumReferredby = {
  1: "ExternalFacility",
  2: "CommunityBasedAgent",
  3: "OtherClinicalDepartment",
  4: "Spouse",
  5: "Friend",
};

export const EnumClientStaysWith = {
  1: "Parents",
  2: "Siblings",
  3: "ExtendedFamily",
  4: "Partner",
  5: "Friend",
  6: "NoOne",
};

export const EnumCommunicationPreference = {
  1: "SMS",
  2: "VoiceCall",
  3: "ClientMail",
};

export const EnumAlternativeContact = {
  1: "NextOfKin",
  2: "Parent",
  3: "Guardian",
  4: "Neighbor",
  5: "Sibling",
};

export const EnumPatientType = {
  1: "Referral",
  2: "SelfReferred",
  3: "Scheme",
  4: "Exempt",
};

export const EnumReferralType = {
  1: "Internal",
  2: "External",
};

export const EnumReasonForVisit = {
  1: "New",
  2: "FollowUp",
  3: "Restarted",
  4: "EmergencyContraception",
};

export const EnumEpisiotomyCondition = {
  1: "Intact",
  2: "Swollen",
  3: "Hematoma",
  4: "Infected",
  5: "Other",
};

export const EnumYesNoOther = {
  1: "Yes",
  2: "No",
  3: "Other",
};

export const EnumModules = {
  1: "Vitals",
  2: "HTS",
};

export const EnumPlans = {
  1: "Start",
  2: "DontStart",
  3: "Stop",
};

export const EnumBreastFeedingType = {
  1: "EBF",
  2: "MixedFeeding",
};

export const EnumLochia = {
  1: "Lubra",
  2: "Serosa",
  3: "Alba",
  4: "Abnormal",
};

export const EnumClientPreferences = {
  1: "HighlyEffective",
  2: "STIPrevention",
  3: "NoHormones",
  4: "RegularBleeding",
  5: "Privacy",
  6: "ClientControlled",
};

export const EnumFrequencyType = {
  1: "TimeInterval",
  2: "FrequencyInterval",
};

export const EnumTestResult = {
  1: "Reactive",
  2: "NonReactive",
};
