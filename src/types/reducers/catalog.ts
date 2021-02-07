export interface ICatalogQuery {
  pageSize?: number;
  currentPage?: number;
  direction: 'ASC' | 'DESC';
  filterText?: string;
  sortBy?: number;
}
