export type Product = {
  title: string;
  category?: { id: string; title: string };
  related_category: Array<{ categoryID: string }>;
  price: number;
  old_price: number;
  product_id: string | number;
  preview?: string;
  description?: string;
  details?: string;
};
