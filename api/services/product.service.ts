import 'reflect-metadata';
import { Product } from 'types/type/products.type';
import { Controller } from 'api/http/Controller';

class ProductService {
  private controller = new Controller('product');

  getProductByPrefix(prefix: string): Promise<{ products: Product[] }> {
    return this.controller.Get('prefix', { query: { prefix } });
  }
  getProductById(prefix: string, id: string): Promise<{ products: Product[] }> {
    return this.controller.Get(':prefix/:id', { params: { prefix, id } });
  }

  getAllProducts(): Promise<{ products: Product[] }> {
    return this.controller.Get('all');
  }

  filterProducts(pageSize: string, currentPage: string): Promise<{ products: Product[]; total: number }> {
    return this.controller.Get('filter', { query: { pageSize, currentPage } });
  }
}

export const productService = new ProductService();
