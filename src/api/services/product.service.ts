import 'reflect-metadata';
import { Product } from 'src/types/type/products.type';
import { BaseService } from './base/base.service';

class ProductService extends BaseService {
  constructor() {
    super();
    this.prefix = 'products';
  }
  getProductByPrefix(prefix: string): Promise<{ products: Product[] }> {
    return this.GET('prefix', { query: { prefix } });
  }
  getProductById(prefix: string, id: string): Promise<{ products: Product[] }> {
    return this.GET(':prefix/:id', { params: { prefix, id } });
  }

  getAllProducts(page: number | string): Promise<{ products: Product[] }> {
    console.log(page, 'page');
    return this.GET('all', { query: { page } });
  }

  filterProducts(pageSize: string, currentPage: string): Promise<{ products: Product[]; total: number }> {
    return this.GET('filter', { query: { pageSize, currentPage } });
  }
}

export const productService = new ProductService();
