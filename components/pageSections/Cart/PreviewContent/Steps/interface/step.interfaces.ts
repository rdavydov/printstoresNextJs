type DeliveryData = {
    method: "Курьер" | "Самовывоз" | string;
    city: string;
    address: string;
    date: string;
    time: string;
};

type ContactsData = {
    phone: string;
    firstName: string;
    email: string;
    social: string;
    message: string;
    prefix: string;
};

type PaymentsData = {
    method: string;
};

export interface IDeliveryData {
    method: "Курьер" | "Самовывоз" | string;
    city: string;
    address: string;
    date: string;
    time: string;
}

export interface FormValues {
    delivery?: DeliveryData;
    contacts?: ContactsData;
    payments?: PaymentsData;
}

export interface StepState {
    delivery: DeliveryData;
    contacts: ContactsData;
    payments: PaymentsData;
}
