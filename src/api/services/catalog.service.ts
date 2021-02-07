import { Controller } from 'src/api/http/Controller';
import { Category } from 'src/types/type/category.type';
import { Product } from 'src/types/type/products.type';
import { BaseService } from './base.service';

class CatalogService extends BaseService {
  /* private controller = new Controller('catalog'); */
  constructor() {
    super();
    this.prefix = 'catalog';
  }
  getAllCategory(): Promise<Category> {
    return this.GET('all');
  }

  catalogFilter(params): Promise<{ products: Product[]; total: number }> {
    return this.GET('filter', { query: { ...params } });
  }
}

export const catalogService = new CatalogService();
