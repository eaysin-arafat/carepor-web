import { useAppSelector } from "@/app/store";
import DateInput from "@/components/core/form-elements/DatePicker";
import Input from "@/components/core/form-elements/Input";
import MultipleSelect, {
  Option,
} from "@/components/core/form-elements/MultipleSelect";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import { clientTypeApiEndpoints } from "@/features/client-type/client-type-api";
import { hivRiskFactorApiEndpoints } from "@/features/hiv-risk-factor/hiv-risk-factor-api";
import { hivTestingReasonApiEndpoints } from "@/features/hiv-testing-reason/hiv-testing-reason-api";
import { servicePointsApiEndpoints } from "@/features/service-points/service-points-api";
import { visitTypeApiEndpoints } from "@/features/visit-type/visit-type-api";
import { useMemo } from "react";
import { HtsData, HtsErrorMessages } from "../create/useHtsCreate";

interface HTSFormProps {
  htsData: HtsData;
  errorMessages: HtsErrorMessages;
  handleHtsDataChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (date: Date | null, fieldName: string) => void;
  selectedOptions: Option[];
  setSelectedOptions: (options: Option[]) => void;
}

const HTSForm = ({
  htsData,
  errorMessages,
  handleHtsDataChange,
  handleDateChange,
  selectedOptions,
  setSelectedOptions,
}: HTSFormProps) => {
  // todo: need optimization here for api calling

  const selectClientTypes = useMemo(
    () => clientTypeApiEndpoints.readClientTypes.select(null),
    []
  );

  const {
    data: clientTypes,
    isLoading: typesLoading,
    status: typesStatus,
  } = useAppSelector(selectClientTypes);

  // const {
  //   data: clientTypes,
  //   isLoading: typesLoading,
  //   status: typesStatus,
  // } = useReadClientTypesQuery(null);

  const selectVisitTypes = useMemo(
    () => visitTypeApiEndpoints.readVisitTypes.select(null),
    []
  );
  const {
    data: visitTypes,
    isSuccess: visitSuccess,
    status: visitStatus,
  } = useAppSelector(selectVisitTypes);

  const selectServicePoints = useMemo(
    () => servicePointsApiEndpoints.readServicePoints.select(null),
    []
  );

  const {
    data: servicePoints,
    isSuccess: servicePointsSuccess,
    status: servicePointsStatus,
  } = useAppSelector(selectServicePoints);

  const selectHivTestingReasons = useMemo(
    () => hivTestingReasonApiEndpoints.readHIVTestingReasons.select(null),
    []
  );

  const {
    data: hivTestingReasons,
    isSuccess: testingReasonSuccess,
    status: testingReasonStatus,
  } = useAppSelector(selectHivTestingReasons);

  // const {
  //   data: hivTestingReasons,
  //   isSuccess: testingReasonSuccess,
  //   status: testingReasonStatus,
  // } = useReadHIVTestingReasonsQuery(null);

  const selectHivNotTestingReasons = useMemo(
    () => hivTestingReasonApiEndpoints.readHIVTestingReasons.select(null),
    []
  );

  const {
    data: hivNotTestingReasons,
    isSuccess: hivNotTestingSuccess,
    status: hivNotTestingStatus,
  } = useAppSelector(selectHivNotTestingReasons);

  // const {
  //   data: hivNotTestingReasons,
  //   isSuccess: hivNotTestingSuccess,
  //   status: hivNotTestingStatus,
  // } = useReadHIVNotTestingReasonsQuery(null);

  const selectHivRiskFactors = useMemo(
    () => hivRiskFactorApiEndpoints.readHIVRiskFactors.select(null),
    []
  );

  const { data: hivRiskFactors } = useAppSelector(selectHivRiskFactors);

  // const { data: hivRiskFactors } = useReadHIVRiskFactorsQuery(null);

  console.log("has concented", htsData?.hasConsented === "true");

  // render client types options
  const clientTypesOptions = clientTypes?.map((clientType) => (
    <option key={clientType.oid} value={clientType.oid}>
      {clientType.description}
    </option>
  ));

  // render visit types options
  const visitTypesOptions = visitTypes?.map((visitType) => (
    <option key={visitType.oid} value={visitType.oid}>
      {visitType.description}
    </option>
  ));

  // render service points options
  const servicePointsOptions = servicePoints?.map((servicePoint) => (
    <option key={servicePoint.oid} value={servicePoint.oid}>
      {servicePoint.description}
    </option>
  ));

  // render hiv testing reasons options
  const hivTestingReasonsOptions = hivTestingReasons?.map(
    (hivTestingReason) => (
      <option key={hivTestingReason.oid} value={hivTestingReason.oid}>
        {hivTestingReason.description}
      </option>
    )
  );

  // render hiv not testing reasons options
  const hivNotTestingReasonsOptions = hivNotTestingReasons?.map(
    (hivNotTestingReason) => (
      <option key={hivNotTestingReason.oid} value={hivNotTestingReason.oid}>
        {hivNotTestingReason.description}
      </option>
    )
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 border border-borderColor rounded-lg shadow-light mt-3">
        <h2 className="col-span-full text-xl font-semibold">
          Pretest Assessment
        </h2>
        <div className="">
          <Select
            required
            label="Client Type"
            name="clientTypeId"
            errMsg={errorMessages.clientTypeId}
            value={htsData?.clientTypeId}
            onChange={handleHtsDataChange}
          >
            {!typesLoading && typesStatus === "fulfilled" && clientTypesOptions}
          </Select>
        </div>
        <div className="">
          <Select
            required
            label="Visit Type"
            name="visitTypeId"
            errMsg={errorMessages.visitTypeId}
            value={htsData?.visitTypeId}
            onChange={handleHtsDataChange}
          >
            {visitSuccess && visitStatus === "fulfilled" && visitTypesOptions}
          </Select>
        </div>
        <div className="">
          <Select
            required
            label="Service Point"
            name="servicePointId"
            errMsg={errorMessages.servicePointId}
            value={htsData?.servicePointId}
            onChange={handleHtsDataChange}
          >
            {servicePointsSuccess &&
              servicePointsStatus === "fulfilled" &&
              servicePointsOptions}
          </Select>
        </div>
        <div className="">
          <Select
            required
            label="Source of Client"
            name="clientSource"
            value={htsData?.clientSource}
            onChange={handleHtsDataChange}
          >
            <option value="1">Urban</option>
            <option value="2">Rural</option>
          </Select>
        </div>
        <div className="">
          <Select
            required
            label="Reason for Testing"
            name="hivTestingReasonId"
            errMsg={errorMessages.hivTestingReasonId}
            value={htsData?.hivTestingReasonId}
            onChange={handleHtsDataChange}
          >
            {testingReasonSuccess &&
              testingReasonStatus === "fulfilled" &&
              hivTestingReasonsOptions}
          </Select>
        </div>
        <div className="">
          <DateInput
            label="Last Tested Date"
            name="lastTested"
            errMsg={errorMessages.lastTested}
            selected={
              htsData?.lastTested ? new Date(htsData?.lastTested) : null
            }
            onChange={(date) => handleDateChange(date, "lastTested")}
          />
        </div>
        <div className="">
          <Select
            label="Last Test Result"
            name="lastTestResult"
            errMsg={errorMessages.lastTestResult}
            value={htsData?.lastTestResult}
            onChange={handleHtsDataChange}
          >
            <option value="1">Positive</option>
            <option value="2">Negative</option>
            <option value="3">Indeterminant</option>
            <option value="4">Detectable</option>
            <option value="5">Not Detected</option>
          </Select>
        </div>
        <div className="">
          <DateInput
            label="Partner's Last Tested Date"
            name="partnerLastTestDate"
            errMsg={errorMessages.partnerLastTestDate}
            selected={
              htsData?.partnerLastTestDate
                ? new Date(htsData?.partnerLastTestDate)
                : null
            }
            onChange={(date) => handleDateChange(date, "partnerLastTestDate")}
          />
        </div>
        <div className="">
          <Select
            required={!!htsData?.partnerLastTestDate}
            label="Partner's HIV Status"
            name="partnerHIVStatus"
            errMsg={errorMessages.partnerHIVStatus}
            value={htsData?.partnerHIVStatus}
            onChange={handleHtsDataChange}
            disabled={!htsData?.partnerLastTestDate}
          >
            <option value="1">Positive</option>
            <option value="2">Negative</option>
            <option value="3">Indeterminant</option>
            <option value="4">Refused test or result</option>
            <option value="5">Never tested</option>
            <option value="6">I Don&apos;t know</option>
          </Select>
        </div>
        <div className="">
          <Select
            required
            label="Patient Counselled"
            name="hasCounselled"
            errMsg={errorMessages.hasCounselled}
            value={htsData?.hasCounselled}
            onChange={handleHtsDataChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
        </div>
        <div className="">
          <Select
            required
            label="Consent Obtained"
            name="hasConsented"
            errMsg={errorMessages.hasConsented}
            value={htsData?.hasConsented}
            onChange={handleHtsDataChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
        </div>
        <div className="">
          <Select
            required
            label="Reason for Not Testing"
            name="hivNotTestingReasonId"
            errMsg={errorMessages.hivNotTestingReasonId}
            value={htsData?.hivNotTestingReasonId}
            onChange={handleHtsDataChange}
            disabled={htsData?.hasConsented?.toString() === "true"}
          >
            {hivNotTestingSuccess &&
              hivNotTestingStatus === "fulfilled" &&
              hivNotTestingReasonsOptions}
          </Select>
        </div>
        <div className="col-span-full">
          <Textarea
            label="Other Reasons"
            name="notTestingReason"
            errMsg={errorMessages.notTestingReason}
            value={htsData?.notTestingReason}
            onChange={handleHtsDataChange}
            disabled={htsData?.hasConsented?.toString() === "true"}
          />
        </div>
      </div>

      {htsData?.hasConsented?.toString() === "true" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 border border-borderColor rounded-lg mt-8 shadow-light">
          <h2 className="col-span-full text-xl font-semibold">
            Test & Results
          </h2>
          <div className="">
            <Input
              label="Test No"
              name="testNo"
              errMsg={errorMessages.testNo}
              value={htsData?.testNo}
              onChange={handleHtsDataChange}
            />
          </div>
          <div className="">
            <Select
              required
              label="Determine"
              name="determineTestResult"
              errMsg={errorMessages.determineTestResult}
              value={htsData?.determineTestResult}
              onChange={handleHtsDataChange}
            >
              <option value="1">Reactive</option>
              <option value="2">Non Reactive</option>
            </Select>
          </div>
          <div className="">
            <Select
              required
              label="Bioline"
              name="biolineTestResult"
              errMsg={errorMessages.biolineTestResult}
              value={htsData?.biolineTestResult}
              onChange={handleHtsDataChange}
            >
              <option value="1">Reactive</option>
              <option value="2">Non Reactive</option>
            </Select>
          </div>
          <div className="">
            <Select
              required
              label="HIV Type"
              name="hivType"
              errMsg={errorMessages.hivType}
              value={htsData?.hivType}
              onChange={handleHtsDataChange}
            >
              <option value="1">HIV-1</option>
              <option value="2">HIV-2</option>
              <option value="3">HIV-1 & HIV-2</option>
            </Select>
          </div>
          <div className="">
            <Select
              required
              label="DNA PCR Sample Collected"
              name="isDNAPCRSampleCollected"
              errMsg={errorMessages.isDNAPCRSampleCollected}
              value={htsData?.isDNAPCRSampleCollected}
              onChange={handleHtsDataChange}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Select>
          </div>
          <div className="">
            <DateInput
              label="DNA PCR Sample Collection Date"
              name="sampleCollectionDate"
              errMsg={errorMessages.sampleCollectionDate}
              selected={
                htsData?.sampleCollectionDate
                  ? new Date(htsData?.sampleCollectionDate)
                  : null
              }
              onChange={(date) =>
                handleDateChange(date, "sampleCollectionDate")
              }
            />
          </div>
          <div className="">
            <Select
              required
              label="Client Received Results"
              name="isResultReceived"
              errMsg={errorMessages.isResultReceived}
              value={htsData?.isResultReceived}
              onChange={handleHtsDataChange}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Select>
          </div>
          <div className="">
            <Select
              required
              label="Consent to Receive SMS Alerts"
              name="consentForSMS"
              errMsg={errorMessages.consentForSMS}
              value={htsData?.consentForSMS}
              onChange={handleHtsDataChange}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Select>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 border border-borderColor rounded-lg mt-8 shadow-light">
        <h2 className="col-span-full text-xl font-semibold">
          Post Test Assessment
        </h2>
        <div className="col-span-full">
          <MultipleSelect
            options={hivRiskFactors?.slice() || []}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        </div>
        <div className="col-span-full">
          <DateInput
            label="Retest Date"
            name="retestDate"
            errMsg={errorMessages.retestDate}
            selected={
              htsData?.retestDate ? new Date(htsData?.retestDate) : null
            }
            onChange={(date) => handleDateChange(date, "retestDate")}
          />
        </div>
      </div>
    </>
  );
};

export default HTSForm;
