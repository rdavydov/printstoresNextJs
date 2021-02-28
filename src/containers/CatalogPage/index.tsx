import { PaginationConfig } from "antd/lib/pagination";
import debounce from "lodash/debounce";
import { Breadcrumbs } from "src/components/common";
import React, { useContext, useState } from "react";
import Layout from "src/templates/Layout/Layout";
import CatalogPageList from "./List/List";
import SortPanel from "./SortPanel/SortPanel";
import { Router, useRouter } from "next/router";
import { LoaderContext } from "src/context/loaderContext/loaderContext";

const menu = [
  { label: "По названию", value: "name" },
  { label: "По цене", value: "price" },
  { label: "По популярности", value: "popular" },
];

const defaultParams = { page: 1, sortBy: "name", pageSize: 24, filterText: "" };

const queryParams = (params) => new URLSearchParams(params).toString();

const CatalogPage = ({ crumbs, total, products }) => {
  const [searchParams, setSearchParams] = useState(defaultParams);
  const { pathname, replace } = useRouter();

  const loadProducts = (params) => {
    const { page } = params;
    setSearchParams(params);
    replace(
      { pathname, query: queryParams(params) },
      `${pathname}?${queryParams({ page })}`
    );
  };

  const loadProductsWithDebounce = debounce(loadProducts, 500);

  const onSortChange = (params) => {
    const nextSort = { ...searchParams, ...params };
    loadProducts(nextSort);
  };

  const onSearch = (params) => {
    const nextSearch = { ...searchParams, ...params, page: 1 };
    loadProductsWithDebounce(nextSearch);
  };

  const onPageChange = (page: number) => {
    const nextSearch = { ...searchParams, page };
    loadProducts(nextSearch);
  };

  const pagination: PaginationConfig = {
    onChange: onPageChange,
    total,
    pageSize: searchParams.pageSize || 24,
    current: +searchParams.page || 1,
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
      <SortPanel sortBy={sortBy} total={total} searchBy={searchBy} />
      <CatalogPageList products={products} pagination={pagination} />
    </Layout>
  );
};

export default CatalogPage;
