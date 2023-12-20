import DataRow from "@/components/core/table/DataRow";
import { TypeImmunizationVaccine } from "@/types/module-types/covax";
import { DateFunc } from "@/utilities/date";
import { PlusCircle } from "react-feather";
import { MdOutlineModeEditOutline } from "react-icons/md";
type Props = {
  handleAdverseEffectForm: (vaccine: TypeImmunizationVaccine) => void;
  vaccine: TypeImmunizationVaccine;
};

function AdverseEvent({ vaccine, handleAdverseEffectForm }: Props) {
  console.log(vaccine?.adverseEvents);

  const adverseEvent = Array.isArray(vaccine?.adverseEvents)
    ? vaccine?.adverseEvents?.slice()[0]
    : null;

  //  AEFI text create
  const AEFI = [
    adverseEvent?.swelling == true ? " Swelling /pain at injection site" : "",
    adverseEvent?.joint ? "Joint" : "",
    adverseEvent?.malaise ? "Malaise/Fatigue" : "",
    adverseEvent?.bodyAches ? "Body Aches" : "",
    adverseEvent?.fever ? "Fever" : "",
    adverseEvent?.allergicReaction ? "Allergic Reaction" : "",
    adverseEvent?.otherAdverseEvent ? "Other Adverse Event" : "",
  ];
  const JoinedAEFI = AEFI?.filter((value) => value !== "").join(" , ");

  console.log(vaccine?.dateCreated);
  console.log(adverseEvent?.dateCreated);

  return (
    <div className="mt-2 bg-whiteBgColor border border-borderColor p-4 rounded-lg">
      <div className="flex justify-between">
        <h2 className="text-xl font-medium text-secondaryColor">
          Adverse Event
        </h2>
        <div className="flex gap-3">
          {!adverseEvent && (
            <button
              onClick={() => handleAdverseEffectForm(vaccine)}
              className="flex items-center gap-1 text-sm text-primaryColor"
            >
              <PlusCircle className="h-4 w-4" /> Add
            </button>
          )}
          {adverseEvent &&
            DateFunc.isBetween24Hours(vaccine?.dateCreated) &&
            DateFunc.isBetween24Hours(adverseEvent?.dateCreated) && (
              <button
                onClick={() => handleAdverseEffectForm(vaccine)}
                className="flex items-center gap-1 text-sm text-primaryColor"
              >
                <MdOutlineModeEditOutline /> Edit
              </button>
            )}
        </div>
      </div>
      <DataRow
        isHideOnEmptyData
        title="Date of AEFI"
        data={DateFunc.formatDate(adverseEvent?.aefiDate)}
        titleClass="xs:min-w-[130px] sm:min-w-[150px]"
      />
      <DataRow
        isHideOnEmptyData
        title="AEFI"
        data={JoinedAEFI}
        titleClass="xs:min-w-[130px] sm:min-w-[150px]"
      />
      <DataRow
        isHideOnEmptyData
        title="Other"
        data={adverseEvent?.otherAEFI}
        titleClass="xs:min-w-[130px] sm:min-w-[150px]"
      />
    </div>
  );
}

export default AdverseEvent;
