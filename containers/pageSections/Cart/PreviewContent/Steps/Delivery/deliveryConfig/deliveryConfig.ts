const DELIVERY_METHOD = "Способ доставки";
const DELIVERY_ADDRESS = "Адрес доставки";
const DELIVERY_CITY = "Город доставки";
const DELIVERY_TIME = "Время доставки";
const DATE_TIME = "Дата и время";
const PICKUP = {
    title: "Самовывоз",
    time: "После 10.00 в любой день недели",
    price: "Бесплатно",
};
const COURIER_DELIVERY = {
    title: "Доставка курьером",
    time: "В течении 12 часов",
    price: 200 + "Руб.",
};

const selectTime = [
    { label: "10:00 - 13:00", value: "10:00 - 13:00" },
    { label: "13:00 - 16:00", value: "13:00 - 16:00" },
    { label: "16:00 - 19:00", value: "16:00 - 19:00" },
    { label: "19:00 - 22:00", value: "19:00 - 22:00" },
];

export {
    DELIVERY_ADDRESS,
    DELIVERY_METHOD,
    DELIVERY_TIME,
    DELIVERY_CITY,
    DATE_TIME,
    PICKUP,
    COURIER_DELIVERY,
    selectTime,
};

export const deliveryProps = {
    PICKUP: {
        ...PICKUP,
        defaultValue: PICKUP.title,
    },
    COURIER: {
        ...COURIER_DELIVERY,
        defaultValue: COURIER_DELIVERY.title,
    },
};
