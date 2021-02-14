import { PaginationConfig } from 'antd/lib/pagination';
import debounce from 'lodash/debounce';
import { Breadcrumbs } from 'src/components/common';
import React from 'react';
import Layout from 'src/templates/Layout/Layout';
import CatalogPageList from './List/List';
import SortPanel from './SortPanel/SortPanel';
import { useRouter } from 'next/router';


const menu = [
    { label: 'По названию', value: 'name' },
    { label: 'По цене', value: 'price' },
    { label: 'По популярности', value: 'popular' },
];

const queryParams = (params) => new URLSearchParams(params).toString();

const CatalogPage = ({ crumbs, total, products, searchParams }) => {
    const { pathname, replace } = useRouter();

    const loadProducts = (params) => {
        const { currentPage } = params;
        replace({ pathname, query: queryParams(params) }, `${pathname}?${queryParams({ currentPage })}`);
    };

    const loadProductsWithDebounce = debounce(loadProducts, 500);

    const onSortChange = (params) => {
        const nextSort = { ...searchParams, ...params };
        loadProducts(nextSort);
    };

    const onSearch = (params) => {
        const nextSearch = { ...searchParams, ...params, currentPage: 1 };
        loadProductsWithDebounce(nextSearch);

    };

    const onPageChange = (currentPage: number) => {
        const nextSearch = { ...searchParams, currentPage };
        loadProducts(nextSearch);
    };

    const pagination: PaginationConfig = {
        onChange: onPageChange,
        total,
        pageSize: searchParams.pageSize,
        current: +searchParams.currentPage,
        hideOnSinglePage: true,
    };

    const sortBy = {
        menu,
        onClick: onSortChange,
        defaultSortLabel: searchParams.sortBy,
    };

    const searchBy = {
        onChange: onSearch,
    };

    return (
        <Layout>
            <Breadcrumbs crumbs={crumbs} />
            <SortPanel sortBy={sortBy} total={total} searchBy={searchBy} />
            <CatalogPageList products={products} pagination={pagination} />
        </Layout>
    );
};

export default CatalogPage;
