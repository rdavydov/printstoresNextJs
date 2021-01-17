import { productService } from "api/services/product.service";
import ProductItemPreview from "containers/pageSections/ProductsPreviewSection/ProductsPreview";
import Promo from "containers/pageSections/ProductsPreviewSection/Promo/Promo";
import React from "react";
import { Layout } from "containers/Layout";

const OneProductPage = ({ itemsList, crumbs }) => {
    console.log(crumbs, "product");
    return (
        <Layout>
            <Promo crumbs={crumbs} />
            <ProductItemPreview product={itemsList} />
        </Layout>
    );
};

export async function getServerSideProps({ params: { prefix, id } }) {
    const {
        data: { crumbs, itemsList },
    } = await productService.getProductById({ requestUrl: [prefix, id] });
    return {
        props: { crumbs, itemsList },
    };
}

export default OneProductPage;
