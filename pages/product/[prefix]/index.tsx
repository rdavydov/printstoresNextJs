import React from "react";
import { productService } from "api/services/product.service";
import Layout from "../../../components/Layout/Layout";
import ProductPromo from "components/pageSections/Product/ProductPreview";

const ProductPrefixPage = ({ products }) => {
  return (
        <Layout>
          <ProductPromo products={products} />
        </Layout>
  );
};

export async function getServerSideProps({ params: { prefix } }) {
  const response = await productService.getProductByKey(prefix);
  return {
    props: { products: response.data },
  };
}

export default ProductPrefixPage;
