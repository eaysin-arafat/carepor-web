import OutlineButton from "@/components/core/buttons/OutlineButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import Input from "@/components/core/form-elements/Input";
import Password from "@/components/core/form-elements/Password";
import { closeEditModal } from "@/features/modal/modal-slice";

import { RootState } from "@/app/store";
import Modal from "@/components/core/modal/Modal";
import { facilitySettingsModalType } from "@/constants/modal-types";
import { useDispatch, useSelector } from "react-redux";
import useResetPasswordModal from "./useResetPasswordModal";

function ResetPasswordModal() {
  const { editModal } = useSelector((state: RootState) => state.modal);
  const { data } = editModal;
  const dispatch = useDispatch();
  const { handleSubmit, formData, handleInputChange, inputError } =
    useResetPasswordModal();

  return (
    <Modal
      title="Change Password"
      titleClass=""
      editModalId={facilitySettingsModalType.resetPasswordModal}
    >
      <div className="border border-lightGrayColor p-5 m-3 ">
        <form onSubmit={handleSubmit} className="">
          <div className="grid gap-5">
            <Input
              onChange={(e) => e.preventDefault()}
              value={
                data?.userAccount?.firstName + " " + data?.userAccount?.surname
              }
              label="User Name"
            />
            <Password
              onChange={handleInputChange}
              errMsg={inputError?.newPassword}
              value={formData.newPassword}
              label="New Password"
              name="newPassword"
            />
            <Password
              onChange={handleInputChange}
              errMsg={inputError?.confirmPassword}
              value={formData.confirmPassword}
              label="Confirm Password"
              name="confirmPassword"
            />
          </div>

          <div className="flex justify-end gap-3 mt-5">
            <OutlineButton
              buttonType="button"
              className="py-2 "
              title="Cancel"
              onClick={() => {
                dispatch(closeEditModal());
              }}
            />
            <SubmitButton
              className="py-2 "
              buttonType="submit"
              title="Change Password"
            />
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default ResetPasswordModal;
