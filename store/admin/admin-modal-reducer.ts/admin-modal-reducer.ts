import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visible: false,
    error: null,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        closeModal: (state) => {
            state.visible = false;
        },
        openModal: (state) => {
            state.visible = true;
        },
    },
});

export const { closeModal, openModal } = modalSlice.actions;

export default modalSlice;
