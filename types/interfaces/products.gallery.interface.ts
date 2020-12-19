import { Product } from "../type/products.type";

export interface IProductsGaleryProps {
  title: string;
}

export interface IProducts {
  title: string;
  productsList: Product[];
}
