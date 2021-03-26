import { Request } from "../../http/Request";
import { CrumbsResponse } from "./types/crumbs.types";

class CrumbsService {
  private request = new Request("crumbs");
  getCatalogCrumbs(): Promise<CrumbsResponse> {
    return this.request.GET();
  }

  getCategoryCrumbsByKey(key: string): Promise<CrumbsResponse> {
    return this.request.GET({ query: { key } });
  }
  getProductCrumbsByKeyAndPrefix(prefix: string, id: string): Promise<CrumbsResponse> {
    return this.request.GET({ query: { prefix, id } });
  }

  getProductCrumbsByPrefix(prefix: string): Promise<CrumbsResponse> {
    return this.request.GET({ query: { prefix } });
  }
}

export const crumbsService = new CrumbsService();
