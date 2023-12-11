import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Table from "@/components/core/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { wardModalTypes } from "@/constants/modal-types";
import { Ward } from "@/features/ward/ward-api";
import useWindowWidth from "@/hooks/useWindow";
import { URLBeds } from "@/routers/facility-settings";
import { cn } from "@/utilities/cn";
import { Loader, Plus } from "react-feather";
import { BiLeftArrowAlt } from "react-icons/bi";
import CreateWard from "../create/Create";
import EditWard from "../edit/Edit";
import useWard from "./useWard";

function Wards() {
  const w500 = useWindowWidth(500);

  const {
    addModal,
    editModal,
    handleAddFirm,
    handleEditFirm,
    isLoading,
    navigate,
    status,
    wards,
    isSuccess,
  } = useWard();

  return (
    <div className="m-5 ">
      <h1 className="text-2xl mb-1 flex items-center gap-5">
        <BiLeftArrowAlt
          className="cursor-pointer"
          onClick={() => navigate(-1)}
          size={30}
        />
        Wards
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
            <Plus /> Add Wards
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
                  w: "30%",
                  sortIcon: true,
                },
                {
                  title: "Firm",
                  w: "30%",
                  sortIcon: true,
                },
                {
                  title: "Ward",
                  w: "20%",
                  sortIcon: true,
                },
              ]}
            />

            {/* EMPTY DATA MESSAGE */}
            {isSuccess && status === "fulfilled" && wards?.length === 0 && (
              <div className="flex justify-center items-center h-40">
                <p className="text-xl text-gray-500">No Wards Found</p>
              </div>
            )}

            {/* LOADING SPINNER */}
            {(isLoading || status === "pending") && (
              <div className="flex justify-center py-4">
                <Loader size={40} />
              </div>
            )}

            {/* TABLE DATA */}
            {wards?.map((item: Ward, index) => (
              <TableBody
                index={index}
                actionWidth="w-[160px]"
                isAction
                btn={{
                  btnOutline: "Edit",
                  viewResult: "Beds",
                }}
                btnOutlineHandler={() => handleEditFirm(item)}
                viewResultHandler={() =>
                  navigate(URLBeds(item?.oid?.toString()))
                }
                item={[
                  { title: (index + 1).toString(), w: "20%" },
                  { title: item?.firm?.department?.description, w: "30%" },
                  { title: item?.firm?.description, w: "30%" },
                  { title: item?.description, w: "20%" },
                ]}
              />
            ))}
          </Table>
        </div>

        {/* ADD MODAL */}
        {addModal?.isOpen && addModal?.modalId === wardModalTypes.addWard && (
          <CreateWard />
        )}

        {/* EDIT MODAL */}
        {editModal?.isOpen &&
          editModal?.modalId === wardModalTypes.editWard && <EditWard />}
      </div>
    </div>
  );
}

export default Wards;
