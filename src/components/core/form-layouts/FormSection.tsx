import { FormSectionType } from "@/types";

function FormSection({
  children,
  titleText,
  boxClass,
  titleClass,
  noteText,
  sectionErrorMsg,
  sectionErrorClass,
  titleBorder,
  noteClass,
}: FormSectionType) {
  return (
    <div className={"p-5 mt-5 border dark:border-gray-600 rounded-md" + " " + boxClass}>
      {/* Title Section */}
      <div className="mb-2">
        <h2 className={"text-xl font-semibold mb-1 dark:text-white" + " " + titleClass}>
          {titleText}
        </h2>
        {noteText && (
          <span
            className={`text-sm mb-3 text-grayColor block md:w-[80%] w-[90%] leading-4 ${noteClass}`}
          >
            {noteText}
          </span>
        )}

        <span
          className={`text-sm mb-3 text-red-500 block md:w-[80%] w-[90%] leading-4 ${sectionErrorClass}`}
        >
          {sectionErrorMsg}
        </span>

        {titleBorder && <div className="border-b mt-2 h-0"></div>}
      </div>
      <div>{children}</div>
    </div>
  );
}

export default FormSection;
