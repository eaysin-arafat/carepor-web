import { RootState } from "@/app/store";
import { admissionModalTypes } from "@/constants/modal-types";
import {
  Encounter,
  useReadAdmissionListByClientQuery,
} from "@/features/medical-encounter/medical-encounter-api";
import { openAddModal, openEditModal } from "@/features/modal/modal-slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const tableHeader = [
  {
    title: "Admission Date",
    w: "20%",
  },
  {
    title: "Department",
    w: "20%",
  },
  {
    title: "Firm/Unit",
    w: "20%",
  },
  {
    title: "Ward",
    w: "20%",
  },
  {
    title: "Bed",
    w: "20%",
  },
  {
    title: "Discharge Date",
    w: "20%",
  },
];

const useAdmission = () => {
  // get data from the redux store
  const { addModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );

  // local state
  const [state, setState] = React.useState(1);

  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { clientId } = useParams();

  // api hooks
  const { data: admissionList } = useReadAdmissionListByClientQuery(clientId, {
    skip: !clientId,
    refetchOnMountOrArgChange: true,
  });

  // handler
  const handleAdmissionModal = () => {
    dispatch(
      openAddModal({
        modalId: admissionModalTypes.addAdmission,
        data: null,
      })
    );
  };

  const handleAdmissionDetails = (item: Encounter) => {
    dispatch(
      openAddModal({
        modalId: admissionModalTypes.admissionDetails,
        data: item,
      })
    );
  };

  const handleAdmissionDischarge = (item: Encounter) => {
    dispatch(
      openEditModal({
        modalId: admissionModalTypes.admissionDischarge,
        data: item,
      })
    );
  };

  return {
    admissionList,
    handleAdmissionModal,
    handleAdmissionDetails,
    handleAdmissionDischarge,
    navigate,
    state,
    setState,
    addModal,
    editModal,
    tableHeader,
  };
};

export default useAdmission;
