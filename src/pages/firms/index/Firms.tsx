import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Table from "@/components/core/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { firmModalTypes } from "@/constants/modal-types";
import useWindowWidth from "@/hooks/useWindow";
import { URLWards } from "@/routers/facility-settings";
import { cn } from "@/utilities/cn";
import { Plus } from "react-feather";
import { BiLeftArrowAlt } from "react-icons/bi";
import CreateFirm from "../create/Create";
import EditFirm from "../edit/Edit";
import useFirm from "./useFirm";

function Firms() {
  const w500 = useWindowWidth(500);

  const {
    addModal,
    editModal,
    firms,
    handleAddFirm,
    handleEditFirm,
    navigate,
  } = useFirm();

  return (
    <div className="m-5 ">
      <h1 className="text-2xl mb-1 flex items-center gap-5">
        <BiLeftArrowAlt
          className="cursor-pointer"
          onClick={() => navigate(-1)}
          size={30}
        />
        Firms
      </h1>
      <div className=" border p-5 border-borderColor bg-whiteBgColor rounded-md">
        <div
          className={cn("grid grid-cols-4 gap-5 justify-between items-end", {
            "grid-cols-2 gap-2": w500,
          })}
        >
          <Input label="Search" />
          <Select label="Facility">
            <option value="">Hello</option>
          </Select>
          <Select label="Designation">
            <option value="">Designation</option>
          </Select>
          <button
            className="bg-primaryColor flex items-center gap-2 justify-center text-sm py-3.5 text-white rounded-md px-1"
            onClick={handleAddFirm}
          >
            <Plus /> Add Firms
          </button>
        </div>
        <div className="mt-5">
          <Table className="min-w-[1000px]">
            <TableHeader
              className="bg-primaryHoverColor"
              actionWidth="w-[180px]"
              isAction
              title={[
                {
                  title: "#",
                  w: "20%",
                  sortIcon: false,
                },
                {
                  title: "Department",
                  w: "35%",
                  sortIcon: true,
                },
                {
                  title: "Firm",
                  w: "35%",
                  sortIcon: true,
                },
              ]}
            />
            {firms?.map((item, index) => (
              <TableBody
                index={index}
                actionWidth="w-[160px]"
                isAction
                btn={{
                  viewResult: "Wards",
                  btnOutline: "Edit",
                }}
                btnOutlineHandler={() => handleEditFirm(item)}
                viewResultHandler={() =>
                  navigate(URLWards(item?.oid?.toString()))
                }
                item={[
                  { title: (index + 1).toString(), w: "20%" },
                  { title: item.description, w: "35%" },
                  { title: item.department?.description, w: "35%" },
                ]}
              />
            ))}
          </Table>
        </div>

        {/* ADD MODAL */}
        {addModal.isOpen && addModal?.modalId === firmModalTypes.addFirm && (
          <CreateFirm />
        )}

        {/* EDIT MODAL */}
        {editModal.isOpen && editModal?.modalId === firmModalTypes.editFirm && (
          <EditFirm />
        )}
      </div>
    </div>
  );
}

export default Firms;
