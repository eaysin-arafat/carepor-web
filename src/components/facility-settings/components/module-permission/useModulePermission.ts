import { RootState } from "@/app/store";
import { RtkStatusEnum } from "@/enum/rtk";
import { useReadFacilityAccessWithModulePermissionsByKeyQuery } from "@/features/facility-access/facility-access-api";
import { closeEditModal } from "@/features/modal/modal-slice";
import { useCreateModuleAccessMutation } from "@/features/module-access/module-access-api";
import { FormSubmitEventType } from "@/types/htmlEvents";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

type TypeAccessModule = { id: string; name: string; checked: boolean };

const useModulePermission = () => {
  const dispatch = useDispatch();
  // get data from redux store
  const { editModal } = useSelector((state: RootState) => state.modal);
  const { data } = editModal;
  const user = data?.userAccount || {};

  // Create user card data
  const userFullName =
    user?.firstName && user?.surname
      ? user?.firstName + " " + user.surname
      : "";
  const facilityName = data?.facility?.description || "";
  const contactAddress = user?.contactAddress || "";
  const cellPhone =
    user?.cellphone && user?.cellphone
      ? user?.countryCode + " " + user?.cellphone
      : "";

  //Read permission data
  const { data: modulesPermission, status } =
    useReadFacilityAccessWithModulePermissionsByKeyQuery(data?.oid, {
      skip: !data?.oid,
    });
  // post permission data
  const [createModulePermissions, { status: permissionStatus }] =
    useCreateModuleAccessMutation();

  // const { facilityAccessId, modules, facilityAccess } = modulesPermission || {};
  const { facilityAccessId, modules } = modulesPermission || {};

  const [modulesData, setModulesData] = useState<TypeAccessModule[] | []>([]);

  // handle checked unchecked modules
  const handleCheckboxChange = (id: string) => {
    console.log(id);
    const updateData = modulesData.map((item: TypeAccessModule) =>
      item.id == id ? { ...item, checked: !item?.checked } : item
    );
    setModulesData(updateData);
  };

  // all checked
  const handleSelectAll = () => {
    const updateData = modulesData.map((item: TypeAccessModule) => ({
      ...item,
      checked: true,
    }));
    setModulesData(updateData);
  };
  // all unchecked
  const handleUnselectAll = () => {
    const updateData = modulesData.map((item: TypeAccessModule) => ({
      ...item,
      checked: false,
    }));
    setModulesData(updateData);
  };

  // all modules selected or not selected
  const isSelectedAll =
    modulesData.filter((item: TypeAccessModule) => !item.checked).length === 0;

  // handle submission
  const handleSubmit = (e: FormSubmitEventType) => {
    e.preventDefault();
    const updateData = {
      facilityAccessId,
      modules: modulesData,
    };
    createModulePermissions(updateData);
  };

  // side effects
  useEffect(() => {
    if (status === RtkStatusEnum.fulfilled) {
      setModulesData(modules);
    }
  }, [status, modules]);

  useEffect(() => {
    if (permissionStatus === RtkStatusEnum.fulfilled) {
      toast.dismiss();
      toast.success("Permission updated successfully");
      dispatch(closeEditModal());
    }
    if (permissionStatus === RtkStatusEnum.rejected) {
      toast.dismiss();
      toast.error("Permission update failed");
    }
  }, [permissionStatus]);

  // return
  return {
    handleSubmit,
    modulesPermission,
    handleCheckboxChange,
    modulesData,
    handleUnselectAll,
    handleSelectAll,
    isSelectedAll,
    userFullName,
    facilityName,
    cellPhone,
    contactAddress,
  };
};

export default useModulePermission;
