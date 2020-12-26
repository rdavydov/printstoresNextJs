import axios from "axios";
import React from "react";
import Layout from "../../../../components/Layout/Layout";

const OneProductPage = ({ product }) => {
  return <Layout></Layout>;
};

export async function getServerSideProps({ params: { prefix, id } }) {
  const response = await axios.get(
    `http://localhost:3010/api/product/${prefix}/${id}`
  );
  return {
    props: { product: response.data },
  };
}

export default OneProductPage;
