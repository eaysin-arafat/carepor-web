import Input from "@/components/core/form-elements/Input";
import Table from "@/components/core/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { bedModalTypes } from "@/constants/modal-types";
import useWindowWidth from "@/hooks/useWindow";
import { cn } from "@/utilities/cn";
import { Loader, Plus } from "react-feather";
import { BiLeftArrowAlt } from "react-icons/bi";
import CreateBed from "../create/Create";
import EditBed from "../edit/Edit";
import useBeds from "./useBeds";

function Beds() {
  const w500 = useWindowWidth(500);

  const {
    addModal,
    beds,
    editModal,
    handleAddBed,
    handleEditBed,
    isLoading,
    isSuccess,
    navigate,
    status,
    handleFilter,
    handleSearchChange,
    search,
  } = useBeds();

  return (
    <div className="m-5 ">
      <h1 className="text-2xl mb-1 flex items-center gap-5">
        <BiLeftArrowAlt
          className="cursor-pointer"
          onClick={() => navigate(-1)}
          size={30}
        />
        Beds
      </h1>
      <div className=" border p-5 border-borderColor bg-whiteBgColor rounded-md">
        <div
          className={cn("grid grid-cols-4 gap-5 justify-between items-end", {
            "grid-cols-2 gap-2": w500,
          })}
        >
          <div className="col-span-3">
            <Input
              label="Search"
              value={search}
              onChange={handleSearchChange}
            />
          </div>

          <button
            className="bg-primaryColor flex items-center gap-2 justify-center text-sm py-3.5 text-white rounded-md px-1"
            onClick={handleAddBed}
          >
            <Plus /> Add Bed
          </button>
        </div>
        <div className="mt-5">
          <Table className="min-w-[1000px]">
            <TableHeader
              className="bg-primaryHoverColor"
              actionWidth="w-[100px]"
              isAction
              title={[
                {
                  title: "#",
                  w: "10%",
                },
                {
                  title: "Department",
                  w: "25%",
                },
                {
                  title: "Firm",
                  w: "25%",
                },
                {
                  title: "Ward",
                  w: "20%",
                },
                {
                  title: "Bed",
                  w: "20%",
                },
              ]}
            />

            {/* EMPTY DATA MESSAGE */}
            {isSuccess && status === "fulfilled" && beds?.length === 0 && (
              <div className="flex justify-center items-center h-40">
                <p className="text-xl text-gray-500">No Beds Found</p>
              </div>
            )}

            {/* LOADING SPINNER */}
            {(isLoading || status === "pending") && (
              <div className="flex justify-center h-40 items-center">
                <Loader size={40} />
              </div>
            )}

            {/* ERROR */}
            {beds
              ?.slice()
              ?.filter(handleFilter)
              ?.map((item, index) => (
                <TableBody
                  index={index}
                  actionWidth="w-[100px]"
                  isAction
                  btn={{
                    btnOutline: "Edit",
                  }}
                  btnOutlineHandler={() => handleEditBed(item)}
                  item={[
                    { title: (index + 1).toString(), w: "10%" },
                    {
                      title: item?.ward?.firm?.department?.description,
                      w: "25%",
                    },
                    { title: item?.ward?.firm?.description, w: "25%" },
                    { title: item?.ward?.description, w: "20%" },
                    { title: item?.description, w: "20%" },
                  ]}
                />
              ))}
          </Table>
        </div>

        {/* ADD MODAL */}
        {addModal?.isOpen && addModal?.modalId === bedModalTypes.addBed && (
          <CreateBed />
        )}

        {/* EDIT MODAL */}
        {editModal?.isOpen && editModal?.modalId === bedModalTypes.editBed && (
          <EditBed />
        )}
      </div>
    </div>
  );
}

export default Beds;
