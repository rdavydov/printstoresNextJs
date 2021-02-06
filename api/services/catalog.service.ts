import { Controller } from 'api/http/Controller';
import { Category } from 'types/type/category.type';
import { Product } from 'types/type/products.type';

class CatalogService {
  private controller = new Controller('catalog');

  getAllCategory(): Promise<Category> {
    return this.controller.GET('all');
  }

  catalogFilter(params): Promise<{ products: Product[]; total: number }> {
    return this.controller.GET('filter', { query: { ...params } });
  }
}

export const catalogService = new CatalogService();
