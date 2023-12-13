import { cn } from "@/utilities/cn";

// const defaultButtonCss =
//   " w-[138px] text-white bg-primaryColor hover:bg-primaryHoverColor  hover:text-white bg-whiteColor border-2 !border-primaryColor py-1.5 rounded-full transition-all ease-in-out duration-500 min-w-[84px]";

const defaultButtonCss =
  " w-[138px] py-2.5 rounded-full border border-primaryColor hover:bg-primaryHoverColor hover:text-white min-w-[84px]";

const TabButton = ({ handleSearchTabChange, search }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-5">
      <button
        onClick={() => handleSearchTabChange("nrc")}
        className={cn(defaultButtonCss, {
          "bg-buttonBg text-white": search === "nrc",
        })}
      >
        NRC
      </button>
      <button
        onClick={() => handleSearchTabChange("nupn")}
        className={cn(defaultButtonCss, {
          "bg-buttonBg text-white": search === "nupn",
        })}
      >
        NUPN
      </button>
      <button
        onClick={() => handleSearchTabChange("cellPhone")}
        className={cn(defaultButtonCss, {
          "bg-buttonBg text-white": search === "cellPhone",
        })}
      >
        Cell Phone
      </button>
      <button
        onClick={() => handleSearchTabChange("name")}
        className={cn(defaultButtonCss, {
          "bg-buttonBg  text-white transition-all ease-in-out":
            search === "name",
        })}
      >
        Full Name
      </button>
    </div>
  );
};

export default TabButton;
