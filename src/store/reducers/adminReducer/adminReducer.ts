import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: true,
    role: "",
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {},
});

export default adminSlice;
