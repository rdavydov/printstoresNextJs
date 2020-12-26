import axios from "axios";
import React from "react";
import Layout from "../../../../components/Layout/Layout";
import CategoryItems from "../../../../components/pageSections/Category/CategoryItems";
import Promo from "../../../../components/pageSections/Category/Promo";

const CategoryPage = ({ categoryData }) => {
  return (
    <Layout>
      <Promo />
      <CategoryItems categoryItems={categoryData} />
    </Layout>
  );
};

export async function getServerSideProps({ params: { key } }) {
  console.log(key);
  const response = await axios.get(`http://localhost:3010/api/category/${key}`);
  console.log(response.data);
  return {
    props: { categoryData: response.data },
  };
}

export default CategoryPage;
