import { createAsyncThunk } from "@reduxjs/toolkit";
import { categoryService } from "api";
import { BadRequestException } from "api/services/errors.service";
import { uploadFileService } from "api/services/uploadFile.service";
import { fetchCreateCategoryType } from "store/reducers/categoryReducer/extraReducers/types/fetchCreateCategory.types";

export const fetchCreateCategory = createAsyncThunk(
    "admin-category/fetchCreateCategoryStatus",
    async (
        { image, name, key, callback }: fetchCreateCategoryType,
        { rejectWithValue }
    ) => {
        try {
            if (!image)
                throw new BadRequestException(
                    "Ошибка, загрузите файл перед созданием категории"
                );
            const {
                data: { path },
            } = await uploadFileService.uploadFile({ file: image });
            const staticPath = `http://localhost:3010/api/upload/${path}`;
            const data = { name, key, image: staticPath };
            await categoryService.categoryCreate({ data });
            const {
                data: { category },
            } = await categoryService.getAllCategory();
            if (callback) {
                callback();
            }
            return category;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

export const fetchDeleteCategory = createAsyncThunk(
    "admin-category/fetchDeleteCategoryStatus",
    async (categoryList: string[]) => {
        const {
            data: { category, quantity },
        } = await categoryService.categoryDelete({ data: categoryList });
        return { category, quantity };
    }
);
