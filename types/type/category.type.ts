export interface ICategory {
    key: string;
    name: string;
    image: string;
    _id: number;
}
export type Category = { category: ICategory[]; quantity?: number };
