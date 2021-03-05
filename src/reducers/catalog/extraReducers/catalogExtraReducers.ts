import { createAsyncThunk } from "@reduxjs/toolkit";
import { catalogService } from "src/api";
import { Reducers } from "src/constants/reducers/reducers.constants";

export const fetchCatalogProducts = createAsyncThunk(
  `${Reducers.CATALOG}/fetchCatalogProducts`,
  async (query: any, { dispatch }) => {
    const { products, total } = await catalogService.catalogFilter(query);
    return { products, total, query };
  }
);
