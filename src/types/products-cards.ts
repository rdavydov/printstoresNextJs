import { Product } from "./product/product.type";

export type ProductsCard = {
  _id: number;
  image: string;
  price: number;
  oldPrice: number;
  name: string;
  prefix: string;
  key: string;
};

export interface IProductsCard {
  dataSource: Product[];
}
