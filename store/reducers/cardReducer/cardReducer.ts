import { createSlice } from "@reduxjs/toolkit";

export interface ICardInitState {
    name: string;
    price: number;
    _id: number;
    image: string;
    quantity: number;
}
const initialState: ICardInitState[] = [
    {
        name: "Майка с принтом(фиол.)",
        price: 500,
        _id: 1,
        image:
            "https://storage.vsemayki.ru/images/0/2/2761/2761177/previews/people_3_child_hoodie_full_front_black_500.jpg",
        quantity: 4,
    },
    {
        name: "Майка с принтом(фиол.)",
        price: 500,
        _id: 1,
        image:
            "https://storage.vsemayki.ru/images/0/2/2761/2761177/previews/people_3_child_hoodie_full_front_black_500.jpg",
        quantity: 4,
    },
    {
        name: "Майка с класнным принтом(фиол.)",
        price: 800,
        _id: 2,
        image:
            "https://storage.vsemayki.ru/images/0/2/2761/2761177/previews/people_3_child_hoodie_full_front_black_500.jpg",
        quantity: 3,
    },
];

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {},
});

export default cardSlice;
