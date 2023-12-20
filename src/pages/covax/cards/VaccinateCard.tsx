import DataRow from "@/components/core/table/DataRow";
import { TypeImmunizationVaccine } from "@/types/module-types/covax";
import { DateFunc } from "@/utilities/date";
import { MdOutlineModeEditOutline } from "react-icons/md";

type Props = {
  handleVaccinateForm: (vaccine: TypeImmunizationVaccine) => void;
  vaccine: TypeImmunizationVaccine;
};

function VaccinateCard({ handleVaccinateForm, vaccine }: Props) {
  return (
    <div className="mt-2 bg-whiteBgColor border border-borderColor p-4 rounded-lg">
      <div className="flex justify-between">
        <h2 className="text-xl font-medium text-secondaryColor">
          {vaccine?.vaccineDose?.vaccine?.description}
        </h2>

        {DateFunc?.isBetween24Hours(vaccine?.dateCreated) && (
          <div className="flex gap-3">
            <button
              onClick={() => handleVaccinateForm(vaccine)}
              className="flex items-center gap-1 text-sm text-primaryColor"
            >
              <MdOutlineModeEditOutline /> Edit
            </button>
          </div>
        )}
      </div>
      <DataRow
        title="Dose"
        data={vaccine?.vaccineDose?.description}
        titleClass="xs:min-w-[130px] sm:min-w-[150px]"
      />
      <DataRow
        title="Date of vaccination"
        data={DateFunc.formatDate(vaccine?.dateGiven)}
        titleClass="xs:min-w-[130px] sm:min-w-[150px]"
      />
      <DataRow
        title="Batch Number"
        data={vaccine?.batchNumber}
        titleClass="xs:min-w-[130px] sm:min-w-[150px]"
      />
    </div>
  );
}

export default VaccinateCard;
