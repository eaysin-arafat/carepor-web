import { FormSectionType } from "@/types";

function SectionWrapper({
  children,
  title,
  boxClass,
  titleClass,
  noteText,
  titleBorder,
  noteClass,
  border,
}: FormSectionType) {
  return (
    <div className={"mt-5 border  rounded-md" + " " + boxClass}>
      {/* Title Section */}
      <div className="mb-2">
        <h2 className={`text-xl font-semibold mb-1" ${border ? " border-b py-3 px-5" : "px-5 pt-3"}  ${titleClass}`}>
        {/* <h2 className={"text-xl font-semibold py-3 px-5 mb-1" + border && " border-b " + " " + titleClass}> */}
          {title}
        </h2>
        {noteText && (
          <span
            className={`${border ? " py-5 px-5" : "px-5 mt-2" } text-sm mb-3 text-grayColor block md:w-[80%] w-[90%] leading-4 ${noteClass}`}
          >
            {noteText}
          </span>
        )}
        {titleBorder && <div className="border-b mt-2 h-0 p-5 "></div>}
      </div>
      <div className="p-5 ">{children}</div>
    </div>
  );
}

export default SectionWrapper;
