import { PaginationConfig } from "antd/lib/pagination";
import { ProductsList } from "src/components/common";
import React from "react";
import { Product } from "src/types/product/product.type";

interface IProps {
  products: Product[];
  pagination: PaginationConfig;
}

const CatalogPageList = ({ products, pagination }: IProps) => {
  return <ProductsList dataSource={products} pagination={pagination} />;
};

export default CatalogPageList;
