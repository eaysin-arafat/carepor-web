import { cn } from "@/utilities/cn";

const defaultButtonCss =
  " w-[138px] text-primaryColor dark:bg-black hover:bg-primaryHoverColor  dark:hover:bg-primaryHoverColor hover:text-whiteColor bg-whiteColor border-2 !border-primaryColor py-1.5 rounded-full transition-all ease-in-out duration-500 min-w-[84px]";

const TabButton = ({ handleSearchTabChange, search }) => {
  return (
    <div className="flex flex-wrap justify-center gap-5 mt-5">
      <button
        onClick={() => handleSearchTabChange("nrc")}
        className={cn(defaultButtonCss, {
          "bg-primaryColor dark:bg-primaryColor text-whiteColor": search === "nrc",
        })}
      >
        NRC
      </button>
      <button
        onClick={() => handleSearchTabChange("nupn")}
        className={cn(defaultButtonCss, {
          "bg-primaryColor dark:bg-primaryColor text-whiteColor": search === "nupn",
        })}
      >
        NUPN
      </button>
      <button
        onClick={() => handleSearchTabChange("cellPhone")}
        className={cn(defaultButtonCss, {
          "bg-primaryColor dark:bg-primaryColor text-whiteColor": search === "cellPhone",
        })}
      >
        Cell Phone
      </button>
      <button
        onClick={() => handleSearchTabChange("name")}
        className={cn(defaultButtonCss, {
          "bg-primaryColor dark:bg-primaryColor text-whiteColor transition-all ease-in-out":
            search === "name",
        })}
      >
        Full Name
      </button>
    </div>
  );
};

export default TabButton;
