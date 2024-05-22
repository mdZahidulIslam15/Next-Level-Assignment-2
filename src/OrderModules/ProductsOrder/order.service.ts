import { TOrderDetails } from "./order.interface";
import { OrderModel } from "./order.model";

interface OrderFilter {
  email?: string;
}

const createOrderDB = async (order: TOrderDetails) => {
  const result = await OrderModel.create(order);
  return result;
};

const getOrderDB = async (email: string) => {
  let filter: OrderFilter = {};

  if (email) {
    filter.email = email;
  }
  const result = await OrderModel.find(filter);
  return result;
};

export const OrderService = {
  createOrderDB,
  getOrderDB,
};
