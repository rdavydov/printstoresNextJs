import { IOrder } from "src/types/order/order.types";
import replaceDate from "src/utils/replaceDate";

export function getSendValue(orderValue: IOrder) {
  const { prefix, phone, delivery_method, ...rest } = orderValue;
  const delivery_summary = delivery_method === "Самовывоз" ? 0 : 200;
  return {
    ...rest,
    phone: prefix + phone,
    delivery_method,
    delivery_summary,
    delivery_date: replaceDate(orderValue.delivery_date),
  };
}
