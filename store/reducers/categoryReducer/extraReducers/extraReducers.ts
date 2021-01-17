import { createAsyncThunk } from "@reduxjs/toolkit";
import { categoryService } from "api";
import { uploadFileService } from "api/services/uploadFile.service";
import { fetchCreateCategoryType } from "./types/fetchCreateCategory.types";

export const fetchAllCategory = createAsyncThunk(
    "category/fetchAllCategoryStatus",
    async () => {
        const response = await categoryService.getAllCategory({
            requestUrl: ["all"],
        });
        return response.data;
    }
);

export const fetchCreateCategory = createAsyncThunk(
    "category/fetchCreateCategoryStatus",
    async (
        { image, name, key }: fetchCreateCategoryType,
        { rejectWithValue }
    ) => {
        try {
            const {
                data: { path },
            } = await uploadFileService.uploadFile({ file: image });
            const staticPath = `http://localhost:3010/api/upload/${path}`;
            const data = { name, key, image: staticPath };
            await categoryService.categoryCreate({ data });
            const {
                data: { itemsList },
            } = await categoryService.getAllCategory();
            return itemsList;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

export const fetchDeleteCategory = createAsyncThunk(
    "category/fetchDeleteCategoryStatus",
    async (category: string[]) => {
        const {
            data: { itemsList, quantity },
        } = await categoryService.categoryDelete({ data: category });
        return { itemsList, quantity };
    }
);
