import { cn } from "@/utilities/cn";

const defaultButtonCss =
  " py-4 rounded-t-lg border inline-block p-4 w-40 border dark:border-gray-600 text-base text-grayColor hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-900";

const DashboardTabButton = ({ handleSearchTabChange, tab }) => {
  return (
    <div className="flex flex-wrap justify-center gap-5 mt-5">
      <button
        onClick={() => handleSearchTabChange("summary")}
        className={cn(defaultButtonCss, "", {
          "text-secondaryColor bg-gray-200 dark:bg-gray-900": tab === "summary",
        })}
      >
        Summary
      </button>
      <button
        onClick={() => handleSearchTabChange("demographics")}
        className={cn(defaultButtonCss, "", {
          "text-secondaryColor bg-gray-200 dark:bg-gray-900":
            tab === "demographics",
        })}
      >
        Demographics
      </button>
      <button
        onClick={() => handleSearchTabChange("family")}
        className={cn(defaultButtonCss, "", {
          "text-secondaryColor bg-gray-200 dark:bg-gray-900": tab === "family",
        })}
      >
        Family History
      </button>
    </div>
  );
};

export default DashboardTabButton;
