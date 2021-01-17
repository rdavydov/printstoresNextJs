import { setCategory } from "../categoryReducer";

export const setCategoryItems = (category) => (dispatch) => {
    dispatch(setCategory(category));
};
