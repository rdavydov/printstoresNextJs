import axios from "axios";
import React from "react";
import Layout from "../../../components/Layout/Layout";

const ProductPrefixPage = ({ products }) => {
  return <Layout></Layout>;
};

export async function getServerSideProps({ params: { prefix } }) {
  const response = await axios.get(
    `http://localhost:3010/api/product/${prefix}`
  );

  return {
    props: { products: response.data },
  };
}

export default ProductPrefixPage;
