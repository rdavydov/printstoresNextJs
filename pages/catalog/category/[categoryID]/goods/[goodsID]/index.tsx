import React from "react";
import Layout from "../../../../../../components/Layout/Layout";
import GoodsItems from "../../../../../../components/pageSections/Goods/GoodsItems";
import Promo from "../../../../../../components/pageSections/Goods/Promo";

const GoodsPage = () => {
  return (
    <Layout>
      <Promo />
      <GoodsItems />
    </Layout>
  );
};

export default GoodsPage;
