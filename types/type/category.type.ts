export interface ICategory {
    key: string;
    name: string;
    image: string | Blob | File;
    _id: number;
}
export type Category = { category: ICategory[]; quantity?: number };
