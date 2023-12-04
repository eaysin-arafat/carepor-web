import { cn } from "@/utilities/cn";

const defaultButtonCss =
  " py-4 rounded-t-lg border inline-block px-2 border-2 border-b-0 border-[#E9E7F0] dark:border-gray-600 text-[12px] sm:text-[16px] font-medium text-grayColor hover:text-gray-900 dark:hover:text-gray-200 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 bg-white";

const DashboardTabButton = ({ handleSearchTabChange, tab }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-5 mx-auto sm:ms-2 transform -translate-y-[72px] sm:-translate-y-[78px]">
      <button
        onClick={() => handleSearchTabChange("summary")}
        className={cn(defaultButtonCss, "", {
          "text-secondaryColor bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-900": tab === "summary",
        })}
      >
        Summary
      </button>
      <button
        onClick={() => handleSearchTabChange("demographics")}
        className={cn(defaultButtonCss, "", {
          "text-secondaryColor bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-900":
            tab === "demographics",
        })}
      >
        Demographics
      </button>
      <button
        onClick={() => handleSearchTabChange("family")}
        className={cn(defaultButtonCss, "", {
          "text-secondaryColor bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-900" : tab === "family",
        })}
      >
        Family History
      </button>
    </div>
  );
};

export default DashboardTabButton;
