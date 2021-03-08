import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartCheckout {
  delivery: { method: "PICKUP" | "COURIER"; address: string };
  city: string;
  country: string;
  client: {
    phone: string | number;
    email: string;
    firstName: string;
    surname: string;
    patronymic: string;
  };
  order_comment: string;
  payment_method: "CASH" | "NON_CASH";
}

const initialState: ICartCheckout = {
  delivery: { method: "PICKUP", address: "" },
  city: "Ростов-На-Дону",
  country: "Россия",
  client: {
    phone: "",
    email: "",
    firstName: "",
    surname: "",
    patronymic: "",
  },
  payment_method: "CASH",
  order_comment: "",
};

const cartCheckoutSlice = createSlice({
  name: "cart/checkout",
  initialState,
  reducers: {
    updateCheckoutFields: (state, action: PayloadAction<ICartCheckout>) => {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
        if (key === "delivery" && action.payload.delivery.method === "PICKUP") {
          state.delivery.address = "";
        }
      });
    },
    resetCheckoutFields: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { updateCheckoutFields, resetCheckoutFields } = cartCheckoutSlice.actions;

export default cartCheckoutSlice;
