import { Edit2, Trash2 } from "react-feather";

const ReviewOfSystemCardItem = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded">
      <div className="text-xs">
        <p className="font-poppins flex gap-2">
          <span className="font-semibold whitespace-nowrap">
            Physical System :
          </span>
          <span> Respiratory system </span>
        </p>
        <p className="font-poppins flex gap-2">
          <span className="font-semibold">Note :</span>
          <span> heart is not working well</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Trash2 size={16} color="red" className="cursor-pointer" />
        <button className="flex items-center gap-1 text-[#1890FF] ">
          <Edit2 size={16} color="#1890FF" />
          <p className="text-[#1890FF]">Edit</p>
        </button>
      </div>
    </div>
  );
};

export default ReviewOfSystemCardItem;
