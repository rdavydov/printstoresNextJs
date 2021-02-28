import { Category } from "src/types/category/category.type";
import { Product } from "src/types/product/product.type";
import { Request } from "../../http/Request";
import { CalalogFilterProducts } from "./types/catalog.response.types";

class CatalogService {
  private request = new Request("catalog");

  getAllProducts(params): Promise<CalalogFilterProducts> {
    return this.request.GET({ query: { ...params } });
  }

  getAllCategory(): Promise<Category> {
    return this.request.GET();
  }
  catalogFilter(params): Promise<CalalogFilterProducts> {
    return this.request.GET({ url: "filter", query: { ...params } });
  }
}

export const catalogService = new CatalogService();
