import React from "react";
import Layout from "../../components/Layout/Layout";
import CatalogItems from "../../components/pageSections/Catalog/CatalogItems";

import Promo from "../../components/pageSections/Catalog/Promo";

const Catalog = () => {
  return (
    <Layout>
      <Promo />
      <CatalogItems />
    </Layout>
  );
};

export default Catalog;
