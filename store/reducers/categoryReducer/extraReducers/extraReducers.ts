import { createAsyncThunk } from '@reduxjs/toolkit';
import { categoryService } from 'api';
import { uploadFileService } from 'api/services/uploadFile.service';
import { fetchCreateCategoryType } from './types/fetchCreateCategory.types';

export const fetchAllCategory = createAsyncThunk(
  'category/fetchAllCategoryStatus',
  async () => {
    const { category } = await categoryService.getAllCategory();
    return category;
  }
);
