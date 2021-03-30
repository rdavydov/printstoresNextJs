import { combineReducers } from "@reduxjs/toolkit";
import categorySlice from "./reducers/categoryReducer/categoryReducer";
import cartCheckoutSlice from "./reducers/cart/checkout/checkout.reducer";
import cartProductsSlice from "./reducers/cart/products/products.reducer";

export const rootReducer = combineReducers({
  cart: combineReducers({
    products: cartProductsSlice.reducer,
    checkout: cartCheckoutSlice.reducer,
  }),
  category: categorySlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
