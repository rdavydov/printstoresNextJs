import { Product } from 'src/types/type/products.type';
import { Request } from '../http/Request';

class ProductService {
  private request = new Request('product');

  getProductByPrefix(prefix: string): Promise<{ products: Product[] }> {
    return this.request.GET('prefix', { query: { prefix } });
  }
  getProductById(prefix: string, id: string): Promise<{ products: Product[] }> {
    return this.request.GET(':prefix/:id', { params: { prefix, id } });
  }

  getAllProducts(page: number | string): Promise<{ products: Product[] }> {
    return this.request.GET('all', { query: { page } });
  }

  filterProducts(pageSize: string, currentPage: string): Promise<{ products: Product[]; total: number }> {
    return this.request.GET('filter', { query: { pageSize, currentPage } });
  }
}

export const productService = new ProductService();
