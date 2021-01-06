import { combineReducers } from "@reduxjs/toolkit";
import cardSlice from "./reducers/cardReducer/cardReducer";

export const rootReducer = combineReducers({
    card: cardSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
