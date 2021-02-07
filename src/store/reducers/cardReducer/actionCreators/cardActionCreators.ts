import {
  addProduct,
  decrementProduct,
  deleteProduct,
  incrementProduct,
} from '../cardReducer';

interface ICartPayload {
    name: string;
    price: number;
    id: number;
    image: string;
    quantity?: number;
}

export const addCartProduct = (product: ICartPayload) => (dispatch) => {
  dispatch(addProduct({ product }));
};

export const deleteCartProduct = (id: number) => (dispatch) => {
  dispatch(deleteProduct(id));
};

export const incrementCartProduct = (id: number) => (dispatch) => {
  dispatch(incrementProduct(id));
};

export const decrementCartProduct = (id: number) => (dispatch) => {
  dispatch(decrementProduct(id));
};
