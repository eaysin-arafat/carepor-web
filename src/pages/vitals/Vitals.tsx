import { RootState } from "@/app/store";
import ClientDetailsCard from "@/components/core/card/ClientDetailsCard";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import DataSummaryList from "@/components/shared/data-summary/DataSummaryList";
import { vitalModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
// import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Vitals() {
  const dispatch = useDispatch();
  // const [openModal, setOpenModal] = React.useState(false);

  const { addModal } = useSelector((state: RootState) => state.modal);

  const handleAddVitalModal = () => {
    dispatch(
      openAddModal({
        modalId: vitalModalTypes.addVital,
        data: null,
      })
    );
  };

  // const toggleModal = () => {
  //   setOpenModal(!openModal);
  // };

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      <ClientDetailsCard className="shadow-none rounded-none" />
      <div className="mt-5 font-poppins">
        <div className="grid grid-cols-7 gap-5">
          <div className="col-span-5">
            <div className="flex justify-between items-center">
              <h2>Vitals & Anthropometry</h2>
              <button className="transparent_btn py-1 px-7 text-base bg-whiteBgColor border-primaryColor hover:text-whiteColor hover:bg-primaryColor ">
                Last 5 Encounters
              </button>
            </div>
            <button onClick={handleAddVitalModal} className="main_btn py-2">
              Add Vital
            </button>
            {addModal?.modalId === vitalModalTypes.addVital && (
              <DefaultOpenModal isShow={true} toggler={closeModal}>
                <h2>Hello</h2>
                <button onClick={closeModal}>close</button>
              </DefaultOpenModal>
            )}
          </div>
          <div className="col-span-2">
            <DataSummaryList />
          </div>
        </div>
        {/* <Table>
          <TableHeader
            title={[
              {
                title: "Patient Name",
                w: "30%",
              },
              {
                title: "Date of Prescription",
                w: "20%",
              },
              {
                title: "Provider",
                w: "30%",
              },
              {
                title: "Time",
                w: "20%",
              },
            ]}
          />
          <TableBody
            item={[
              {
                title: "Patient Name",
                w: "30%",
              },
              {
                title: "Date of Prescription",
                w: "20%",
              },
              {
                title: "Provider",
                w: "30%",
              },
              {
                title: "Time",
                w: "20%",
              },
            ]}
          />
        </Table> */}
      </div>
    </div>
  );
}

export default Vitals;
