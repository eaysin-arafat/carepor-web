import { RootState, useAppSelector } from "@/app/store";
import Card from "@/components/core/card/Card";
import DefaultModal from "@/components/core/modal/DefaultModal";
import DataRow from "@/components/core/table/DataRow";
import { hivTestingReasonApiEndpoints } from "@/features/hiv-testing-reason/hiv-testing-reason-api";
import { closeViewModal } from "@/features/modal/modal-slice";
import { servicePointsApiEndpoints } from "@/features/service-points/service-points-api";
import { visitTypeApiEndpoints } from "@/features/visit-type/visit-type-api";
import { DateFunc } from "@/utilities/date";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clientSource,
  determineBiolineTestResult,
  hivTypes,
  lastTestResult,
} from "../constants";

const HtsDetails = () => {
  const { viewModal } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeViewModal());
  };

  // const selectClientTypes = useMemo(
  //   () => clientTypeApiEndpoints.readClientTypes.select(null),
  //   []
  // );
  // const { data: clientTypes } = useAppSelector(selectClientTypes);

  const selectVisitTypes = useMemo(
    () => visitTypeApiEndpoints.readVisitTypes.select(null),
    []
  );
  const { data: visitTypes } = useAppSelector(selectVisitTypes);

  const selectServicePoints = useMemo(
    () => servicePointsApiEndpoints.readServicePoints.select(null),
    []
  );
  const { data: servicePoints } = useAppSelector(selectServicePoints);

  const selectHivTestingReasons = useMemo(
    () => hivTestingReasonApiEndpoints.readHIVTestingReasons.select(null),
    []
  );
  const { data: hivTestingReasons } = useAppSelector(selectHivTestingReasons);

  const findServicePoint = (id: number) => {
    return servicePoints?.find((sp) => sp.oid === id)?.description;
  };

  const findVisitType = (id: number) => {
    return visitTypes?.find((vt) => vt.oid === id)?.description;
  };

  const findHivTestingReason = (id: number) => {
    return hivTestingReasons?.find((htr) => htr.oid === id)?.description;
  };
  const titleClass = "xs:min-w-[200px] md:min-w-[250px] max-w-[300px]";
  return (
    <DefaultModal title="Hts Details" toggler={closeModal}>
      <Card className="bg-whiteBgColor !shadow-light border border-borderColor">
        <div className="md:flex justify-between gap-5 mb-4 relative">
          <h2>
            <span className="font-semibold">Date : &nbsp; </span>12-Dec-2023
          </h2>
          <h2>
            <span className="font-semibold">Facility : &nbsp; </span>Bauleni
            Mini Hospital
          </h2>
          <h2 className="me-20">
            <span className="font-semibold">Clinician : &nbsp; </span>System
            Admin
          </h2>
        </div>
        <div className="">
          <DataRow
            title="Source of Client"
            data={clientSource[viewModal?.data?.clientSource]}
            titleClass={titleClass}
          />
          <DataRow
            title="Service Point"
            data={findServicePoint(viewModal?.data?.servicePointId)}
            titleClass={titleClass}
          />
          <DataRow
            title="Visit Type"
            data={findVisitType(viewModal?.data?.visitTypeId)}
            titleClass={titleClass}
          />
          <DataRow
            title="Testing Reason"
            data={findHivTestingReason(viewModal?.data?.hivTestingReasonId)}
            titleClass={titleClass}
          />
          <DataRow
            title="Last Test Date"
            data={
              viewModal?.data?.lastTested
                ? DateFunc.toFormatted(viewModal?.data?.lastTested)
                : null
            }
            titleClass={titleClass}
          />
          <DataRow
            title="Last Test Result"
            data={lastTestResult[viewModal?.data?.lastTestResult]}
            titleClass={titleClass}
          />
          <DataRow
            title="Partner's HIV Status"
            data={hivTypes[viewModal?.data?.partnerHIVStatus]}
            titleClass={titleClass}
          />
          <DataRow
            title="Consent Obtained"
            data={viewModal?.data?.hasConsented ? "Yes" : "No"}
            titleClass={titleClass}
          />
          <DataRow
            title="Patient Counselled"
            data={viewModal?.data?.hasCounselled ? "Yes" : "No"}
            titleClass={titleClass}
          />
          <DataRow
            title="Test Serial No"
            data={viewModal?.data?.testNo}
            titleClass={titleClass}
          />

          <div className="text-secondaryColor text-xl font-medium border-y py-2 mt-4">
            Test & Results
          </div>
          <DataRow
            title="Determine Test Result"
            data={
              determineBiolineTestResult[viewModal?.data?.determineTestResult]
            }
            titleClass={titleClass}
          />
          <DataRow
            title="Bioline Test Result"
            data={
              determineBiolineTestResult[viewModal?.data?.biolineTestResult]
            }
            titleClass={titleClass}
          />
          <DataRow
            title="HIV Type"
            data={hivTypes[viewModal?.data?.partnerHIVStatus]}
            titleClass={titleClass}
          />
          <DataRow
            title="DNA PCR Collected"
            data={viewModal?.data?.isDNAPCRSampleCollected ? "Yes" : "No"}
            titleClass={titleClass}
          />
          <DataRow
            title="Sample Collection Date"
            data={
              viewModal?.data?.sampleCollectionDate
                ? DateFunc.toFormatted(viewModal?.data?.sampleCollectionDate)
                : null
            }
            titleClass={titleClass}
          />
          <DataRow
            title="Client Received Results"
            data={viewModal?.data?.isResultReceived ? "Yes" : "No"}
            titleClass={titleClass}
          />
          <DataRow
            title="Consent to Receive SMS Alerts?"
            data={viewModal?.data?.consentForSMS ? "Yes" : "No"}
            titleClass={titleClass}
          />

          <div className="text-secondaryColor text-xl font-medium border-y py-2 mt-4">
            Post Test Assessment
          </div>
          <DataRow
            title="Client Risk Assesment"
            data="Data"
            titleClass={titleClass}
          />
          <DataRow
            title="Retest Date"
            data={
              viewModal?.data?.retestDate
                ? DateFunc.toFormatted(viewModal?.data?.retestDate)
                : null
            }
            titleClass={titleClass}
          />
        </div>
      </Card>
      <div className="flex justify-center mt-4">
        <button
          onClick={closeModal}
          className="mb-5 bg-whiteBgColor hover:bg-lightGrayColor hover: border-2 border-borderColor  px-6 py-3 rounded-full flex gap-2 text-center"
        >
          Cancel
        </button>
      </div>
    </DefaultModal>
  );
};

export default HtsDetails;
