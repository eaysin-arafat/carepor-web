import { cn } from "@/utilities/cn";

const defaultButtonCss =
  "border-t border-t-borderColor dark:text-white bg-whiteBgColor px-2 py-3 border-x border-x-borderColor rounded-t-lg text-xs sm:text-base";

const DashboardTabButton = ({ handleSearchTabChange, tab }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-5 mx-auto sm:ms-2">
      <button
        onClick={() => handleSearchTabChange("summary")}
        className={cn(defaultButtonCss, "", {
          "bg-primaryColor text-white": tab === "summary",
        })}
      >
        Summary
      </button>
      <button
        onClick={() => handleSearchTabChange("demographics")}
        className={cn(defaultButtonCss, "", {
          "bg-primaryColor text-white":
            tab === "demographics",
        })}
      >
        Demographics
      </button>
      <button
        onClick={() => handleSearchTabChange("family")}
        className={cn(defaultButtonCss, "", {
          "bg-primaryColor text-white" : tab === "family",
        })}
      >
        Family History
      </button>
    </div>
  );
};

export default DashboardTabButton;