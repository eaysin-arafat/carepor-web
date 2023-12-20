import { RootState } from "@/app/store";
import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import Select from "@/components/core/form-elements/Select";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { painRecordsModalTypes } from "@/constants/modal-types";
import { EnumPainRecords } from "@/enum/enumerators";
import {
  closeAddModal,
  closeEditModal,
  openAddModal,
  openEditModal,
} from "@/features/modal/modal-slice";
import {
  PainRecord,
  useReadPainRecordByClientQuery,
} from "@/features/pain-record/pain-record-api";
import { CookieClient } from "@/hooks/useClientAge";
import { cookieManager } from "@/utilities/cookie-manager";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PainRecordsCreate from "../create/Create";
import EditPainRecord from "../edit/Edit";

function PainRecordsHistory() {
  const [state, setState] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // * Redux
  const { addModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );
  const client = cookieManager.parseCookie<CookieClient>("client");

  const { data: painRecords } = useReadPainRecordByClientQuery(client?.oid, {
    skip: !client?.oid,
    refetchOnMountOrArgChange: true,
  });

  console.log("painRecords", painRecords);

  // * Hokes
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  const handleOpenAddModal = () => {
    dispatch(
      openAddModal({
        modalId: painRecordsModalTypes.painRecordCreate,
        data: null,
      })
    );
  };

  const closeEdit = () => {
    dispatch(closeEditModal());
  };

  const handleOpenEditModal = (item: PainRecord) => {
    dispatch(
      openEditModal({
        modalId: painRecordsModalTypes.editPainRecord,
        data: item,
      })
    );
  };

  const handlePainRecordFilter = (item: PainRecord) => {
    if (!searchQuery) return true;
    return item.painScaleId === +searchQuery;
  };

  const renderPainRecords = () => {
    return Object.keys(EnumPainRecords).map((key) => (
      <option key={key} value={key}>
        {key + "-" + EnumPainRecords[key]}
      </option>
    ));
  };

  return (
    <div>
      {addModal?.modalId === painRecordsModalTypes.painRecordCreate && (
        <PainRecordsCreate toggler={closeModal} />
      )}

      {editModal?.isOpen &&
        editModal?.modalId === painRecordsModalTypes.editPainRecord && (
          <EditPainRecord toggler={closeEdit} />
        )}

      <h1 className="mb-5 text-xl">Pain Scaling Tool</h1>
      <div className="grid grid-cols-5 gap-5 mb-3 items-end">
        <div className="col-span-4">
          <Select
            label="Pain Scales"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          >
            {renderPainRecords()}
          </Select>
        </div>
        <div>
          <div className="flex items-end justify-end w-full">
            <button
              className="px-2 py-3 bg-buttonBg w-full rounded-full text-center text-white"
              onClick={handleOpenAddModal}
            >
              Add Encounter
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="w-full">
          <Table>
            <TableHeader
              isAction
              title={[
                {
                  title: "Pain Scale",
                  w: "70%",
                },
                {
                  title: "Pain Record",
                  w: "30%",
                },
              ]}
            />
            {painRecords?.filter(handlePainRecordFilter)?.map((item, index) => (
              <TableBody
                index={index}
                isAction
                handleEditItem={() => handleOpenEditModal(item)}
                btn={{
                  edit: true,
                }}
                item={[
                  {
                    title:
                      item?.painScaleId +
                      "-" +
                      EnumPainRecords[item?.painScaleId],
                    w: "70%",
                  },
                  { title: item.painScales ? "Yes" : "No", w: "30%" },
                ]}
              />
            ))}
          </Table>
          <div className="flex justify-end">
            <CustomPagination
              activePage={50}
              itemsCountPerPage={state}
              setActivePage={setState}
              totalItemsCount={1000}
              setItemPerPage={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PainRecordsHistory;
