import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ButtonProps } from "antd/lib/button";

interface ResultPayload {
  status?: "404" | "403" | "success";
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  buttons: Array<{ text: React.ReactNode; onClick?: () => void; route: string } & ButtonProps>;
  onButtonClick?: () => {};
}

const initialState: ResultPayload = {
  status: "404",
  title: "404",
  subTitle: "Ничего не найдено",
  buttons: [{ text: "На главную", onClick: () => null, type: "primary", route: "/" }],
  onButtonClick: () => null,
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    addResult: (state, action: PayloadAction<ResultPayload>) => {
      Object.assign(state, action.payload);
    },
    clearResult: (state, action) => {
      Object.assign(state, initialState);
    },
  },
});

export const { addResult, clearResult } = resultSlice.actions;

export default resultSlice;
