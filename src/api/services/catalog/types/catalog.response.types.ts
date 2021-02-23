import { Product } from "src/types/product/product.type";

export interface CalalogFilterProducts {
  products: Product[];
  total: number;
  searchParams: {
    sortBy: string;
    filterText: string;
    pageSize: number;
    currentPage: number;
    direction: string;
  };
}
