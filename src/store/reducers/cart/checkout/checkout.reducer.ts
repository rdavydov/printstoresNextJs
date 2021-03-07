import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  delivery: { method: "Курьер", address: "" },
  city: "Ростов-На-Дону",
  country: "Россия",
  client: {
    phone: "",
    email: "",
    firstName: "",
    surname: "",
    patronymic: "",
  },
  order_comment: "",
};

const cartCheckoutSlice = createSlice({
  name: "cart/checkout",
  initialState,
  reducers: {
    updateCheckoutFields: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
        if (
          key === "delivery" &&
          action.payload.delivery.method === "Самовывоз"
        ) {
          state.delivery.address = "";
        }
      });
    },
  },
});

export const { updateCheckoutFields } = cartCheckoutSlice.actions;

export default cartCheckoutSlice;
