import { productService } from "api/services/product.service";
import ProductItemPreview from "containers/pageSections/ProductsPreviewSection/ProductsPreview";
import Promo from "containers/pageSections/ProductsPreviewSection/Promo/Promo";
import React from "react";
import { Layout } from "containers/Layout";
import { crumbsService } from "api";

const OneProductPage = ({ products, crumbs }) => {
    return (
        <Layout>
            <Promo crumbs={crumbs} />
            <ProductItemPreview product={products} />
        </Layout>
    );
};

export async function getServerSideProps({ params: { prefix, id } }) {
    const {
        data: { products },
    } = await productService.getProductById({ requestUrl: [prefix, id] });
    const crumbs = await crumbsService.getCrumbsConfig({
        query: { prefix, id },
    });
    return {
        props: { crumbs: crumbs.data, products },
    };
}

export default OneProductPage;
