import OutlineButton from "@/components/core/buttons/OutlineButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import Modal from "@/components/core/modal/Modal";
import { facilitySettingsModalType } from "@/constants/modal-types";
import { closeEditModal } from "@/features/modal/modal-slice";

import Checkbox from "@/components/core/form-elements/Checkbox";
import { useDispatch } from "react-redux";
import useModulePermission from "./useModulePermission";

type Props = {};

function ModulePermissionModal({}: Props) {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    handleCheckboxChange,
    modulesData,
    handleSelectAll,
    handleUnselectAll,
    isSelectedAll,
    userFullName,
    facilityName,
    cellPhone,
    contactAddress,
  } = useModulePermission();

  return (
    <Modal
      title="Module Permission"
      titleClass=""
      className="max-w-[1050px]"
      editModalId={facilitySettingsModalType.moduleAccessPermissionModal}
    >
      <div>{/* <ClientDetailsCard /> */}</div>
      <div className="bg-lightBlueColor rounded-lg p-5">
        <div className="grid grid-cols-3 gap-1 ">
          <div className="col-span-3 md:col-span-1 ">
            <h2 className="py-1 text-xl font-semibold capitalize">
              {userFullName}
            </h2>
            <h3 onClick={handleUnselectAll} className="py-1  font-semibold">
              {facilityName}
            </h3>
          </div>
          <div className="md:col-span-2 col-span-3">
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <h3 className="py-1 font-semibold">Cellphone</h3>
                <h4 className="py-1">{cellPhone}</h4>
              </div>
              <div className="col-span-2py-1">
                <h3 className="py-1 font-semibold">Address</h3>
                <h4 className="py-1">{contactAddress}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <form onSubmit={handleSubmit} className="overflow-x-auto">
          <div className="border border-lightGrayColor p-5 mt-3 rounded-lg">
            <div className="">
              <h2 className="font-semibold text-lg">List of Modules :</h2>
              <div className="my-2 text-xl grid">
                <Checkbox
                  checked={isSelectedAll}
                  onChange={() => {
                    if (isSelectedAll) {
                      handleUnselectAll();
                    } else {
                      handleSelectAll();
                    }
                  }}
                  name={"selectAll"}
                  label={isSelectedAll ? "Unselect all" : "Select all"}
                  className="font-semibold "
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                {modulesData?.map((item) => {
                  return (
                    <div>
                      <Checkbox
                        onChange={() => handleCheckboxChange(item.id)}
                        checked={item?.checked}
                        name={item.id}
                        label={item.name}
                        className=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 my-5 ">
            <OutlineButton
              buttonType="button"
              className="py-2 "
              title="Cancel"
              onClick={() => {
                dispatch(closeEditModal());
              }}
            />
            <SubmitButton className="py-2 " buttonType="submit" title="Save" />
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default ModulePermissionModal;
