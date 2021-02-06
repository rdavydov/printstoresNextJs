import { BreadcrumbsLinks } from 'components/common';
import { routesConfig } from 'config/routes/routes';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from 'templates/Layout/Layout';
import CatalogPageList from './List/List';
import SortPanel from './SortPanel/SortPanel';




const menu = [{ label: 'По названию', value: 'name' }, { label: 'По цене', value: 'price' }, { label: 'По популярности', value: 'popular' }]

const CatalogPage = ({ products, crumbs }) => {

    const onSortChange = (params) => {


        console.log(params, 'params');
    }

    const sortBy = {
        menu,
        onClick: onSortChange,
    }

    return (
        <Layout>
            <BreadcrumbsLinks crumbs={crumbs} />
            <SortPanel sortBy={sortBy} />
            <CatalogPageList products={products} />
        </Layout>
    );


}


export default CatalogPage;