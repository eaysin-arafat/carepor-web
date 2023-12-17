import { BsTrash } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";

const InvestigationCartCard = ({
  dataArray,
  handleEdit,
  handleDelete,
}: {
  handleEdit?: React.MouseEventHandler;
  handleDelete?: React.MouseEventHandler;
  dataArray: { data: React.ReactNode; title: string }[];
}) => {
  return (
    <div className="bg-lightBlueColor rounded-lg h-fit p-4 mt-3 mb-5">
      <div className="flex flex-wrap gap-4 text-xs">
        {dataArray?.map((item) => {
          if (item?.data) {
            return (
              <p>
                <span className="font-semibold">{item.title} : </span>
                &nbsp;{item.data}
              </p>
            );
          }
        })}
      </div>
      <div className="flex items-center justify-end text-xs gap-2">
        <button type="button" onClick={handleDelete} className="text-red-500">
          <BsTrash />
        </button>
        <button
          type="button"
          onClick={handleEdit}
          className="text-primaryColor flex"
        >
          <MdOutlineModeEdit />
          Edit
        </button>
      </div>
    </div>
  );
};

export default InvestigationCartCard;
