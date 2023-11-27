import { isDateInFuture } from "@/lib/helpers/date-helpers";

export const htsCreateValidator = (hts) => {
  let error = {};

  // Personal Info Check
  if (!hts?.clientSource) error.clientSource = "Required";
  if (!hts?.clientTypeId) error.clientTypeId = "Required";
  if (!hts?.visitTypeId) error.visitTypeId = "Required";
  if (!hts?.servicePointId) error.servicePointId = "Required";
  if (!hts?.hivTestingReasonId) error.hivTestingReasonId = "Required";
  if (!hts?.hasCounselled) error.hasCounselled = "Required";
  if (!hts?.hasConsented) error.hasConsented = "Required";

  // last test date and last test result
  if (hts?.lastTestResult && !hts?.lastTested) error.lastTested = "Required";
  if (hts?.lastTested && !hts?.lastTestResult)
    error.lastTestResult = "Required";
  if (hts?.lastTested && hts?.lastTestResult) {
    if (isDateInFuture(hts?.lastTested))
      error.lastTested = "Cannot be in future";
  }

  // partner's last test date and last test result
  if (hts?.partnerHIVStatus && !hts?.partnerLastTestDate)
    error.partnerLastTestDate = "Required";
  if (hts?.partnerLastTestDate && !hts?.partnerHIVStatus)
    error.partnerHIVStatus = "Required";
  if (hts?.partnerLastTestDate && hts?.partnerHIVStatus) {
    if (isDateInFuture(hts?.partnerLastTestDate))
      error.partnerLastTestDate = "Cannot be in future";
  }

  // consent obtained
  if (hts?.hasConsented == 2) {
    if (!hts?.notTestingReason && !hts?.hivNotTestingReasonId)
      error.notTestingReason = "Select reason for not testing or enter reason";
  }

  // Pretest Assessment

  if (hts?.hasConsented == 1) {
    if (!hts?.determineTestResult) error.determineTestResult = "Required";

    if (!hts?.testNo) error.testNo = "Required";

    if (!hts?.isDNAPCRSampleCollected)
      error.isDNAPCRSampleCollected = "Required";

    if (!hts?.sampleCollectionDate) error.sampleCollectionDate = "Required";
    else if (isDateInFuture(hts?.sampleCollectionDate))
      error.sampleCollectionDate = "Cannot be in future";

    if (!hts?.isResultReceived) error.isResultReceived = "Required";

    if (!hts?.consentForSMS) error.consentForSMS = "Required";

    // determine and bioline and hiv status
    if (hts?.determineTestResult == 1 && !hts?.biolineTestResult)
      error.biolineTestResult = "Required";
    if (
      hts?.determineTestResult == 1 &&
      hts?.biolineTestResult == 1 &&
      !hts?.hivType
    )
      error.hivType = "Required";
  }

  return {
    error,
    isValid: Object.keys(error).length === 0,
  };
};

// lastTestResult: "",
// partnerHIVStatus: "",
// biolineTestResult: "",
// hivType: "",

// hasConsented: false,
// hasCounselled: "",
// isDNAPCRSampleCollected: false,
// isResultReceived: false,
// consentForSMS: false,

// clientTypeId: "",
// visitTypeId: "",
// servicePointId: "",
// clientSource: "",
// hivTestingReasonId: "",
// lastTested: "",
// partnerLastTestDate: "",
// hivNotTestingReasonId: "",
// notTestingReason: "",
// testNo: "",
// determineTestResult: "",
// sampleCollectionDate: "",
// retestDate: "",
