import useWindowWidth from "@/hooks/useWindow";
import { cn } from "@/utilities/cn";
import { Edit } from "react-feather";
import { BiPlusCircle } from "react-icons/bi";

type Props = {
  title: string;
  modalHandler?: () => void;
  editHandler?: () => void;
  isEdit?: boolean;
};
const FormHeading = ({
  title = "Present Complaints",
  modalHandler = () => {},
  isEdit,
  editHandler,
}: Props) => {
  const w650 = useWindowWidth(650);
  const w580 = useWindowWidth(580);
  const w400 = useWindowWidth(400);

  return (
    <div className="border border-borderColor bg-lightBlueColor rounded-md mb-3 overflow-hidden shadow-sm transition-shadow ease-in-out duration-300">
      <div className="flex items-center justify-between py-2 px-3">
        <h2
          className={`${
            w650 ? (w400 ? "text-xs" : "text-sm") : "text-1xl"
          }  font-medium font-poppins text-secondaryColor`}
        >
          {title}
        </h2>
        <div className="flex gap-2">
          <button
            className={cn(
              "flex items-center text-base border border-borderColor p-1 px-3 rounded bg-primaryColor  gap-1 cursor-pointer ",
              { "bg-gray-400 cursor-not-allowed": !isEdit },
              { "p-1": w580 }
            )}
            onClick={editHandler}
            disabled
          >
            <Edit size={15} color="#fff" />
            {!w580 && (
              <span
                className={`${w650 ? "text-[12px]" : "text-[14px]"} text-white`}
              >
                Edit Record
              </span>
            )}
          </button>

          <button
            className={cn(
              "flex items-center text-base border border-borderColor p-1 px-3 rounded bg-primaryColor  gap-1 cursor-pointer",
              { "p-1": w580 }
            )}
            onClick={modalHandler}
          >
            <BiPlusCircle size={15} color="#fff" />
            {!w580 && (
              <span
                className={`${w650 ? "text-[12px]" : "text-[14px]"} text-white`}
              >
                Add Record
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormHeading;
