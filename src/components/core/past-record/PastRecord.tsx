import { ChevronRight } from "react-feather";

type PropsMain = {
  isLinked?: boolean;
  title: string | JSX.Element;
  link?: string;
  linkTitle?: string;
};

/**
 *
 * @props isLinked bollean
 * @props title Card Title
 * @props link Button Link
 * @props linkTitle Button Text
 * @returns
 */
const PastRecord = ({ isLinked, title, link, linkTitle }: PropsMain) => {
  return (
    <div className="border my-2.5 p-2.5 text-sm bg-lightBlueColor rounded animate__animated animate__fadeInLeft">
      <div className="flex w-full justify-between items-center mb-2 border-b  pb-1">
        <b>{title || "Text missing"}</b>
        {isLinked && (
          <button className="flex gap-2 items-center ">
            <span className="inline-block text-[#1890FF] text-xs">
              {linkTitle ? linkTitle : "View Full Encounter"}
            </span>
            <span className="inline-block">
              <ChevronRight size={14} color="#1890FF" />
            </span>
          </button>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <List title="Chief Complaints" value="Test" />
        <List title="History Of Presenting" value="Test" />
        <List title="Serostatus & Disclosure" value="Test" />
      </div>
    </div>
  );
};

export default PastRecord;

type Props = {
  title: string;
  value: string;
};
const List = ({ title, value }: Props) => {
  return (
    <p className="flex gap-2 mb-2">
      <span className="inline-block font-semibold text-xs font-poppins w-[150px]">
        {title}
      </span>
      <span className="inline-block text-xs">:&nbsp; {value}</span>
    </p>
  );
};
