import { RootState } from "@/app/store";
import DefaultModal from "@/components/core/modal/DefaultModal";
import InvestigationEditForm from "@/components/investigations/InvestigationEditForm";
import { investigationModalTypes } from "@/constants/modal-types";
import { closeEditModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const InvestigationEdit = () => {
  const { editModal } = useSelector((store: RootState) => store.modal);
  const dispatch = useDispatch();
  // add investigation inputs fields enums
  // const { data: testTypes } = useReadTestTypeQuery(undefined);
  // const { data: subTestTypes } = useReadTestSubTypeQuery(undefined);
  // const { data: tests } = useReadTestsQuery(undefined);

  const closeModal = () => {
    dispatch(closeEditModal());
  };

  return (
    <div>
      {editModal?.modalId === investigationModalTypes.editInvestigation && (
        <DefaultModal
          title="Investigation"
          className="dynamic_with"
          toggler={closeModal}
          size="5xl"
        >
          <InvestigationEditForm />
        </DefaultModal>
      )}
    </div>
  );
};

export default InvestigationEdit;
