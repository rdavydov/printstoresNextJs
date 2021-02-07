import { PaginationConfig } from 'antd/lib/pagination';
import debounce from 'lodash/debounce';
import { BreadcrumbsLinks } from 'src/components/common';
import React, { useState } from 'react';
import Layout from 'src/templates/Layout/Layout';
import CatalogPageList from './List/List';
import SortPanel from './SortPanel/SortPanel';
import { Router, useRouter } from 'next/router';
import { getInitialQuery } from 'src/utils/validateQuery';

const menu = [
    { label: 'По названию', value: 'name' },
    { label: 'По цене', value: 'price' },
    { label: 'По популярности', value: 'popular' },
];
const defaultParams = { pageSize: 8, direction: 'ASC', currentPage: 1, filterText: '', sortBy: '' };

const queryParams = (params) => new URLSearchParams(params).toString();

const CatalogPage = ({ crumbs, total, products, query }) => {
    const { pathname, replace } = useRouter();
    const searchParams = React.useMemo(() => {
        return getInitialQuery<typeof defaultParams>(query, defaultParams);
    }, [query]);

    const loadProducts = async (params) => {
        replace({ pathname, query: queryParams(params) }, `${pathname}?${queryParams(query.currentPage)}`);
    };

    const loadProductsWithDebounce = debounce(loadProducts, 500);

    const onSortChange = (params) => {
        const nextSort = { ...searchParams, ...params };
        loadProducts(nextSort);
    };

    const onSearch = (params) => {
        const nextSearch = { ...searchParams, ...params, currentPage: 1 };
        if (params.filterText.length > 3) {
            loadProductsWithDebounce(nextSearch);
        }
    };

    const onPageChange = (currentPage: number, pageSize: number) => {
        const nextSearch = { ...searchParams, currentPage, pageSize };
        loadProducts(nextSearch);
    };

    const pagination: PaginationConfig = {
        onChange: onPageChange,
        total,
        current: +searchParams.currentPage,
        pageSize: searchParams.pageSize,
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
            <BreadcrumbsLinks crumbs={crumbs} />
            <SortPanel sortBy={sortBy} total={total} searchBy={searchBy} />
            <CatalogPageList products={products} pagination={pagination} />
        </Layout>
    );
};

export default CatalogPage;
