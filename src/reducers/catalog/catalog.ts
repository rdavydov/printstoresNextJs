import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Reducers } from 'src/constants/reducers/reducers.constants';
import { Product } from 'src/types/type/products.type';
import { getInitialQuery } from 'src/utils/validateQuery';
import { fetchCatalogProducts } from './extraReducers/catalogExtraReducers';

const defaultParams = { pageSize: 8, direction: 'ASC', currentPage: 1, filterText: '', sortBy: '' };

const initState = {
  crumbs: [],
  total: 0,
  products: [],
  searchParams: defaultParams,
  loading: false,
  seo: [],
};

export const catalogSlice = createSlice({
  name: Reducers.CATALOG,
  initialState: initState,
  reducers: {
    updateSearchParams: (state, action) => {
      const searchParams = getInitialQuery<typeof defaultParams>(action.payload, state.searchParams);
      state.searchParams = searchParams;
    },
    updateCrumbs: (state, action: PayloadAction<[{ path: string; title: string }]>) => {
      state.crumbs = action.payload;
    },
    updateProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    updateTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCatalogProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCatalogProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
      state.total = action.payload.total;
    });
  },
});

export const { updateCrumbs, updateSearchParams, updateProducts, updateTotal } = catalogSlice.actions;

const catalogReducer = catalogSlice.reducer;

export default catalogReducer;
