export interface IfetchCreateProduct {
    name: string;
    image: string | Blob;
    price: number;
    oldPrice?: number;
    description?: string;
    details?: string;
    seo?: { meta: string; title: string; description: string };
    prefix?: string;
    key: string;
    _id?: number;
}
