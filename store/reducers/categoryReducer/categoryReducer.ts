import { createSlice } from "@reduxjs/toolkit";
import { showMessage } from "utils/Notify/showMessage";
import {
    fetchAllCategory,
    fetchCreateCategory,
    fetchDeleteCategory,
} from "./extraReducers/extraReducers";

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
            state.category = action.payload;
        });
        builder.addCase(fetchAllCategory.rejected, (state, action: any) => {
            if (action.payload) {
                console.log(action.payload, "payload");
            }
        });
        builder.addCase(fetchCreateCategory.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchCreateCategory.fulfilled, (state, action) => {
            state.category = action.payload;
            state.loading = false;
            showMessage({ type: "success", text: "Категория успешно создана" });
        });
        builder.addCase(fetchCreateCategory.rejected, (state, action: any) => {
            if (action.payload) {
                showMessage({ type: "error", text: action.payload.message });
            }
            state.loading = false;
        });
        builder.addCase(fetchDeleteCategory.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchDeleteCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.category = action.payload.itemsList;
            showMessage({
                type: "success",
                text: `Успешно удалено ${action.payload.quantity} категорий`,
            });
        });
    },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice;
