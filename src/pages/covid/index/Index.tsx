import { RootState } from "@/app/store";
import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import RequestError from "@/components/core/error/RequestError";
import TableLoader from "@/components/core/loader/TableLoader";
import NotFound from "@/components/core/not-found/NotFound";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { covidModalTypes } from "@/constants/modal-types";
import { EnumEncounterType } from "@/enum/encounter-type";
import { EnumSourceOfAlert, EnumYesNo } from "@/enum/enumerators";
import { useReadCovidByClientIdQuery } from "@/features/covid/covid-api";
import { openAddModal, openViewModal } from "@/features/modal/modal-slice";
import useBaseDataCreate from "@/hooks/useBaseDataCreate";
import { TypeCovidRecord } from "@/types/module-types/covid";
import { DateFunc, sortByDate } from "@/utilities/date";
import { useState } from "react";
import { PlusCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import CovidCreate from "../create/Create";
import CovidDetails from "../details/Details";
import CovidEdit from "../edit/Edit";

const CovidIndex = () => {
  const { Covid } = EnumEncounterType;
  const [baseData] = useBaseDataCreate(Covid);

  // const { addModal } = useSelector((state: RootState) => state.modal);
  const { viewModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );
  const dispatch = useDispatch();

  // pagination state
  const [activePage, setActivePage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  // Read Covid By ClientId
  const {
    data: covidPageRecord,
    isLoading,
    isSuccess,
    isError,
  } = useReadCovidByClientIdQuery(
    { key: baseData?.clientId, page: activePage, pageSize: itemPerPage },
    {
      skip: !baseData?.clientId,
      refetchOnMountOrArgChange: true,
    }
  );

  // destructure data
  const { data: covidRecord, totalItems } = covidPageRecord || {};

  const handleAddCovid = () => {
    dispatch(
      openAddModal({
        modalId: covidModalTypes.covidCreateModal,
        data: null,
      })
    );
  };
  const handleViewCovid = (data: TypeCovidRecord) => {
    dispatch(
      openViewModal({
        modalId: covidModalTypes.covidViewModal,
        data: data,
      })
    );
  };

  console.log(totalItems);
  console.log(covidPageRecord?.data);

  return (
    <div>
      {/* Modal Components  */}
      <CovidCreate />

      {viewModal?.modalId === covidModalTypes.covidViewModal && (
        <CovidDetails />
      )}
      {editModal?.modalId === covidModalTypes.covidEditModal && <CovidEdit />}

      <div className="flex justify-between">
        <h2 className="heading_2">Covid</h2>
        <button onClick={handleAddCovid} className="main_btn px-5 py-2.5">
          <PlusCircle className="mr-2" /> New Record{" "}
        </button>
      </div>
      <div className="mt-5 bg-whiteBgColor pb-5 rounded-lg">
        <Table isRounded className="shadow min-w-[1100px]">
          <TableHeader
            className="bg-tableHeadColor text-textColor"
            isAction
            actionWidth="min-w-[130px]"
            title={[
              {
                title: "Source of Alert",
                w: "20%",
              },
              {
                title: "Date of Notification",
                w: "20%",
              },
              {
                title: "Oxygen Saturation",
                w: "20%",
              },
              {
                title: "ICU Admission",
                w: "20%",
              },
              {
                title: "Date First Positive",
                w: "20%",
              },
            ]}
          />

          {isLoading && !isError && (
            <>
              <TableLoader />
              <TableLoader />
            </>
          )}

          {!isLoading && isError && <RequestError />}
          {!isLoading &&
            isSuccess &&
            Array.isArray(covidRecord) &&
            covidRecord.length == 0 && <NotFound />}
          {!isLoading &&
            isSuccess &&
            Array.isArray(covidRecord) &&
            covidRecord.length > 0 &&
            sortByDate(covidRecord).map((item, index) => (
              <TableBody
                index={index}
                key={index}
                isAction
                actionWidth="min-w-[130px]"
                viewResultHandler={() => handleViewCovid(item)}
                btn={{
                  viewResult: "View Details",
                }}
                item={[
                  { title: EnumSourceOfAlert[item?.sourceOfAlert], w: "20%" },
                  {
                    title: DateFunc.formatDate(item?.notificationDate),
                    w: "20%",
                  },
                  { title: item?.oxygenSaturation, w: "20%" },
                  { title: EnumYesNo[+item?.isICUAdmitted], w: "20%" },
                  {
                    title: DateFunc.formatDate(item?.dateFirstPositive),
                    w: "20%",
                  },
                ]}
              />
            ))}
        </Table>
        <div className="flex justify-end mx-8">
          <CustomPagination
            activePage={activePage}
            itemsCountPerPage={itemPerPage}
            setActivePage={setActivePage}
            totalItemsCount={totalItems}
            setItemPerPage={setItemPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default CovidIndex;
