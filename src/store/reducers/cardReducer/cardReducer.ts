import { createSlice } from "@reduxjs/toolkit";

export interface ICart {
  name: string;
  price: number;
  id: number;
  image: string;
  quantity: number;
  old_price: null | number;
}

export interface ICardInitState {
  product: ICart[];
  promocode: null | string;
  order_summary: number;
  product_discount: number | null;
  product_summary: number | null;
}
const initialState: ICardInitState = {
  product: [],
  promocode: null,
  order_summary: null,
  product_summary: null,
  product_discount: null,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const findValue = state.product.find(
        ({ id }) => id === action.payload.product.id
      );
      if (!findValue) {
        state.product.push(action.payload.product);
        const productPrice =
          action.payload.product.price +
          (action.payload.product.old_price || 0);

        state.product_summary += productPrice;

        state.order_summary +=
          productPrice - (action.payload.product.old_price || 0);

        if (action.payload.product.old_price) {
          state.product_discount += action.payload.product.old_price;
        }
      }
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      const currentProduct = state.product.find((product) => product.id === id);
      const currentProductPrice = currentProduct.price;
      const currentProductQuantity = currentProduct.quantity;
      const currentProductOldPrice = currentProduct.old_price || 0;

      const product_current_sum =
        currentProductPrice * currentProductQuantity +
        currentProductOldPrice * currentProductQuantity;

      const product_current_discount =
        currentProductOldPrice * currentProductQuantity;

      state.product_summary -= product_current_sum;
      state.product_discount -= product_current_discount;
      state.order_summary -= product_current_sum - product_current_discount;
      state.product = state.product.filter((product) => product.id !== id);
    },
    incrementProduct: (state, action) => {
      const id = action.payload;
      const currentProduct = state.product.find((product) => product.id === id);
      currentProduct.quantity += 1;
      const currentProductPrice = currentProduct.price;
      const currentProductOldPrice = currentProduct.old_price || 0;
      state.product_summary += currentProductPrice + currentProductOldPrice;
      state.product_discount += currentProductOldPrice;
      state.order_summary +=
        currentProductPrice + currentProductOldPrice - currentProductOldPrice;
    },
    decrementProduct: (state, action) => {
      const id = action.payload;
      const currentProduct = state.product.find((product) => product.id === id);
      currentProduct.quantity -= 1;
      const currentProductPrice = currentProduct.price;
      const currentProductOldPrice = currentProduct.old_price || 0;
      state.product_summary -= currentProductPrice + currentProductOldPrice;
      state.product_discount -= currentProductOldPrice;
      state.order_summary -=
        currentProductPrice + currentProductOldPrice - currentProductOldPrice;
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  incrementProduct,
  decrementProduct,
} = cardSlice.actions;

export default cardSlice;
