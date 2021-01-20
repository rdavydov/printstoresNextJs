import { createSlice } from "@reduxjs/toolkit";
import { fetchCreateProduct } from "./extraReducers/extraReducers";

const initialState = {
    products: [],
    loading: false,
};

const AdminProductReducer = createSlice({
    name: "admin-product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCreateProduct.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchCreateProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
        });
        builder.addCase(fetchCreateProduct.rejected, (state, action) => {
            state.loading = false;
            console.log(action.payload, "payload-error");
        });
    },
});

export default AdminProductReducer;
