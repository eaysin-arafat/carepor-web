import FormHeading from '@/components/core/form-heading/FormHeading';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { useDispatch } from 'react-redux';
import {
  closeAddModal,
  closeEditModal,
  openAddModal,
  openEditModal,
} from '@/features/modal/modal-slice';
import { familyPlanningModalTypes } from '@/constants/modal-types';
import CreateGynObsHistories from './components/CreateGynObsHistories';
import EditGynObsHistories from './components/EditGynObsHistories';

const GynAndObsHistories = () => {
  // * Responsive Hokes
  // const w1300 = useWindowWidth(1300);
  // const w1000 = useWindowWidth(1000);

  const { addModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );

  const dispatch = useDispatch();
  // Close Modal Function
  const closeModal = () => {
    dispatch(closeEditModal());
    dispatch(closeAddModal());
  };

  // Handle Create Gyn And Obs Histories Modal Function
  const handleCreateGynObsHistories = () => {
    dispatch(
      openAddModal({
        modalId: familyPlanningModalTypes.addGynAndObsHistories,
        data: null,
      })
    );
  };

  // Handle Edit Gyn And Obs Histories Modal Function
  const handleEditGynObsHistories = () => {
    dispatch(
      openEditModal({
        modalId: familyPlanningModalTypes.editGynAndObsHistories,
        data: null,
      })
    );
  };

  return (
    <>
      <div className="shadow-md border border-borderColor mt-5 flex flex-col gap-4 px-4 py-4 rounded">
        {/* Gyn And Obs Histories */}
        <FormHeading
          title="Gyn And Obs Histories"
          modalHandler={handleCreateGynObsHistories}
          editHandler={handleEditGynObsHistories}
          isEdit
        />
        {addModal?.modalId ===
          familyPlanningModalTypes.addGynAndObsHistories && (
          <CreateGynObsHistories toggler={closeModal} />
        )}
        {editModal?.modalId ===
          familyPlanningModalTypes.editGynAndObsHistories && (
          <EditGynObsHistories toggler={closeModal} />
        )}
      </div>
    </>
  );
};

export default GynAndObsHistories;
