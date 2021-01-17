import { combineReducers } from "@reduxjs/toolkit";
import adminSlice from "./reducers/adminReducer/adminReducer";
import cardSlice from "./reducers/cardReducer/cardReducer";
import categorySlice from "./reducers/categoryReducer/categoryReducer";

export const rootReducer = combineReducers({
    cart: cardSlice.reducer,
    admin: adminSlice.reducer,
    category: categorySlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
