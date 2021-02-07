import { createSlice } from '@reduxjs/toolkit';

export interface ICart {
  name: string;
  price: number;
  id: number;
  image: string;
  quantity: number;
}

export interface ICardInitState {
  product: ICart[];
}
const initialState: ICardInitState = {
  product: [],
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const findValue = state.product.find(({ id }) => id === action.payload.product.id);
      if (!findValue) {
        state.product.push(action.payload.product);
      }
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.product = state.product.filter((product) => product.id !== id);
    },
    incrementProduct: (state, action) => {
      const id = action.payload;
      const findValue = state.product.find((product) => product.id === id);
      findValue.quantity += 1;
    },
    decrementProduct: (state, action) => {
      const id = action.payload;
      const findValue = state.product.find((product) => product.id === id);
      if (findValue.quantity - 1 <= 0) {
        state.product = state.product.filter((product) => product.id !== id);
      } else {
        findValue.quantity -= 1;
      }
    },
  },
});

export const { addProduct, deleteProduct, incrementProduct, decrementProduct } = cardSlice.actions;

export default cardSlice;
