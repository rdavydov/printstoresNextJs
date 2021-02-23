import { Category } from "src/types/category/category.type";
import { Request } from "../../http/Request";

class CategoryService {
  private request = new Request("category");

  getCategoryByKey(key: string): Promise<Category> {
    return this.request.GET(":key", { params: { key } });
  }

  getAllCategory(): Promise<Category> {
    return this.request.GET("all");
  }
}

export const categoryService = new CategoryService();
