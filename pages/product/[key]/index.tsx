import axios from "axios";
import React from "react";
import Layout from "../../../components/Layout/Layout";
import ProductPromo from "../../../components/pageSections/Product/ProductPreview";

const ProductPage = ({ products = [] }) => {
  return (
    <Layout>
      <ProductPromo products={products} />
    </Layout>
  );
};

export async function getServerSideProps({ params: { key } }) {
  try {
    const response = await axios.get(
      `http://localhost:3010/api/product/${key}`
    );

    return {
      props: { products: response.data },
    };
  } catch {
    return {
      props: { products: [] },
    };
  }
}

export default ProductPage;
