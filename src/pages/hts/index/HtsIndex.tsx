import { RootState, useAppDispatch } from "@/app/store";
import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { htsModalTypes } from "@/constants/modal-types";
import { clientTypeApiEndpoints } from "@/features/client-type/client-type-api";
import { hivNotTestingReasonApiEndpoints } from "@/features/hiv-not-testing-reasons/hiv-not-testing-reason-api";
import { hivRiskFactorApiEndpoints } from "@/features/hiv-risk-factor/hiv-risk-factor-api";
import { hivTestingReasonApiEndpoints } from "@/features/hiv-testing-reason/hiv-testing-reason-api";
import { HTS, useReadHTSQuery } from "@/features/hts/hts-api";
import {
  openAddModal,
  openEditModal,
  openViewModal,
} from "@/features/modal/modal-slice";
import { useReadServicePointsQuery } from "@/features/service-points/service-points-api";
import { useReadVisitTypesQuery } from "@/features/visit-type/visit-type-api";
import { CookieClient } from "@/hooks/useClientAge";
import useWindowWidth from "@/hooks/useWindow";
import { cookieManager } from "@/utilities/cookie-manager";
import { DateFunc } from "@/utilities/date";
import React from "react";
import { Loader } from "react-feather";
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  determineBiolineTestResult,
  hivTypes,
  lastTestResult,
} from "../constants";
import HtsCreateForm from "../create/Create";
import HtsDetails from "../details/HtsDetails";
import EditHTS from "../edit/Edit";

function HtsIndex() {
  const { addModal, viewModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );
  const [state, setState] = React.useState(1);
  const dispatch = useDispatch();
  const w1100 = useWindowWidth(1100);

  const client = cookieManager.parseCookie<CookieClient>("client");

  // todo: need optimization here for api calling
  // select visit types
  // const selectVisitTypes = useMemo(
  //   () => visitTypeApiEndpoints.readVisitTypes.select(null),
  //   []
  // );
  // const visitTypes = useAppSelector(selectVisitTypes);
  // console.log("visitTypes select", visitTypes);

  const appDispatch = useAppDispatch();

  // todo: need optimization here for api calling

  const { data: visitTypes } = useReadVisitTypesQuery(null);
  const { data: servicePoints } = useReadServicePointsQuery(null);

  // side Effect
  React.useEffect(() => {
    appDispatch(
      hivTestingReasonApiEndpoints.readHIVTestingReasons.initiate(null)
    );
    appDispatch(
      hivNotTestingReasonApiEndpoints.readHIVNotTestingReasons.initiate(null)
    );
    appDispatch(hivRiskFactorApiEndpoints.readHIVRiskFactors.initiate(null));
    appDispatch(clientTypeApiEndpoints.readClientTypes.initiate(null));
  }, [appDispatch]);

  // api hooks
  const {
    data: htses,
    isLoading,
    isSuccess,
    status,
  } = useReadHTSQuery(client?.oid, {
    skip: !client?.oid,
    refetchOnMountOrArgChange: true,
  });

  const handleAddHtsModal = () => {
    dispatch(
      openAddModal({
        modalId: htsModalTypes.htsCreateModal,
        data: null,
      })
    );
  };

  const handleViewHtsModal = (hts: HTS) => {
    dispatch(
      openViewModal({
        modalId: htsModalTypes.htsViewModal,
        data: hts,
      })
    );
  };

  const handleEditModal = (hts: HTS) => {
    dispatch(
      openEditModal({
        modalId: htsModalTypes.htsEditModal,
        data: hts,
      })
    );
  };

  // todo: retest data is not coming from api

  const findVisitType = (visitTypeId: number) => {
    const visitType = visitTypes?.find((visit) => visit.oid === visitTypeId);
    return visitType?.description;
  };

  const findServicePoint = (servicePointId: number) => {
    const servicePoint = servicePoints?.find(
      (service) => service.oid === servicePointId
    );
    return servicePoint?.description;
  };

  return (
    <div className={`${w1100 ? "mt-12" : ""}`}>
      {
        /* HTS Create Modal */
        addModal?.isOpen &&
          addModal?.modalId === htsModalTypes.htsCreateModal && (
            <HtsCreateForm />
          )
      }

      {viewModal?.isOpen &&
        viewModal?.modalId === htsModalTypes.htsViewModal && <HtsDetails />}

      {editModal?.isOpen &&
        editModal?.modalId === htsModalTypes.htsEditModal && <EditHTS />}

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
        </div>
      </div>
    </div>
  );
}

export default HtsIndex;
