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
  console.log(context);
  const response = await axios.get("http://localhost:3010/api/category/all");
  console.log(response);
  const result = { category: response.data };
  console.log(result);
  return {
    props: result,
  };
}
export default Catalog;
