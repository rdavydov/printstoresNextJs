import { PaginationConfig } from 'antd/lib/pagination';
import { ProductsList } from 'src/components/common';
import { routesConfig } from 'src/config/routes/routes';
import { useRouter } from 'next/router';
import React from 'react';
import { ProductsCard } from 'src/types/products-cards';


interface IProps {
    products: ProductsCard[];
    pagination: PaginationConfig;
}

const CatalogPageList = ({ products, pagination }: IProps) => {
    const { push } = useRouter();
    const goLocation = ({ name, prefix, _id }) => {
        const path = routesConfig.getProductItemRoute();
        push({ pathname: path, query: { title: name, prefix, id: _id } }, path);
    };

    return (
        <ProductsList dataSource={products} goLocation={goLocation} pagination={pagination} />
    )

}



export default CatalogPageList;