import { Category } from 'src/types/type/category.type';
import { Product } from 'src/types/type/products.type';
import { BaseService } from './base/base.service';

class CatalogService extends BaseService {
  constructor() {
    super();
    this.prefix = 'catalog';
  }
  getAllCategory(): Promise<Category> {
    return this.GET('all');
  }

  catalogFilter(
    params
  ): Promise<{
    products: Product[];
    total: number;
    searchParams: { sortBy: string; filterText: string; pageSize: number; currentPage: number; direction: string };
  }> {
    return this.GET('filter', { query: { ...params } });
  }
}

export const catalogService = new CatalogService();
