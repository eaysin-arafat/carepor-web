import PastRecord from "@/components/core/past-record/PastRecord";
import { ChevronRight, PlusCircle } from "react-feather";
import { PiHardDrive } from "react-icons/pi";

type Props = {
  title: string;
  subTitle?: string;
  isSubTitleShow?: boolean;
  isPastEncounter?: boolean;
};
const PastRecordList = ({
  title,
  subTitle,
  isSubTitleShow,
  isPastEncounter,
}: Props) => {
  return (
    <div className="col-span-3">
      <div className="box_shadow_2 rounded">
        <h1 className="flex px-3 items-center justify-between bg-lightBlueColor text-[#03045E] font-poppins py-2.5 border-b border-b-[#1890FF80]">
          <p className=" font-semibold">{title || "text missing"}</p>
          {isSubTitleShow && (
            <p className="text-sm">{subTitle || "text missing"}</p>
          )}
        </h1>
        <div className="px-5 py-2">
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
                    title="Vitals"
                    icon={<PlusCircle size={22} color="#1890FF" />}
                  />
                }
              />
              <PastRecord
                title={
                  <CardTitleWithIcon
                    title="HTS"
                    icon={<PiHardDrive size={22} color="#1890FF" />}
                  />
                }
              />
            </>
          )}
        </div>
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
