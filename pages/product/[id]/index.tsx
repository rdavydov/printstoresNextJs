import { productService } from "src/api/services/products/product.service";
import React from "react";
import Layout from "src/templates/Layout/Layout";
import { menuService } from "src/api/services/menu/menu.service";
import { Breadcrumbs } from "src/components/common";
import { ProductWrapper } from "src/containers/product/styled";
import { ProductInfo, ProductItem, ProductRecommended } from "src/containers/product";

const OneProductPage = ({ products, menu }) => (
  <Layout menu={menu}>
    <Breadcrumbs crumbs={menu} />
    <ProductWrapper>
      <ProductItem {...products} />
      <ProductInfo {...products} />
      <ProductRecommended />
    </ProductWrapper>
  </Layout>
);

export async function getServerSideProps({ params: { id } }) {
  const { menu } = await menuService.getPageMenu("catalog");
  const { products } = await productService.getProductById(id);

  return {
    props: { products, menu },
  };
}

export default OneProductPage;
