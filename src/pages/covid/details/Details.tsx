import { RootState } from "@/app/store";
import DefaultModal from "@/components/core/modal/DefaultModal";
import DataRow from "@/components/core/table/DataRow";
import { covidModalTypes } from "@/constants/modal-types";
import { EnumBoolYesNo, EnumSourceOfAlert } from "@/enum/enumerators";
import { closeViewModal, openEditModal } from "@/features/modal/modal-slice";
import useClinician from "@/hooks/useClinician";
import useFindFacility from "@/hooks/useFindFacility";
import { TypeCovidRecord } from "@/types/module-types/covid";
import { DateFunc } from "@/utilities/date";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const CovidDetails = () => {
  // Data showing hooks
  const { getFacilityName } = useFindFacility();
  const { getClinicianFullName } = useClinician();

  const dispatch = useDispatch();
  const { data }: { data: TypeCovidRecord } = useSelector(
    (state: RootState) => state.modal.viewModal
  );

  const closeModal = () => {
    dispatch(closeViewModal());
  };

  const handleCovidEditForm = (data: TypeCovidRecord) => {
    dispatch(closeViewModal());
    dispatch(
      openEditModal({
        modalId: covidModalTypes.covidEditModal,
        data: data,
      })
    );
  };

  const renderSymptomScreenings = data?.mergeCovidSymptomScreenings
    ?.map((d) => d.description)
    .join(", ");

  const renderCovidComorbidities = data?.mergeCovidComorbidities
    ?.map((d) => d.description)
    .join(", ");

  const renderexposureRisks = data?.mergeExposureRisks
    ?.map((d) => d.description)
    .join(", ");

  console.log(data);

  //
  return (
    <div>
      <DefaultModal title="Covid" toggler={closeModal} size="5xl">
        <div className="mt-2 border border-borderColor p-4 rounded-lg">
          <div className="md:flex justify-between relative">
            <p className="text-sm">
              <span className="font-semibold">Date : &nbsp; </span>
              {DateFunc.formatDate(data?.dateCreated)}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Facility : &nbsp; </span>
              {getFacilityName(data?.createdIn)}
            </p>
            <p className="text-sm me-20">
              <span className="font-semibold">Clinician : &nbsp; </span>
              {getClinicianFullName(data?.createdBy)}
            </p>
            {/* {DateFunc.isBetween24Hours(data?.dateCreated) && ( */}
            <div className="md:flex justify-end  absolute right-0 top-2 md:top-0 ">
              <button
                onClick={() => handleCovidEditForm(data)}
                className="flex items-center gap-1 text-sm text-primaryColor"
              >
                <MdOutlineModeEditOutline /> Edit
              </button>
            </div>
            {/* )} */}
          </div>
          <div className="mt-5">
            <DataRow
              title="Source of Alert"
              data={EnumSourceOfAlert[data?.sourceOfAlert]}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Date of Notification"
              data={DateFunc.formatDate(data?.notificationDate)}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />

            <div className="border-y border-borderColor py-2 font-medium text-secondaryColor mt-4 mb-1">
              Covid Symptoms
            </div>
            <DataRow
              title="Symptom Screen"
              // data={renderSymptomScreenings(data?.covidSymptomScreenings)}
              data={renderSymptomScreenings}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Other Symptom Screen"
              data={data?.otherCovidSymptom}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />

            <div className="border-y border-borderColor py-2 font-medium text-secondaryColor mt-4 mb-1">
              Exposure Risk
            </div>
            <DataRow
              title="Exposure Risk"
              // data={renderCovidComorbidities(data?.covidComorbidities)}
              data={renderCovidComorbidities}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Other Exposure Risk"
              data={data?.otherExposureRisk}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />

            <div className="border-y border-borderColor py-2 font-medium text-secondaryColor mt-4 mb-1">
              Case Report
            </div>
            <DataRow
              title="ICU Admission"
              data={EnumBoolYesNo[`${data?.isICUAdmitted}`]}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Date of ICU Admission"
              data={DateFunc.formatDate(data?.icuAdmissionDate)}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="On Oxygen?"
              data={EnumBoolYesNo[`${data?.isOnOxygen}`]}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Oxygen Saturation"
              data={data?.oxygenSaturation}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Received Ventilatory Support"
              data={EnumBoolYesNo[`${data?.receivedVentilatorySupport}`]}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Received BP Support"
              data={EnumBoolYesNo[`${data?.receivedBPSupport}`]}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Date First Positive"
              data={DateFunc.formatDate(data?.dateFirstPositive)}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Recent International Travel"
              data={EnumBoolYesNo[`${data?.anyInternationalTravel}`]}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Recent International Travel Destination Name"
              data={data?.travelDestination}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Health Care Worker"
              data={EnumBoolYesNo[`${data?.isClientHealthCareWorker}`]}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Covid Exposure"
              data={EnumBoolYesNo[`${data?.hadCovidExposure}`]}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Mental Status on Admission"
              data={data?.mentalStatusOnAdmission}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />

            <div className="border-y border-borderColor py-2 font-medium text-secondaryColor mt-4 mb-1">
              Clinical Assessment
            </div>
            <DataRow
              title="Pneumonia"
              data={EnumBoolYesNo[`${data?.hasPneumonia}`]}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="ARDS"
              data={EnumBoolYesNo[`${data?.isARDS}`]}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Patient Hospitalized?"
              data={EnumBoolYesNo[`${data?.isPatientHospitalized}`]}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Date of Hospitalised"
              data={DateFunc.formatDate(data?.dateHospitalized)}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Co-morbid Conditions"
              // data={renderexposureRisks(data?.exposureRisks)}
              data={renderexposureRisks}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Other Co-morbid Conditions"
              data={data?.otherComorbiditiesConditions}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Other Respiratory Illness"
              data={data?.otherRespiratoryIllness}
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
          </div>
        </div>
      </DefaultModal>
    </div>
  );
};

export default CovidDetails;

// const renderCovidComorbidities = (covidComorbidity: CovidComorbidity[]) => {
//   const nameArray = covidComorbidity?.map(
//     (data) => EnumCovidComorbidCondition[data?.covidComorbidityConditions]
//   );
//   return nameArray?.join(", ");
// };
