import { Product } from "src/types/product/product.type";
import { Request } from "../../http/Request";
import { ProductFilterResponse, ProductsResponse } from "./types/products.types";

class ProductService {
  private request = new Request("product");

  getProductByPrefix(prefix: string): Promise<ProductsResponse> {
    return this.request.GET({ url: "prefix", query: { prefix } });
  }
  getProductById(id: string): Promise<{ products: Product }> {
    return this.request.GET({ url: ":id", params: { id } });
  }

  getAllProducts(page: number | string = 1): Promise<ProductsResponse> {
    return this.request.GET({ url: "all", query: { page } });
  }

  filterProducts(pageSize: string, currentPage: string): Promise<ProductFilterResponse> {
    return this.request.GET({
      url: "filter",
      query: { pageSize, currentPage },
    });
  }
}

export const productService = new ProductService();
