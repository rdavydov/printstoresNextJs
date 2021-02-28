import { Request } from "../../http/Request";
import { OrderDto } from "./order.dto";

class OrderService {
  request = new Request();

  createOrder(order: OrderDto): Promise<{ orderID: number }> {
    return this.request.POST("order", order);
  }

  getOrder(
    orderID: string | number
  ): Promise<{
    orderID: number;
    order_summary: number;
    created_at: string | number;
  }> {
    return this.request.GET({ url: "order", query: { orderID } });
  }
}

export const orderService = new OrderService();
