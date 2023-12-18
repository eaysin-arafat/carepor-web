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
import CreateFPlan from './components/CreateFPlan';
import EditFPlan from './components/EditFPlan';

const FPlan = () => {
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

  // Handle Create Family Plan Modal Function
  const handleCreateFamilyPlan = () => {
    dispatch(
      openAddModal({
        modalId: familyPlanningModalTypes.addFPlan,
        data: null,
      })
    );
  };

  // Handle Edit Family Plan Modal Function
  const handleEditFamilyPlan = () => {
    dispatch(
      openEditModal({
        modalId: familyPlanningModalTypes.editFPlan,
        data: null,
      })
    );
  };

  return (
    <>
      <div className="shadow-md border border-borderColor mt-5 flex flex-col gap-4 px-4 py-4 rounded">
        {/* Plan */}
        <FormHeading
          title="Plan"
          modalHandler={handleCreateFamilyPlan}
          editHandler={handleEditFamilyPlan}
          isEdit
        />
        {addModal?.modalId === familyPlanningModalTypes.addFPlan && (
          <CreateFPlan toggler={closeModal} />
        )}
        {editModal?.modalId === familyPlanningModalTypes.editFPlan && (
          <EditFPlan toggler={closeModal} />
        )}
      </div>
    </>
  );
};

export default FPlan;
