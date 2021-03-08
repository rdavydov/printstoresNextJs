export interface CartCheckoutFormValue {
  city: string;
  country: string;
  delivery: {
    method: "COURIER" | "PICKUP";
    address?: string;
  };
  client: {
    firstName: string;
    surname: string;
    patronymic?: string;
    phone: string | number;
    email: string;
  };
  order_comment: string;
  payment_method: "CASH" | "NON_CASH";
}
