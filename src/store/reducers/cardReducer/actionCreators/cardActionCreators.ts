import {
  addProduct,
  decrementProduct,
  deleteProduct,
  incrementProduct,
} from "../cardReducer";

interface ICartPayload {
  title: string;
  price: number;
  id: number | string;
  preview: string;
  quantity?: number;
  old_price: number;
}

export const addCartProduct = (product: ICartPayload) => (dispatch) => {
  dispatch(addProduct({ product }));
};

export const deleteCartProduct = (id: number | string) => (dispatch) => {
  dispatch(deleteProduct(id));
};

export const incrementCartProduct = (id: number | string) => (dispatch) => {
  dispatch(incrementProduct(id));
};

export const decrementCartProduct = (id: number | string) => (dispatch) => {
  dispatch(decrementProduct(id));
};
