export type ProductsCard = {
    _id:number,
    image:string,
    price:number,
    oldPrice:number,
    name:string,
    prefix:string,
    key:string
}

export interface IProductsCard{
    dataSource:ProductsCard[];
    goLocation:(props:ProductsCard) => void;
}
