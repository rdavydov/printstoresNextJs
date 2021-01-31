import { createAsyncThunk } from '@reduxjs/toolkit';
import { productService } from 'api';
import { uploadFileService } from 'api/services/uploadFile.service';
import { IfetchCreateProduct } from '../types/fetchCreateProductType';

export const fetchCreateProduct = createAsyncThunk(
  'admin-category/fetchCreateProductStatus',
  async ({ image, ...rest }: IfetchCreateProduct, { rejectWithValue }) => {
    try {
      const { path } = await uploadFileService.uploadFile({ file: image });
      const staticPath = `http://localhost:3010/api/upload/${path}`;
      const data = { image: staticPath, ...rest };
      await productService.createProduct({ data });
      const { products } = await productService.getAllProducts();
      return { products };
    } catch (e) {
      if (!e.response.data) return rejectWithValue(e.message);
      return rejectWithValue(e.response.data);
    }
  }
);
