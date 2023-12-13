const EncounterTypeEnum = {
  MedicalEncounter: 1,
  PEP: 2,
  PrEP: 3,
  ART: 4,
  ARTIHPAI: 5,
  ARTFollowUp: 6,
  UnderFive: 7,
  TBScreening: 8,
  TBFollowUp: 9,
  ARTStableOnCare: 10,
  PediatricIHPAI: 11,
  PediatricFollowUp: 12,
  PediatricStableOnCare: 13,
  ARTPediatric: 14,
  VMMC: 15,
  Surgery: 16,
  NursingPlan: 17,
  Vital: 18,
  PreTransfusionVital: 19,
  IntraTransfusionVital: 20,
  ANCService: 21,
  ANCLabourAndDelivery: 22,
  ANCLabourAndDeliveryPMTCT: 23,
  PostnatalAdult: 24,
  PostnatalPediatric: 25,
  ANCFollowUp: 26,
  PostnatalPMTCT_Adult: 27,
  PostnatalPMTCT_Pediatric: 28,
  ANC_Initial_Already_On_ART: 29,
  ANC_1st_Time_On_ART: 30,
  ANC_Follow_up_PMTCT: 31,
  ANCLabourAndDeliverySummary: 32,
  FamilyPlanning: 33,
  Referral: 34,
  ANCDeliveryDischargeMother: 35,
  ANCDeliveryDischargeBaby: 36,
  MedicalEncounterIPD: 37,
  HTS: 38,
  Covax: 39,
  Covid: 40,
  BirthRecords: 41,
  DeathRecords: 42,
  Investigation: 43,
  Prescriptions: 44,
  Dispensations: 45,
};
export const EnumEncounterType = Object.freeze(EncounterTypeEnum);
export default Object.freeze(EncounterTypeEnum);
