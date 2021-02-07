import { BaseService } from './base/base.service';

class CrumbsService extends BaseService {
  constructor() {
    super();
    this.prefix = 'crumbs';
  }

  getCatalogCrumbs(): Promise<{ path: string; title: string }> {
    return this.GET('');
  }

  getCategoryCrumbsByKey(key: string): Promise<{ path: string; title: string }> {
    return this.GET('', { query: { key } });
  }
  getProductCrumbsByKeyAndPrefix(prefix: string, id: string): Promise<{ path: string; title: string }> {
    return this.GET('', { query: { prefix, id } });
  }

  getProductCrumbsByPrefix(prefix: string): Promise<{ path: string; title: string }> {
    return this.GET('', { query: { prefix } });
  }
}

export const crumbsService = new CrumbsService();
