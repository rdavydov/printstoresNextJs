import { createAsyncThunk } from '@reduxjs/toolkit';
import { categoryService } from 'api';
import { BadRequestException } from 'api/services/errors.service';
import { uploadFileService } from 'api/services/uploadFile.service';
import { fetchCreateCategoryType } from 'store/reducers/categoryReducer/extraReducers/types/fetchCreateCategory.types';

export const fetchCreateCategory = createAsyncThunk(
  'admin-category/fetchCreateCategoryStatus',
  async (
    { image, name, key }: fetchCreateCategoryType,
    { rejectWithValue, dispatch },
  ) => {
    try {
      if (!image) {
        throw new BadRequestException(
          'Ошибка, загрузите файл перед созданием категории',
        );
      }
      const { path } = await uploadFileService.uploadFile(image);
      const staticPath = `http://localhost:3010/api/upload/${path}`;
      const data = { name, key, image: staticPath };
      await categoryService.categoryCreate(data);
      const { category } = await categoryService.getAllCategory();
      return category;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  },
);

export const fetchDeleteCategory = createAsyncThunk(
  'admin-category/fetchDeleteCategoryStatus',
  async (categoryList: string[]) => {
    const { category, quantity } = await categoryService.categoryDelete({ data: categoryList });
    return { category, quantity };
  },
);
