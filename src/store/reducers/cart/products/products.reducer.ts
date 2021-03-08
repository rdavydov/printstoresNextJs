import { createSlice } from "@reduxjs/toolkit";

export interface ICart {
  title: string;
  price: number;
  id: number | string;
  preview: string;
  quantity: number;
  old_price: null | number;
}

export interface ICardInitState {
  products: ICart[];
  promocode: null | string;
  order_summary: number;
  product_discount: number | null;
  product_summary: number | null;
}
const initialState: ICardInitState = {
  products: [],
  promocode: null,
  order_summary: null,
  product_summary: null,
  product_discount: null,
};

const cartProductsSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCartProduct: (state, action) => {
      const findValue = state.products.find(({ id }) => id === action.payload.id);
      if (!findValue) {
        state.products.push(action.payload);
        const productPrice = action.payload.price + (action.payload.old_price || 0);

        state.product_summary += productPrice;

        state.order_summary += productPrice - (action.payload.old_price || 0);

        if (action.payload.old_price) {
          state.product_discount += action.payload.old_price;
        }
      }
    },
    deleteCartProduct: (state, action) => {
      const id = action.payload;
      const currentProduct = state.products.find((product) => product.id === id);
      const currentProductPrice = currentProduct.price;
      const currentProductQuantity = currentProduct.quantity;
      const currentProductOldPrice = currentProduct.old_price || 0;

      const product_current_sum =
        currentProductPrice * currentProductQuantity + currentProductOldPrice * currentProductQuantity;

      const product_current_discount = currentProductOldPrice * currentProductQuantity;

      state.product_summary -= product_current_sum;
      state.product_discount -= product_current_discount;
      state.order_summary -= product_current_sum - product_current_discount;
      state.products = state.products.filter((product) => product.id !== id);
    },
    incrementCartProduct: (state, action) => {
      const id = action.payload;
      const currentProduct = state.products.find((product) => product.id === id);
      currentProduct.quantity += 1;
      const currentProductPrice = currentProduct.price;
      const currentProductOldPrice = currentProduct.old_price || 0;
      state.product_summary += currentProductPrice + currentProductOldPrice;
      state.product_discount += currentProductOldPrice;
      state.order_summary += currentProductPrice + currentProductOldPrice - currentProductOldPrice;
    },
    decrementCartProduct: (state, action) => {
      const id = action.payload;
      const currentProduct = state.products.find((product) => product.id === id);
      currentProduct.quantity -= 1;
      const currentProductPrice = currentProduct.price;
      const currentProductOldPrice = currentProduct.old_price || 0;
      state.product_summary -= currentProductPrice + currentProductOldPrice;
      state.product_discount -= currentProductOldPrice;
      state.order_summary -= currentProductPrice + currentProductOldPrice - currentProductOldPrice;
    },
    resetCartProducts: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  addCartProduct,
  deleteCartProduct,
  incrementCartProduct,
  decrementCartProduct,
  resetCartProducts,
} = cartProductsSlice.actions;

export default cartProductsSlice;
