import React, { useState } from "react";
import { PaginationConfig } from "antd/lib/pagination";
import debounce from "lodash/debounce";
import CatalogPageList from "./List/List";
import SortPanel from "./SortPanel/SortPanel";
import { useRouter } from "next/router";

const sortMenu = [
  { label: "По названию", value: "name" },
  { label: "По цене", value: "price" },
  { label: "По популярности", value: "popular" },
];

const defaultParams = { page: 1, sortBy: "name", pageSize: 24, filterText: "" };

const queryParams = (params) => new URLSearchParams(params).toString();

const CatalogPage = ({ total, products }) => {
  const { pathname, replace, query } = useRouter();
  const [searchParams, setSearchParams] = useState({
    ...defaultParams,
    ...query,
  });

  const loadProducts = (params) => {
    const { page } = params;
    setSearchParams(params);
    replace(
      { pathname, query: { ...query, ...params } },
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
    menu: sortMenu,
    onClick: onSortChange,
    defaultSortLabel: searchParams.sortBy,
  };

  const searchBy = {
    onChange: onSearch,
  };

  return (
    <>
      <SortPanel
        sortBy={sortBy}
        total={total}
        searchBy={searchBy}
        params={searchParams}
      />
      <CatalogPageList products={products} pagination={pagination} />
    </>
  );
};

export default CatalogPage;
