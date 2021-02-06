import { PaginationConfig } from 'antd/lib/pagination';
import { catalogService } from 'api';
import debounce from 'lodash/debounce';
import { BreadcrumbsLinks } from 'components/common';
import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import Layout from 'templates/Layout/Layout';
import CatalogPageList from './List/List';
import SortPanel from './SortPanel/SortPanel';
import { useRouter } from 'next/router';

const menu = [{ label: 'По названию', value: 'name' }, { label: 'По цене', value: 'price' }, { label: 'По популярности', value: 'popular' }];

const queryParams = (params) => new URLSearchParams(params).toString();

const CatalogPage = ({ crumbs, total, products, query }) => {
    const { replace, pathname, } = useRouter();
    const [searchParams, setSearchParams] = useState({ ...query, total });
    const [productsList, setProductsList] = useState(products);
    const [loading, setLoading] = useState(false);

    const loadProducts = useCallback(async (params) => {
        setLoading(true);
        const { total: totalValue, ...search } = params;
        replace({ pathname, query: queryParams(search) })
        const { total, products } = await catalogService.catalogFilter(search);
        setProductsList(products);
        setSearchParams({ ...params, total });
        setLoading(false);
    }, [searchParams]);

    const loadProductsWithDebounce = debounce(loadProducts, 500);

    const onSortChange = (params) => {
        const nextSort = { ...searchParams, ...params, };
        loadProducts(nextSort);
    };

    const onSearch = (params) => {
        const nextSearch = { ...searchParams, ...params, currentPage: 1 };
        loadProductsWithDebounce(nextSearch);
    }

    const onPageChange = (currentPage: number, pageSize: number) => {
        const nextSearch = { ...searchParams, currentPage, pageSize };
        loadProducts(nextSearch);
    }

    const pagination: PaginationConfig = {
        onChange: onPageChange,
        total: searchParams.total,
        current: +searchParams.currentPage,
        pageSize: searchParams.pageSize,
        hideOnSinglePage: true
    }

    const sortBy = {
        menu,
        onClick: onSortChange,
        defaultSortLabel: searchParams.sortBy,
    };

    const searchBy = {
        onChange: onSearch
    }

    return (
        <Layout>
            <BreadcrumbsLinks crumbs={crumbs} />
            <SortPanel sortBy={sortBy} total={searchParams.total} searchBy={searchBy} />
            <CatalogPageList products={productsList} pagination={pagination} loading={loading} />
        </Layout>
    );


}


export default CatalogPage;