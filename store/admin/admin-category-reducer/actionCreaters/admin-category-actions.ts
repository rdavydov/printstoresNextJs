import { setAdminCategory } from "../admin-category-reducer";

export const setCategoryAdmin = (category) => (dispatch) => {
    dispatch(setAdminCategory(category));
};
