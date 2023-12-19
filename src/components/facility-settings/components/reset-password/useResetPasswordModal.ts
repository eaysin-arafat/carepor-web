import { RootState } from "@/app/store";
import { RtkStatusEnum } from "@/enum/rtk";
import { useLoginRecoveryFacilityAccessMutation } from "@/features/facility-access/facility-access-api";
import { closeEditModal } from "@/features/modal/modal-slice";

import { FormSubmitEventType, OnchangeEventType } from "@/types/htmlEvents";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

type TypeResetPassForm = {
  newPassword?: string;
  confirmPassword?: string;
};

const useResetPasswordModal = () => {
  const { editModal } = useSelector((state: RootState) => state.modal);
  const { data } = editModal;
  const dispatch = useDispatch();

  const [loginRecoveryFacilityAccess, { status }] =
    useLoginRecoveryFacilityAccessMutation();

  const initialState = {
    newPassword: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState<TypeResetPassForm>(initialState);
  const [inputError, setInputError] = useState<TypeResetPassForm>({});

  const handleInputChange = (e: OnchangeEventType) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setInputError((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: FormSubmitEventType) => {
    e.preventDefault();

    const { errors, isValid } = loginRecoveryValidator(formData);
    if (!isValid) {
      setInputError(errors);
      return;
    }

    const update = {
      facilityRequestID: data?.oid,
      userName: data?.userAccount?.username,
      ...formData,
    };

    loginRecoveryFacilityAccess({ body: update });
  };

  useEffect(() => {
    if (status === RtkStatusEnum.fulfilled) {
      toast.dismiss();
      toast.success("Password updated successfully");
      dispatch(closeEditModal());
    }
    if (status === RtkStatusEnum.rejected) {
      toast.dismiss();
      toast.error("Password updated failed");
    }
  }, [status]);
  return {
    handleInputChange,
    formData,
    inputError,
    handleSubmit,
  };
};
export default useResetPasswordModal;

const loginRecoveryValidator = (recoveryData: TypeResetPassForm) => {
  const errors: TypeResetPassForm = {};

  if (!recoveryData?.newPassword) {
    errors.newPassword = "Required";
  }

  if (!recoveryData?.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (recoveryData?.confirmPassword !== recoveryData?.newPassword) {
    errors.confirmPassword = "Password does not match";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
