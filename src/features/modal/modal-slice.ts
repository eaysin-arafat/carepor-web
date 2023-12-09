import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addModal: {
    isOpen: false,
    modalId: null,
    data: null,
  },
  editModal: {
    isOpen: false,
    modalId: null,
    data: null,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openAddModal(state, action) {
      state.addModal.isOpen = true;
      state.addModal.modalId = action.payload.modalId;
      state.addModal.data = action.payload.data;
    },
    openEditModal(state, action) {
      state.editModal.isOpen = true;
      state.editModal.modalId = action.payload.modalId;
      state.editModal.data = action.payload.data;
    },
    closeAddModal(state) {
      state.addModal.isOpen = false;
      state.addModal.modalId = null;
      state.addModal.data = null;
    },
    closeEditModal(state) {
      state.editModal.isOpen = false;
      state.editModal.modalId = null;
      state.editModal.data = null;
    },
  },
});

export const { closeAddModal, closeEditModal, openAddModal, openEditModal } =
  modalSlice.actions;

export default modalSlice;
