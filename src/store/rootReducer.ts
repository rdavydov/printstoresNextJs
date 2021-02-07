import { combineReducers } from '@reduxjs/toolkit';
import cardSlice from './reducers/cardReducer/cardReducer';
import categorySlice from './reducers/categoryReducer/categoryReducer';
import catalogReducer from '../reducers/catalog/catalog';

export const rootReducer = combineReducers({
  cart: cardSlice.reducer,
  category: categorySlice.reducer,
  catalog: catalogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
