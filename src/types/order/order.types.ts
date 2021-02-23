import { Moment } from "moment";

export interface IOrder {
  clientName: string;
  email: string;
  phone: number | string;
  message: string;
  social?: string;
  delivery_method: string;
  delivery_city: string;
  delivery_address: string;
  delivery_date: Moment;
  delivery_time: string;
  delivery_summary: string | number;
  payment_method: string;
  order_products: any[];
  order_summary: string | number;
  prefix: string;
}
