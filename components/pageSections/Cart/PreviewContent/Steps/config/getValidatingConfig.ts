import { Rule } from "antd/lib/form";

interface IValidating {
    firstName: Rule[];
    phone: Rule[];
    email: Rule[];
    social: Rule[];
    method: Rule[];
    city: Rule[];
    address: Rule[];
    date: Rule[];
    time: Rule[];
}

const validate: IValidating = {
    firstName: [{ required: true, message: "Пожалуйста, укажите Ваше имя" }],
    phone: [
        {
            required: true,
            message: "Укажите Ваш номер телефона",
        },
    ],
    email: [{ message: "Укажите Ваш e-mail", type: "email" }],
    social: [{ type: "url" }],
    method: [{ required: true, message: "Выберите способ доставки" }],
    address: [{ required: true, message: "Укажите адрес доставки" }],
    city: [{ required: true, message: "Укажите город доставки" }],
    date: [{ required: true, message: "Выберите дату доставки" }],
    time: [{ required: true, message: "Выберите время доставки" }],
};

export const getValidatingConfig = () => {
    return { validate };
};
