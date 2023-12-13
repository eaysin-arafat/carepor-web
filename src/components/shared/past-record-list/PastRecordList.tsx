import PastRecord from "@/components/core/past-record/PastRecord";
import { useState } from "react";
import { ChevronDown, ChevronUp, PlusCircle } from "react-feather";
import { AiFillAlert, AiFillThunderbolt } from "react-icons/ai";
import { PiHardDrive } from "react-icons/pi";

type Props = {
  title: string;
  subTitle?: string;
  isSubTitleShow?: boolean;
  isPastEncounter?: boolean;
  isAccordion?: boolean;
};
const PastRecordList = ({
  title,
  subTitle,
  isSubTitleShow,
  isPastEncounter,
  isAccordion,
}: Props) => {
  const [height, setHeight] = useState(isAccordion ? false : true);
  return (
    <div className="col-span-3">
      <div className="border border-borderColor shadow-md rounded">
        <button
          onClick={() => isAccordion && setHeight(!height)}
          className="flex w-full px-3 items-center justify-between bg-lightBlueColor text-[#03045E] font-poppins py-2.5 border-b border-b-[#1890FF80]"
        >
          <p className=" font-semibold">{title || "text missing"}</p>
          <div className="flex gap-10">
            {isSubTitleShow && (
              <p className="text-sm">{subTitle || "text missing"}</p>
            )}
            {isAccordion && !height && <ChevronDown />}
            {isAccordion && height && <ChevronUp />}
          </div>
        </button>
        {height && (
          <div className="px-2.5 pb-1">
            {isPastEncounter ? (
              <>
                <PastRecord title="Present Complaints" isLinked />
                <PastRecord title="TB & Constitutional Symptoms" isLinked />
                <PastRecord title="Review of Systems" isLinked />
                <PastRecord title="Past Medical History" isLinked />
                <PastRecord title="Chronic / Non Chronic Conditions" isLinked />
                <PastRecord title="Allergies" isLinked />
                <PastRecord title="Family & Social History" isLinked />
              </>
            ) : (
              <>
                <PastRecord
                  title={
                    <CardTitleWithIcon
                      title="HTS Status"
                      icon={<PlusCircle size={22} color="#1890FF" />}
                    />
                  }
                />
                <PastRecord
                  title={
                    <CardTitleWithIcon
                      title="Vitals"
                      icon={<PiHardDrive size={22} color="#1890FF" />}
                    />
                  }
                />
                <PastRecord
                  title={
                    <CardTitleWithIcon
                      title="Diagnosis"
                      icon={<AiFillAlert size={22} color="#1890FF" />}
                    />
                  }
                />
                <PastRecord
                  title={
                    <CardTitleWithIcon
                      title="Treatment Plan"
                      icon={<AiFillThunderbolt size={22} color="#1890FF" />}
                    />
                  }
                />
                <PastRecord
                  title={
                    <CardTitleWithIcon
                      title="Medication Plan"
                      icon={<PiHardDrive size={22} color="#1890FF" />}
                    />
                  }
                />
                <PastRecord
                  title={
                    <CardTitleWithIcon
                      title="Investigation"
                      icon={<PiHardDrive size={22} color="#1890FF" />}
                    />
                  }
                />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

type PropsChild = {
  title: string;
  icon: JSX.Element;
};
const CardTitleWithIcon = ({ title, icon }: PropsChild) => {
  return (
    <div className="flex items-center justify-between gap-2">
      {icon}
      <h1 className="font-semibold text-sm">{title}</h1>
    </div>
  );
};

export default PastRecordList;
