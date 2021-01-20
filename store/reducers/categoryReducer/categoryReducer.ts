import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCategory } from "./extraReducers/extraReducers";

const initialState = {
    category: [],
    loading: false,
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllCategory.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchAllCategory.fulfilled, (state, action) => {
            state.category = action.payload.category;
        });
        builder.addCase(fetchAllCategory.rejected, (state, action: any) => {
            if (action.payload) {
                console.log(action.payload, "payload");
            }
        });
    },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice;
