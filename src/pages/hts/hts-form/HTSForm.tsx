import DateInput from "@/components/core/form-elements/DatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import { useReadClientTypesQuery } from "@/features/client-type/client-type-api";
import { useReadHIVNotTestingReasonsQuery } from "@/features/hiv-not-testing-reasons/hiv-not-testing-reason-api";
import { useReadHIVTestingReasonsQuery } from "@/features/hiv-testing-reason/hiv-testing-reason-api";
import { useReadServicePointsQuery } from "@/features/service-points/service-points-api";
import { useReadVisitTypesQuery } from "@/features/visit-type/visit-type-api";

const HTSForm = () => {
  // todo: need optimization here for api calling
  const {
    data: clientTypes,
    isLoading: typesLoading,
    status: typesStatus,
  } = useReadClientTypesQuery(null);

  const {
    data: visitTypes,
    isSuccess: visitSuccess,
    status: visitStatus,
  } = useReadVisitTypesQuery(null);

  const {
    data: servicePoints,
    isSuccess: servicePointsSuccess,
    status: servicePointsStatus,
  } = useReadServicePointsQuery(null);

  const {
    data: hivTestingReasons,
    isSuccess: testingReasonSuccess,
    status: testingReasonStatus,
  } = useReadHIVTestingReasonsQuery(null);

  const {
    data: hivNotTestingReasons,
    isSuccess: hivNotTestingSuccess,
    status: hivNotTestingStatus,
  } = useReadHIVNotTestingReasonsQuery(null);

  console.log("hivNotTestingReasons", hivNotTestingReasons);

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
          <Select required label="Client Type" name="">
            {!typesLoading && typesStatus === "fulfilled" && clientTypesOptions}
          </Select>
        </div>
        <div className="">
          <Select required label="Visit Type" name="">
            {visitSuccess && visitStatus === "fulfilled" && visitTypesOptions}
          </Select>
        </div>
        <div className="">
          <Select required label="Service Point" name="">
            {servicePointsSuccess &&
              servicePointsStatus === "fulfilled" &&
              servicePointsOptions}
          </Select>
        </div>
        <div className="">
          <Select required label="Source of Client" name="">
            <option value="1">Urban</option>
            <option value="2">Rural</option>
          </Select>
        </div>
        <div className="">
          <Select required label="Reason for Testing" name="">
            {testingReasonSuccess &&
              testingReasonStatus === "fulfilled" &&
              hivTestingReasonsOptions}
          </Select>
        </div>
        <div className="">
          <DateInput label="Last Tested Date" onChange={() => {}} />
        </div>
        <div className="">
          <Select label="Last Test Result" name="">
            <option value="1">Positive</option>
            <option value="2">Negative</option>
            <option value="3">Indeterminant</option>
            <option value="4">Detectable</option>
            <option value="5">Not Detected</option>
          </Select>
        </div>
        <div className="">
          <DateInput label="Partner's Last Tested Date" onChange={() => {}} />
        </div>
        <div className="">
          <Select label="Partner's HIV Status" name="">
            <option value="1">Positive</option>
            <option value="2">Negative</option>
            <option value="3">Indeterminant</option>
            <option value="4">Refused test or result</option>
            <option value="5">Never tested</option>
            <option value="6">I Don&apos;t know</option>
          </Select>
        </div>
        <div className="">
          <Select required label="Patient Counselled" name="">
            <option value="1">Yes</option>
            <option value="2">No</option>
          </Select>
        </div>
        <div className="">
          <Select required label="Consent Obtained" name="">
            <option value="1">Yes</option>
            <option value="2">No</option>
          </Select>
        </div>
        <div className="">
          <Select required label="Reason for Not Testing" name="">
            {hivNotTestingSuccess &&
              hivNotTestingStatus === "fulfilled" &&
              hivNotTestingReasonsOptions}
          </Select>
        </div>
        <div className="col-span-full">
          <Textarea label="Other Reasons" name="comment" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 border border-borderColor rounded-lg mt-8 shadow-light">
        <h2 className="col-span-full text-xl font-semibold">Test & Results</h2>
        <div className="">
          <Input label="Test No" name="weight" />
        </div>
        <div className="">
          <Select required label="Determine" name="">
            <option value="1">Reactive</option>
            <option value="2">Non Reactive</option>
          </Select>
        </div>
        <div className="">
          <Select required label="Bioline" name="">
            <option value="1">Reactive</option>
            <option value="2">Non Reactive</option>
          </Select>
        </div>
        <div className="">
          <Select required label="HIV Type" name="">
            <option value="1">HIV-1</option>
            <option value="2">HIV-2</option>
            <option value="3">HIV-1 & HIV-2</option>
          </Select>
        </div>
        <div className="">
          <Select required label="DNA PCR Sample Collected" name="">
            <option value="1">Yes</option>
            <option value="2">No</option>
          </Select>
        </div>
        <div className="">
          <DateInput
            label="DNA PCR Sample Collection Date"
            onChange={() => {}}
          />
        </div>
        <div className="">
          <Select required label="Client Received Results" name="">
            <option value="1">Yes</option>
            <option value="2">No</option>
          </Select>
        </div>
        <div className="">
          <Select required label="Consent to Receive SMS Alerts" name="">
            <option value="1">Yes</option>
            <option value="2">No</option>
          </Select>
        </div>
      </div>
    </>
  );
};

export default HTSForm;
