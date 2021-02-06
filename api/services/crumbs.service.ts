import { Controller } from 'api/http/Controller';

class CrumbsService {
  private controller = new Controller('crumbs');

  getCatalogCrumbs(): Promise<{ path: string; title: string }> {
    return this.controller.GET('');
  }

  getCategoryCrumbsByKey(key: string): Promise<{ path: string; title: string }> {
    return this.controller.GET('', { query: { key } });
  }
  getProductCrumbsByKeyAndPrefix(prefix: string, id: string): Promise<{ path: string; title: string }> {
    return this.controller.GET('', { query: { prefix, id } });
  }

  getProductCrumbsByPrefix(prefix: string): Promise<{ path: string; title: string }> {
    return this.controller.GET('', { query: { prefix } });
  }
}

export const crumbsService = new CrumbsService();
