import React from "react";
import Layout from "../../components/Layout/Layout";
import CategorySection from "../../components/pageSections/Catalog/CategorySection";
import Promo from "../../components/pageSections/Catalog/Promo";

const Catalog = () => {
  return (
    <Layout>
      <Promo />
      <CategorySection />
    </Layout>
  );
};

export default Catalog;
