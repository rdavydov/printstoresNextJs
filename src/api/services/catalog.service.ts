import { connect } from 'react-redux';
import { Category } from 'src/types/type/category.type';
import { Product } from 'src/types/type/products.type';
import { Request } from '../http/Request';

class CatalogService {
  private request = new Request('catalog');

  getAllCategory(): Promise<Category> {
    return this.request.GET('all');
  }
  catalogFilter(
    params
  ): Promise<{
    products: Product[];
    total: number;
    searchParams: {
      sortBy: string;
      filterText: string;
      pageSize: number;
      currentPage: number;
      direction: string;
    };
  }> {
    return this.request.GET('filter', { query: { ...params } });
  }
}

export const catalogService = new CatalogService();
