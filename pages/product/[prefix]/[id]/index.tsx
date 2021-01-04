import { productService } from "api/services/product.service";
import ProductItemPreview from "components/pageSections/ProductsItem";
import Promo from "components/pageSections/ProductsItem/Promo/Promo";
import React from "react";
import Layout from "../../../../components/Layout/Layout";

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
    } = await productService.getProductById(prefix, id);
    return {
        props: { crumbs, itemsList },
    };
}

export default OneProductPage;
