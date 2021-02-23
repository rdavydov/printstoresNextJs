import { Category } from "src/types/category/category.type";
import { Request } from "../../http/Request";
import { CalalogFilterProducts } from "./types/catalog.response.types";

class CatalogService {
  private request = new Request("catalog");

  getAllCategory(): Promise<Category> {
    return this.request.GET("all");
  }
  catalogFilter(params): Promise<CalalogFilterProducts> {
    return this.request.GET("filter", { query: { ...params } });
  }
}

export const catalogService = new CatalogService();
