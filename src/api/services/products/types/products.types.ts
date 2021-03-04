import { Product } from "src/types/product/product.type";

export type ProductsResponse = { products: Product[]; total: number };

export type ProductFilterResponse = ProductsResponse & { total: number };
