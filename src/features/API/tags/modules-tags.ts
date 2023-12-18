// Main Modules
const investigation = [];
const vital = ["Vitals"];
const clientTypes = ["ClientTypes"];
const visitTypes = ["VisitTypes"];
const ServicePoints = ["ServicePoints"];
const hivTestingReasons = ["HIVTestingReasons"];
const hivNotTestingReasons = ["HIVNotTestingReasons"];
const hts = ["HTSes"];
const chiefComplaints = ["ChiefComplaints"];
const treatmentPlan = ["TreatmentPlans"];

// Export tags
export const mainModuleTags = [
  ...investigation,
  ...vital,
  ...clientTypes,
  ...visitTypes,
  ...ServicePoints,
  ...hivTestingReasons,
  ...hivNotTestingReasons,
  ...hts,
  ...chiefComplaints,
  ...treatmentPlan,
];
