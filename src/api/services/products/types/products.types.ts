import { Product } from "src/types/product/product.type";

export type ProductsResponse = { products: Product[] };

export type ProductFilterResponse = ProductsResponse & { total: number };
