import { RootState } from "@/app/store";
import Card from "@/components/core/card/Card";
import DefaultModal from "@/components/core/modal/DefaultModal";
import DataRow from "@/components/core/table/DataRow";
import { investigationModalTypes } from "@/constants/modal-types";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const InvestigationViewResultModal = () => {
  const { addModal } = useSelector((store: RootState) => store.modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      {addModal?.modalId ===
        investigationModalTypes.investigationViewResult && (
        <DefaultModal
          title="View Result"
          className=""
          toggler={closeModal}
          size="7xl"
        >
          <Card className="bg-whiteBgColor shadow-none mt-3">
            <div className=" border border-borderColor p-5 rounded-lg">
              <DataRow title="Test" data="Data Cross match" />
              <DataRow title="Additional Note" data="Additional Notes" />
              <DataRow title="Remark" data="Normal" />
              <DataRow title="Comment" data="Comments Comments" />
            </div>
            <div className="flex justify-center mt-8">
              <button onClick={closeModal} className="transparent_btn">
                Close
              </button>
            </div>
          </Card>
        </DefaultModal>
      )}
    </div>
  );
};

export default InvestigationViewResultModal;
