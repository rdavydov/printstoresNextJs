import 'reflect-metadata';
import { Product } from 'types/type/products.type';
import { Controller } from 'api/http/Controller';

class ProductService {
  private controller = new Controller('product');

  getProductByPrefix(prefix: string): Promise<{ products: Product[] }> {
    return this.controller.GET('prefix', { query: { prefix } });
  }
  getProductById(prefix: string, id: string): Promise<{ products: Product[] }> {
    return this.controller.GET(':prefix/:id', { params: { prefix, id } });
  }

  getAllProducts(page: number | string): Promise<{ products: Product[] }> {
    console.log(page, 'page');
    return this.controller.GET('all', { query: { page } });
  }

  filterProducts(pageSize: string, currentPage: string): Promise<{ products: Product[]; total: number }> {
    return this.controller.GET('filter', { query: { pageSize, currentPage } });
  }
}

export const productService = new ProductService();
