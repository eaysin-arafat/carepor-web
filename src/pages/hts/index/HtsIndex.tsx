import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { htsModalTypes } from "@/constants/modal-types";
import { DateFunc } from "@/utilities/date";
import { Loader } from "react-feather";
import { FiPlusCircle } from "react-icons/fi";
import {
  determineBiolineTestResult,
  hivTypes,
  lastTestResult,
} from "../constants";
import HtsCreateForm from "../create/Create";
import HtsDetails from "../details/HtsDetails";
import EditHTS from "../edit/Edit";
import useHtsIndex from "./useHtsIndex";

function HtsIndex() {
  const {
    addModal,
    editModal,
    findServicePoint,
    findVisitType,
    handleAddHtsModal,
    handleEditModal,
    handleViewHtsModal,
    htses,
    isLoading,
    isSuccess,
    setState,
    state,
    status,
    viewModal,
    w1100,
  } = useHtsIndex();
  return (
    <div className={`${w1100 ? "mt-12" : ""}`}>
      <div className=" font-poppins">
        <div className="">
          <div className="">
            <div className="md:flex justify-between items-center">
              <h2 className="heading_2">Vitals & Anthropometry</h2>
              <div className="flex gap-4 mt-3">
                <button
                  onClick={handleAddHtsModal}
                  className="main_btn py-2 px-5 gap-1 inline-flex"
                >
                  <FiPlusCircle className="" /> Add HTS
                </button>
              </div>
            </div>
            <div className="mt-5 bg-whiteBgColor pb-5 rounded-lg">
              <Table isRounded className="shadow min-w-[1100px]">
                <TableHeader
                  className="bg-tableHeadColor text-textColor"
                  isAction
                  actionWidth="min-w-[180px]"
                  title={[
                    {
                      title: "Visit Type",
                      w: "10%",
                    },
                    {
                      title: "Service Point",
                      w: "10%",
                    },
                    {
                      title: "Last Test Result",
                      w: "15%",
                    },
                    {
                      title: "Consent",
                      w: "15%",
                    },
                    {
                      title: "Determine",
                      w: "10%",
                    },
                    {
                      title: "HIV Type",
                      w: "15%",
                    },
                    {
                      title: "Retest Date",
                      w: "20%",
                    },
                  ]}
                />

                {/* LOADING SPINNER */}
                {isLoading && status === "pending" && (
                  <div className="flex justify-center items-center h-52">
                    <Loader size={40} />
                  </div>
                )}

                {/* NO DATA */}
                {isSuccess && !htses?.length && (
                  <div className="flex justify-center items-center h-52">
                    <p className="text-lg text-gray-400">No Data Found</p>
                  </div>
                )}

                {/* EMPTY STATE */}
                {htses?.map((item, index) => (
                  <TableBody
                    index={index}
                    isAction
                    actionWidth="min-w-[180px]"
                    viewResultHandler={() => handleEditModal(item)}
                    btnOutlineHandler={() => handleViewHtsModal(item)}
                    btn={{
                      viewResult: "Edit",
                      btnOutline: "View Details",
                    }}
                    item={[
                      { title: findVisitType(item?.visitTypeId), w: "10%" },
                      {
                        title: findServicePoint(item?.servicePointId),
                        w: "10%",
                      },
                      { title: lastTestResult[item?.lastTestResult], w: "15%" },
                      { title: item?.hasConsented ? "Yes" : "No", w: "15%" },
                      {
                        title:
                          determineBiolineTestResult[item?.determineTestResult],
                        w: "10%",
                      },
                      { title: hivTypes[item?.partnerHIVStatus], w: "15%" },
                      {
                        title: item?.lastTested
                          ? DateFunc.toFormatted(item?.lastTested)
                          : null,
                        w: "20%",
                      },
                    ]}
                  />
                ))}
              </Table>
              <div className="flex justify-end mx-8">
                <CustomPagination
                  activePage={1}
                  itemsCountPerPage={state}
                  setActivePage={setState}
                  totalItemsCount={100}
                  setItemPerPage={() => {}}
                />
              </div>
            </div>
          </div>
          {
            /* HTS CREATE */
            addModal?.isOpen &&
              addModal?.modalId === htsModalTypes.htsCreateModal && (
                <HtsCreateForm />
              )
          }

          {/* HTS DETAILS */}
          {viewModal?.isOpen &&
            viewModal?.modalId === htsModalTypes.htsViewModal && <HtsDetails />}

          {/* HTS EDIT */}
          {editModal?.isOpen &&
            editModal?.modalId === htsModalTypes.htsEditModal && <EditHTS />}
        </div>
      </div>
    </div>
  );
}

export default HtsIndex;
