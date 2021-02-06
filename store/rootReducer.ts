import { combineReducers } from '@reduxjs/toolkit';
import cardSlice from './reducers/cardReducer/cardReducer';
import categorySlice from './reducers/categoryReducer/categoryReducer';

export const rootReducer = combineReducers({
  cart: cardSlice.reducer,
  category: categorySlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
