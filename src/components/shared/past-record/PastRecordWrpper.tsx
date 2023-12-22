import { cn } from "@/utilities/cn";
import { Edit2 } from "react-feather";
import { FaRegTrashAlt } from "react-icons/fa";

type Props = {
  children: React.ReactNode;
  noHeading?: boolean;
  className?: string;
  handleDelete?: () => void;
  handleEdit?: () => void;
  isEditAble?: boolean;
  isDeleteAble?: boolean;
};
const PastRecordWrapper = ({
  children,
  noHeading,
  className = " ",
  handleDelete,
  isEditAble,
  handleEdit,
  isDeleteAble,
}: Props) => {
  return (
    <div
      className={cn(
        "md:flex w-full justify-between items-center bg-lightBlueColor text-[12px] py-2 px-5 border rounded ",
        className
      )}
    >
      <div className="flex flex-col gap-1">
        {!noHeading && (
          <div className={cn("flex flex-wrap gap-2 xs:gap-4 mb-1 ")}>
            <p>
              <span className="font-semibold">Encounter Date : </span>
              28-Nov-2023
            </p>
            <p>
              <span className="font-semibold">Facility :</span> Bauleni Mini
              Hospital
            </p>
            <p>
              <span className="font-semibold">Clinician : </span> John Wick
            </p>
          </div>
        )}
        <div className="flex gap-2 flex-wrap">{children}</div>
      </div>
      <div className="flex md:flex-col gap-2 justify-end mt-2 sm:mt-0">
        {/* DELETE BUTTON */}
        {isDeleteAble && (
          <button
            type="button"
            className="flex items-center gap-1 p-1 text-dangerColor"
            onClick={handleDelete}
          >
            <span className="flex gap-1 text-dangerColor items-center">
              <FaRegTrashAlt size={13} className="text-dangerColor" /> Delete
            </span>
          </button>
        )}

        {/* EDIT BUTTON */}
        {isEditAble && (
          <button
            type="button"
            className="flex items-center gap-1 p-1 text-primaryColor"
            onClick={handleEdit}
          >
            <span>
              <Edit2 size={14} className=" text-primaryColor" />
            </span>
            <span className="text-primaryColor">Edit</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default PastRecordWrapper;
