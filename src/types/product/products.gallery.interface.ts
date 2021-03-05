import { productType } from "./card.type";
import { Product } from "./product.type";

export interface IProductsGaleryProps {
  title: string;
}
export type ProductsGallery = Pick<
  Product,
  "old_price" | "price" | "title" | "product_id" | "preview"
>;

export interface IProducts {
  title?: string;
  productsList: ProductsGallery[];
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
