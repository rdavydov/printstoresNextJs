import React from "react";
import Layout from "../../../../components/Layout/Layout";
import CategoryItems from "../../../../components/pageSections/Category/CategoryItems";
import Promo from "../../../../components/pageSections/Category/Promo";

const CategoryPage = () => {
  return (
    <Layout>
      <Promo />
      <CategoryItems />
    </Layout>
  );
};

export default CategoryPage;
