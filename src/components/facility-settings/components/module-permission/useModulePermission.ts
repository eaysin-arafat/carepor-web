import { RootState } from "@/app/store";
import { RtkStatusEnum } from "@/enum/rtk";
import { useReadFacilityAccessWithModulePermissionsByKeyQuery } from "@/features/facility-access/facility-access-api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type TypeAccessModule = { id: string; name: string; checked: boolean };

const useModulePermission = () => {
  const dispatch = useDispatch();
  const { editModal } = useSelector((state: RootState) => state.modal);
  const { data } = editModal;

  //Read permission data
  const { data: modulesPermission, status } =
    useReadFacilityAccessWithModulePermissionsByKeyQuery(data?.oid, {
      skip: !data?.oid,
    });

  const { facilityAccessId, modules, facilityAccess } = modulesPermission || {};

  const [modulesData, setModulesData] = useState<TypeAccessModule[] | []>([]);

  const handleCheckboxChange = (id: string) => {
    console.log(id);
    const updateData = modulesData.map((item: TypeAccessModule) =>
      item.id == id ? { ...item, checked: !item?.checked } : item
    );
    setModulesData(updateData);
  };

  const handleSelectAll = () => {
    const updateData = modulesData.map((item: TypeAccessModule) => ({
      ...item,
      checked: true,
    }));
    setModulesData(updateData);
  };
  const handleUnselectAll = () => {
    const updateData = modulesData.map((item: TypeAccessModule) => ({
      ...item,
      checked: false,
    }));
    setModulesData(updateData);
  };

  useEffect(() => {
    if (status === RtkStatusEnum.fulfilled) {
      setModulesData(modules);
    }
  }, [status, modules]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return {
    handleSubmit,
    modulesPermission,
    handleCheckboxChange,
    modulesData,
    handleUnselectAll,
    handleSelectAll,
  };
};

export default useModulePermission;
