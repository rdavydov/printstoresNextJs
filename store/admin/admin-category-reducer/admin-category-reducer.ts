import { createSlice } from "@reduxjs/toolkit";
import { showMessage } from "utils/Notify/showMessage";
import AdminAuthSlice from "../adminAuthReducer/admin-auth-reducer";
import {
    fetchCreateCategory,
    fetchDeleteCategory,
} from "./extraReducers/extraReducers";

const initialState = {
    category: [],
    loading: false,
};

const AdminCategorySlice = createSlice({
    name: "admin-category",
    initialState,
    reducers: {
        setAdminCategory: (state, action) => {
            state.category = action.payload;
        },
    },
    extraReducers: (builder) => {
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
            state.category = action.payload.category;
            showMessage({
                type: "success",
                text: `Успешно удалено ${action.payload.quantity} категорий`,
            });
        });
    },
});

export const { setAdminCategory } = AdminCategorySlice.actions;

export default AdminCategorySlice;