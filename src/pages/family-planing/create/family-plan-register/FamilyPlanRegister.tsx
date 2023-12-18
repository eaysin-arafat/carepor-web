import FormHeading from '@/components/core/form-heading/FormHeading';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { useDispatch } from 'react-redux';
import {
  closeAddModal,
  openAddModal,
  openEditModal,
  closeEditModal,
} from '@/features/modal/modal-slice';
import { familyPlanningModalTypes } from '@/constants/modal-types';
import CreateFmailyPlanRegister from './components/CreateFmailyPlanRegister';
import EditFmailyPlanRegister from './components/EditFmailyPlanRegister';

const FamilyPlanRegister = () => {
  // * Responsive Hokes
  // const w1300 = useWindowWidth(1300);
  // const w1000 = useWindowWidth(1000);

  const { addModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeEditModal());
    dispatch(closeAddModal());
  };

  const handleFamilyPlanRegister = () => {
    dispatch(
      openAddModal({
        modalId: familyPlanningModalTypes.addFamilyPlanRegister,
        data: null,
      })
    );
  };

  const handleFamilyPlanRegisterEdit = () => {
    dispatch(
      openEditModal({
        modalId: familyPlanningModalTypes.editFamilyPlanRegister,
        data: null,
      })
    );
  };

  return (
    <>
      <div className="shadow-md border border-borderColor mt-5 flex flex-col gap-4 px-4 py-4 rounded">
        {/* Family Planning */}
        <FormHeading
          title="Family Planning"
          modalHandler={handleFamilyPlanRegister}
          editHandler={handleFamilyPlanRegisterEdit}
          isEdit
        />
        {addModal?.modalId ===
          familyPlanningModalTypes.addFamilyPlanRegister && (
          <CreateFmailyPlanRegister toggler={closeModal} />
        )}{' '}
        {editModal?.modalId ===
          familyPlanningModalTypes.editFamilyPlanRegister && (
          <EditFmailyPlanRegister toggler={closeModal} />
        )}
      </div>
    </>
  );
};

export default FamilyPlanRegister;
