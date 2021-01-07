type DeliveryData = {
    delivery: {
        method: string;
        city: string;
        address: string;
        date: string;
        time: string;
    };
};

type ContactsData = {
    contacts: {
        phone: string;
        firstName: string;
        email: string;
        social: string;
        message: string;
    };
};

type PaymentsData = {
    payments: { method: string };
};

export type FormValues = DeliveryData | ContactsData | PaymentsData;

export type StepState = DeliveryData & ContactsData & PaymentsData;
