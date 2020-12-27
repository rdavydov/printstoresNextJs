import { get } from "api/ApiClient";
import { Action } from "utils/decorators/Action";
import { Prefix } from "utils/decorators/Prefix";

@Prefix("category")
class CategoryService {
  @Action()
  getCategoryByKey(key: string) {
    return get(arguments, [key]);
  }
}

export const categoryService = new CategoryService();
