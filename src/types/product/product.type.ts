export type Product = {
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  description?: string;
  details?: string;
  seo?: { meta: string; title: string; description: string };
  prefix?: string;
  key?: string;
  _id?: number;
};
