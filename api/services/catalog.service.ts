import { Controller } from 'api/http/Controller';
import { Category } from 'types/type/category.type';

class CatalogService {
  private controller = new Controller('catalog');

  getAllCategory(): Promise<Category> {
    return this.controller.Get('all');
  }
}

export const catalogService = new CatalogService();
