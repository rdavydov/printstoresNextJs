import { Request } from '../http/Request';

class CrumbsService {
  private request = new Request('crumbs');
  getCatalogCrumbs(): Promise<{ path: string; title: string }> {
    return this.request.GET('');
  }

  getCategoryCrumbsByKey(key: string): Promise<{ path: string; title: string }> {
    return this.request.GET('', { query: { key } });
  }
  getProductCrumbsByKeyAndPrefix(prefix: string, id: string): Promise<{ path: string; title: string }> {
    return this.request.GET('', { query: { prefix, id } });
  }

  getProductCrumbsByPrefix(prefix: string): Promise<{ path: string; title: string }> {
    return this.request.GET('', { query: { prefix } });
  }
}

export const crumbsService = new CrumbsService();
