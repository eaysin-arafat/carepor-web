import { RootState } from "@/app/store";
import DataRow from "@/components/core/table/DataRow";
import { birthRecordModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
import { Plus } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import BirthRecordCreate from "../create/Create";

function BirthRecordHistory() {
  // * Redux
  const { addModal } = useSelector((state: RootState) => state.modal);

  // * Hokes
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      {addModal?.modalId === birthRecordModalTypes.birthRecordCreate && (
        <BirthRecordCreate toggler={closeModal} />
      )}
      <h1 className="mb-5 text-xl">Birth Record</h1>
      <div className="flex mb-5 justify-center items-center h-[50vh] border bg-whiteBgColor rounded border-dashed border-primaryColor shadow">
        <div className="flex justify-center flex-col">
          <h1 className="mb-5 text-2xl">Birth Record Not Created</h1>
          <button
            className="flex items-center justify-center gap-1 px-5 py-3 bg-buttonBg rounded-full text-center text-white "
            onClick={() => {
              dispatch(
                openAddModal({
                  modalId: birthRecordModalTypes.birthRecordCreate,
                  data: null,
                })
              );
            }}
          >
            <Plus size={20} /> Create
          </button>
        </div>
      </div>

      <div className="border border-borderColor rounded bg-whiteBgColor">
        <h1 className="border-b border-b-borderColor p-3 text-xl">
          Birth Records
        </h1>
        <div className="p-5">
          <div className="flex justify-between items-center mb-5">
            <div className="flex gap-5">
              <b>Date :</b> <p>10/12/2023</p>
            </div>
            <div className="flex gap-5">
              <b>Facility :</b> <p>Facility Name</p>
            </div>
            <div className="flex gap-5">
              <b>Clinician :</b> <p>Clinician Name</p>
            </div>
          </div>

          <div>
            <h1 className="text-lg mb-3 border-b border-b-borderColor">
              Particulars :
            </h1>
            <DataRow
              title="Is Birth Record Given?"
              data=""
              titleClass="xs:min-w-[245px]"
            />
            <DataRow title="Origin" data="" titleClass="xs:min-w-[245px]" />
            <DataRow
              title="Is Under Five Card Given?"
              data=""
              titleClass="xs:min-w-[245px]"
            />
            <DataRow
              title="Under Five Card Number"
              data=""
              titleClass="xs:min-w-[245px]"
            />

            <h1 className="text-lg mb-3 mt-5 border-b border-b-borderColor">
              Particulars :
            </h1>
            <DataRow title="First Name" data="" titleClass="xs:min-w-[245px]" />
            <DataRow title="Surname" data="" titleClass="xs:min-w-[245px]" />
            <DataRow title="Nickname" data="" titleClass="xs:min-w-[245px]" />
            <DataRow
              title="Cellphone Number"
              data=""
              titleClass="xs:min-w-[245px]"
            />
            <DataRow
              title="Landline Number"
              data=""
              titleClass="xs:min-w-[245px]"
            />
            <DataRow
              title="Relationship to Child"
              data=""
              titleClass="xs:min-w-[245px]"
            />
            <DataRow
              title="Other Relationship"
              data=""
              titleClass="xs:min-w-[245px]"
            />
            <DataRow
              title="City/Town/Village"
              data=""
              titleClass="xs:min-w-[245px]"
            />
            <DataRow
              title="Cmpd Street No."
              data=""
              titleClass="xs:min-w-[245px]"
            />
            <DataRow
              title="PO Box, Pvt Bag"
              data=""
              titleClass="xs:min-w-[245px]"
            />
            <DataRow title="Landmark" data="" titleClass="xs:min-w-[245px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BirthRecordHistory;
