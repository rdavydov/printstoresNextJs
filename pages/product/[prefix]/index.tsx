import React from "react";
import { productService } from "api/services/product.service";
import { Layout } from "containers/Layout";
import ProductPromo from "containers/pageSections/Product/ProductPreview";
import Promo from "containers/pageSections/Product/Promo";

const ProductPrefixPage = ({ itemsList, crumbs }) => {
    console.log(crumbs);
    return (
        <Layout>
            <Promo crumbs={crumbs} />
            <ProductPromo products={itemsList} />
        </Layout>
    );
};

export async function getServerSideProps({ params: { prefix } }) {
    const {
        data: { crumbs, itemsList },
    } = await productService.getProductByKey(prefix);
    return {
        props: { itemsList, crumbs },
    };
}

export default ProductPrefixPage;
