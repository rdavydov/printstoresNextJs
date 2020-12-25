import { productType } from "../type/card.type";
import { Product } from "../type/products.type";

export interface IProductsGaleryProps {
  title: string;
}

export interface IProducts {
  title?: string;
  productsList: Product[];
}

export interface IProductCategory<T> {
  cardData: Array<productType>;
}

export interface IProduct {
  name: string;
  image: string;
  price: number;
  discount?: number;
  oldPrice: number;
}
