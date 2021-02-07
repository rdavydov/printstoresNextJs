import { createAsyncThunk } from '@reduxjs/toolkit';
import { catalogService } from 'src/api';
import { Reducers } from 'src/constants/reducers/reducers.constants';
import { updateSearchParams } from '../catalog';

export const fetchCatalogProducts = createAsyncThunk(
  `${Reducers.CATALOG}/fetchCatalogProducts`,
  async (query: any, { dispatch }) => {
    dispatch(updateSearchParams(query));
    const { products, total } = await catalogService.catalogFilter(query);
    return { products, total, query };
  }
);
