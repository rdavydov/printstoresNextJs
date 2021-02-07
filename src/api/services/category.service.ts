import { Controller } from 'src/api/http/Controller';
import { Category } from 'src/types/type/category.type';
import { BaseService } from './base.service';

class CategoryService extends BaseService {
  /* private controller = new Controller('catalog'); */
  constructor() {
    super();
    this.prefix = 'category';
  }
  getCategoryByKey(key: string): Promise<Category> {
    return this.GET(':key', { params: { key } });
  }

  getAllCategory(): Promise<Category> {
    return this.GET('all');
  }
}

export const categoryService = new CategoryService();
