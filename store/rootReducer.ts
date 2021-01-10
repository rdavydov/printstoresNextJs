import { combineReducers } from "@reduxjs/toolkit";
import adminSlice from "./reducers/adminReducer/adminReducer";
import cardSlice from "./reducers/cardReducer/cardReducer";

export const rootReducer = combineReducers({
    cart: cardSlice.reducer,
    admin: adminSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
