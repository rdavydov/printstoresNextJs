import { combineReducers } from "@reduxjs/toolkit";
import AdminCategorySlice from "./admin/admin-category-reducer/admin-category-reducer";
import AdminProductReducer from "./admin/admin-product-reducer.ts/admin-product-reducer";
import AdminAuthSlice from "./admin/adminAuthReducer/admin-auth-reducer";
import cardSlice from "./reducers/cardReducer/cardReducer";
import categorySlice from "./reducers/categoryReducer/categoryReducer";

export const rootReducer = combineReducers({
    cart: cardSlice.reducer,
    category: categorySlice.reducer,
    admin: combineReducers({
        categoryList: AdminCategorySlice.reducer,
        productsList: AdminProductReducer.reducer,
        authGuard: AdminAuthSlice.reducer,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
