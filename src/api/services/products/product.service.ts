import { Request } from "../../http/Request";
import { ProductFilterResponse, ProductsResponse } from "./types/products.types";

class ProductService {
  private request = new Request("product");

  getProductByPrefix(prefix: string): Promise<ProductsResponse> {
    return this.request.GET("prefix", { query: { prefix } });
  }
  getProductById(prefix: string, id: string): Promise<ProductsResponse> {
    return this.request.GET(":prefix/:id", { params: { prefix, id } });
  }

  getAllProducts(page: number | string): Promise<ProductsResponse> {
    return this.request.GET("all", { query: { page } });
  }

  filterProducts(pageSize: string, currentPage: string): Promise<ProductFilterResponse> {
    return this.request.GET("filter", { query: { pageSize, currentPage } });
  }
}

export const productService = new ProductService();
