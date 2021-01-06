import { createSlice, Slice } from "@reduxjs/toolkit";

interface ICardInitState {
    name?: string;
    price?: number;
    _id?: number;
    image?: string;
    quantity?: number;
}
const initialState: ICardInitState[] = [];

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {},
});

export default cardSlice;
