import { productService } from "src/api/services/products/product.service";
import React from "react";
import Layout from "src/templates/Layout/Layout";
import { menuService } from "src/api/services/menu/menu.service";
import { Breadcrumbs, Gallery } from "src/components/common";
import { ProductInfo, ProductItem } from "src/containers/product";
import { catalogService } from "src/api";

const OneProductPage = ({ products, menu, recomennded }) => (
  <Layout menu={menu}>
    <Breadcrumbs crumbs={menu} />
    <div style={{ paddingTop: 25, paddingBottom: 60 }}>
      <ProductItem {...products} />
      <ProductInfo {...products} />
      {/* <ProductRecommended /> */}
      <Gallery products={recomennded} title="Рекомендуемые товары" titleProps={{ bold: true }} />
    </div>
  </Layout>
);

export async function getServerSideProps({ params: { id } }) {
  const { menu } = await menuService.getPageMenu("catalog");
  const { products } = await productService.getProductById(id);
  const recomennded = await catalogService.filterProducts({ filterBy: "rating", limit: 30 });

  return {
    props: { products, menu, recomennded: recomennded.products },
  };
}

export default OneProductPage;
