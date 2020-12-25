import axios from "axios";
import React from "react";
import Layout from "../../components/Layout/Layout";
import CatalogItems from "../../components/pageSections/Catalog/CatalogItems";

import Promo from "../../components/pageSections/Catalog/Promo";

const Catalog = ({ category }) => {
  return (
    <Layout>
      <Promo />
      <CatalogItems category={category} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:3010/api/catalog/all");

  const result = { category: response.data };
  return {
    props: result,
  };
}
export default Catalog;
