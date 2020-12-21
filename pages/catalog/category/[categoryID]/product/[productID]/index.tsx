import React from "react";
import Layout from "../../../../../../components/Layout/Layout";
import ProductItems from "../../../../../../components/pageSections/Products/ProductItems";
import Promo from "../../../../../../components/pageSections/Products/Promo";

const ProductPage = () => {
  return (
    <Layout>
      <Promo />
      <ProductItems />
    </Layout>
  );
};

export default ProductPage;
