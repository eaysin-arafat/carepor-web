import { Edit2, Trash2 } from "react-feather";

const AllergiesCardItem = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 px-2 py-2 rounded gap-2">
      <div>
        <p className="text-sm">
          <b className="font-medium">&nbsp;Allergy Name : &nbsp;</b> Drug
          Allergy
          <b className="font-medium"> &nbsp;Drug Type : &nbsp; </b> NSAIDS
          &nbsp;
          <b className="font-medium">Severity Name : &nbsp;</b> NSAIDS
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Trash2 size={16} color="red" className="cursor-pointer" />
        <button className="flex items-center gap-1 text-[#1890FF]">
          <Edit2 size={16} color="#1890FF" />
          <p className="text-[#1890FF]">Edit</p>
        </button>
      </div>
    </div>
  );
};

export default AllergiesCardItem;
