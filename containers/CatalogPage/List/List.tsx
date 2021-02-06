import { PaginationConfig } from 'antd/lib/pagination';
import { ProductsList } from 'components/common';
import { routesConfig } from 'config/routes/routes';
import { useRouter } from 'next/router';
import React from 'react';
import { ProductsCard } from 'types/products-cards';


interface IProps {
    products: ProductsCard[];
    pagination: PaginationConfig;
    loading: boolean;
}

const CatalogPageList = ({ products, pagination, loading }: IProps) => {
    const { push } = useRouter();
    const goLocation = ({ name, prefix, _id }) => {
        const path = routesConfig.getProductItemRoute();
        push({ pathname: path, query: { title: name, prefix, id: _id } }, path);
    };

    return (
        <ProductsList dataSource={products} goLocation={goLocation} pagination={pagination} loading={loading} />
    )

}



export default CatalogPageList;