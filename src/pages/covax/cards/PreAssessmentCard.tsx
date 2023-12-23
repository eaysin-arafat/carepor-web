import DataRow from "@/components/core/table/DataRow";
import {
  EnumBoolYesNo,
  EnumReasonClientRefusedForVaccination,
} from "@/enum/enumerators";
import useClinician from "@/hooks/useClinician";
import useFindFacility from "@/hooks/useFindFacility";
import { TypeCovax, TypeImmunizationVaccine } from "@/types/module-types/covax";
import { DateFunc } from "@/utilities/date";
import { MdOutlineModeEditOutline } from "react-icons/md";

type Props = {
  clientCovax: TypeCovax;
  handleVaccinateForm: (data?: TypeImmunizationVaccine) => void;
  handleCovaxEditForm: (data?: TypeCovax) => void;
};

function CovaxCard({
  handleVaccinateForm,
  clientCovax,
  handleCovaxEditForm,
}: Props) {
  const { getClinicianFullName } = useClinician();
  const { getFacilityName } = useFindFacility();

  // Create Comorbidities details
  const filteredComorbidities = [
    clientCovax?.isPregnantOrLactating == true ? "Pregnant/Lactating" : "",
    clientCovax?.hasCancer == true ? "Cancer" : "",
    clientCovax?.hasDiabetes == true ? "Diabetes" : "",
    clientCovax?.hasHeartDisease == true ? "Heart Disease" : "",
    clientCovax?.hasHyperTension == true ? "Hyper Tension" : "",
    clientCovax?.hasHIV == true ? "HIV" : "",
  ];
  const Comorbidities = filteredComorbidities
    .filter((value) => value !== "")
    .join(" , ");

  return (
    <div className="mt-2 bg-whiteBgColor border border-borderColor p-4 rounded-lg">
      <div className="md:flex justify-between relative">
        <p className="text-sm">
          <span className="font-semibold">Date : &nbsp; </span>
          {DateFunc.formatDate(clientCovax?.dateCreated)}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Facility : &nbsp; </span>
          {getFacilityName(clientCovax?.createdIn)}
        </p>
        <p className="text-sm me-20">
          <span className="font-semibold">Clinician : &nbsp; </span>
          {getClinicianFullName(clientCovax?.createdBy)}
        </p>

        {DateFunc?.isBetween24Hours(clientCovax?.dateCreated) && (
          <div className="md:flex justify-end  absolute right-0 top-2 md:top-0 ">
            <button
              onClick={() => handleCovaxEditForm(clientCovax)}
              className="flex items-center gap-1 text-sm text-primaryColor"
            >
              <MdOutlineModeEditOutline /> Edit
            </button>
          </div>
        )}
      </div>
      <div className="mt-5">
        <DataRow
          isHideOnEmptyData
          title="Covax Number"
          data={clientCovax?.covaxNumber}
          titleClass="xs:min-w-[180px] sm:min-w-[270px]"
        />
        <DataRow
          isHideOnEmptyData
          title="Was Client Offered COVAX?"
          data={EnumBoolYesNo[`${clientCovax?.wasCovaxOffered}`]}
          titleClass="xs:min-w-[180px] sm:min-w-[270px]"
        />
        <DataRow
          isHideOnEmptyData
          title="Does Client Get Vaccinated Today"
          data={EnumBoolYesNo[`${clientCovax?.doesClientGetVaccinatedToday}`]}
          titleClass="xs:min-w-[180px] sm:min-w-[270px]"
        />
        <DataRow
          isHideOnEmptyData
          title="Reason Client Doesn't Want To Get Vaccination"
          data={
            EnumReasonClientRefusedForVaccination[
              clientCovax?.reasonClientRefusedForVaccination
            ]
          }
          titleClass="xs:min-w-[180px] sm:min-w-[270px]"
        />
        <DataRow
          isHideOnEmptyData
          title="Other Reason"
          data={clientCovax?.otherReasonClientRefusedForVaccination}
          titleClass="xs:min-w-[180px] sm:min-w-[270px]"
        />
        <DataRow
          isHideOnEmptyData
          title="Comorbidities"
          data={Comorbidities}
          titleClass="xs:min-w-[180px] sm:min-w-[270px]"
        />
        <DataRow
          isHideOnEmptyData
          title="Other Comorbidities"
          data={clientCovax?.otherComorbidities}
          titleClass="xs:min-w-[180px] sm:min-w-[270px]"
        />
        <button
          onClick={() => handleVaccinateForm(null)}
          className="bg-primaryColor py-3 px-5 rounded-lg text-whiteColor hover:bg-primaryHoverColor mt-4"
        >
          Vaccinate
        </button>
      </div>
    </div>
  );
}

export default CovaxCard;
