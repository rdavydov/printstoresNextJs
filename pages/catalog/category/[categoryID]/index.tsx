import axios from "axios";
import { GetStaticProps } from "next";
import React from "react";
import Layout from "../../../../components/Layout/Layout";
import CategoryItems from "../../../../components/pageSections/Category/CategoryItems";
import Promo from "../../../../components/pageSections/Category/Promo";

const CategoryPage = ({ category }) => {
  return (
    <Layout>
      <Promo />
      <CategoryItems categoryItems={category} />
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const response = await axios.get("http://localhost:3010/api/category/all");
  const result = { category: response.data };
  return {
    props: result,
  };
}

export default CategoryPage;
