import { Prefix } from "utils/decorators/Prefix";
import { Action } from "utils/decorators/Action";

import ApiClient, { get } from "../ApiClient";

@Prefix("catalog")
class CatalogService extends ApiClient {
  @Action("all")
  getAllCategory() {
    return get(arguments);
  }
}

export const catalogService = new CatalogService();
