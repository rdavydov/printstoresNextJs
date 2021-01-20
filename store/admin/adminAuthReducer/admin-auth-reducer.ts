import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: false,
    role: "",
};

const AdminAuthSlice = createSlice({
    name: "admin-auth",
    initialState,
    reducers: {},
    extraReducers: {},
});

export default AdminAuthSlice;
