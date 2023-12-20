import { RootState } from "@/app/store";
import RequestError from "@/components/core/error/RequestError";
import CardLoader from "@/components/core/loader/CardLoader";
import DataRow from "@/components/core/table/DataRow";
import { birthRecordModalTypes } from "@/constants/modal-types";
import { EnumEncounterType } from "@/enum/encounter-type";
import {
  EnumBoolYesNo,
  EnumInformantRelationship,
  EnumOrigin,
} from "@/enum/enumerators";
import { useReadBirthRecordByClientIdQuery } from "@/features/birth-record/birth-record-api";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
import useBaseDataCreate from "@/hooks/useBaseDataCreate";
import useClinician from "@/hooks/useClinician";
import useFindFacility from "@/hooks/useFindFacility";
import { DateFunc } from "@/utilities/date";
import { Plus } from "react-feather";
import { MdOutlineModeEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import BirthRecordForm from "../create/BirthRecordForm";

function BirthRecord() {
  const dispatch = useDispatch();

  // Hooks
  const { BirthRecords } = EnumEncounterType;
  const [baseDataCreate] = useBaseDataCreate(BirthRecords);
  const { getFacilityName } = useFindFacility();
  const { getClinicianFullName } = useClinician();

  // Read birth record
  const {
    data: birthRecord,
    isError,
    isSuccess,
    isLoading,
  } = useReadBirthRecordByClientIdQuery(baseDataCreate?.clientId, {
    skip: !baseDataCreate?.clientId,
  });

  // Object transform from response data
  const record =
    isSuccess && Array.isArray(birthRecord) ? birthRecord[0] : null;

  // Redux Modal state and data
  const { addModal } = useSelector((state: RootState) => state.modal);

  // modal closer
  const closeModal = () => {
    dispatch(closeAddModal());
  };

  // If record is null is perform as create otherwise perform as update form
  const handleOpenCreateEditModal = () => {
    dispatch(
      openAddModal({
        modalId: birthRecordModalTypes.birthRecordCreate,
        data: record,
      })
    );
  };

  return (
    <div>
      {addModal?.modalId === birthRecordModalTypes.birthRecordCreate && (
        <BirthRecordForm toggler={closeModal} />
      )}
      <h1 className="mb-5 text-xl">Birth Record</h1>
      {/* Error manage */}
      {!isLoading && isError && !isSuccess && (
        <div className="flex mb-5 justify-center items-center h-[50vh] border bg-whiteBgColor rounded border-dashed border-primaryColor shadow">
          <RequestError />
          {/* <TableLoader /> */}
        </div>
      )}

      {isLoading && !isError && !isSuccess && (
        <div className="flex mb-5 justify-center items-center h-[50vh] border bg-whiteBgColor rounded border-dashed border-primaryColor shadow">
          <CardLoader />
          {/* <TableLoader /> */}
        </div>
      )}
      {!record && !isLoading && !isError && (
        <div className="flex mb-5 justify-center items-center h-[50vh] border bg-whiteBgColor rounded border-dashed border-primaryColor shadow">
          <div className="flex justify-center flex-col">
            <h1 className="mb-5 text-2xl">Birth Record Not Created</h1>
            <button
              className="flex items-center justify-center gap-1 px-5 py-3 bg-buttonBg rounded-full text-center text-white "
              onClick={handleOpenCreateEditModal}
            >
              <Plus size={20} /> Create
            </button>
          </div>
        </div>
      )}

      {!isLoading && !isError && record && isSuccess && (
        <div className="border border-borderColor rounded bg-whiteBgColor">
          {/* <h1 className="border-b border-b-borderColor p-3 text-xl">
            Birth Records
          </h1> */}

          <div className="p-5">
            <div className="flex justify-between items-center mb-5">
              <div className="flex gap-5">
                <b>Date :</b> <p>{DateFunc.formatDate(record?.dateCreated)}</p>
              </div>
              <div className="flex gap-5">
                <b>Facility :</b> <p>{getFacilityName(record?.createdIn)}</p>
              </div>
              <div className="flex gap-5">
                <b>Clinician :</b>{" "}
                <p>{getClinicianFullName(record?.createdBy)}</p>
              </div>
              {DateFunc.isBetween24Hours(record?.dateCreated) && (
                <div className="flex gap-5">
                  <button
                    className="flex items-center justify-center gap-1 text-primaryColor  text-center"
                    onClick={handleOpenCreateEditModal}
                  >
                    <MdOutlineModeEdit className="" /> Edit
                  </button>
                </div>
              )}
            </div>

            <div>
              <h1 className="text-lg mb-3 border-b border-b-borderColor">
                Particulars :
              </h1>
              <DataRow
                isHideOnEmptyData
                title="Is Birth Record Given?"
                data={record?.isBirthRecordGiven == true ? "Yes" : "No"}
                titleClass="xs:min-w-[245px]"
              />
              <DataRow
                isHideOnEmptyData
                title="Origin"
                data={EnumOrigin[record?.origin]}
                titleClass="xs:min-w-[245px]"
              />
              <DataRow
                isHideOnEmptyData
                title="Is Under Five Card Given?"
                data={
                  record?.isBirthRecordGiven &&
                  EnumBoolYesNo[record?.isUnderFiveCardGiven.toString()]
                }
                titleClass="xs:min-w-[245px]"
              />
              <DataRow
                isHideOnEmptyData
                title="Under Five Card Number"
                data={record?.underFiveCardNumber}
                titleClass="xs:min-w-[245px]"
              />

              <h1 className="text-lg mb-3 mt-5 border-b border-b-borderColor">
                Particulars :
              </h1>
              <DataRow
                isHideOnEmptyData
                title="First Name"
                data={record?.informantFirstName}
                titleClass="xs:min-w-[245px]"
              />
              <DataRow
                isHideOnEmptyData
                title="Surname"
                data={record?.informantSurname}
                titleClass="xs:min-w-[245px]"
              />
              <DataRow
                isHideOnEmptyData
                title="Nickname"
                data={record?.informantNickname}
                titleClass="xs:min-w-[245px]"
              />
              <DataRow
                isHideOnEmptyData
                title="Cellphone Number"
                data={
                  record?.informantCellphone &&
                  record?.informantCellphoneCountryCode
                    ? record?.informantCellphoneCountryCode +
                      " " +
                      record?.informantCellphone
                    : ""
                }
                titleClass="xs:min-w-[245px]"
              />
              <DataRow
                isHideOnEmptyData
                title="Landline Number"
                data={
                  record?.informantLandline &&
                  record?.informantLandlineCountryCode
                    ? record?.informantLandline +
                      " " +
                      record?.informantLandlineCountryCode
                    : ""
                }
                titleClass="xs:min-w-[245px]"
              />
              <DataRow
                isHideOnEmptyData
                title="Relationship to Child"
                data={EnumInformantRelationship[record?.informantRelationship]}
                titleClass="xs:min-w-[245px]"
              />
              <DataRow
                isHideOnEmptyData
                title="Other Relationship"
                data={
                  record?.informantRelationship == 13 &&
                  record?.informantOtherRelationship
                }
                titleClass="xs:min-w-[245px]"
              />
              <DataRow
                isHideOnEmptyData
                title="City/Town/Village"
                data={record?.informantCity}
                titleClass="xs:min-w-[245px]"
              />
              <DataRow
                isHideOnEmptyData
                title="Cmpd Street No."
                data={record?.informantStreetNo}
                titleClass="xs:min-w-[245px]"
              />
              <DataRow
                isHideOnEmptyData
                title="PO Box, Pvt Bag"
                data={record?.informantPOBox}
                titleClass="xs:min-w-[245px]"
              />
              <DataRow
                isHideOnEmptyData
                title="Landmark"
                data={record?.informantLandmark}
                titleClass="xs:min-w-[245px]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BirthRecord;
