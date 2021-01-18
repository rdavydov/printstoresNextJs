import React from "react";
import { AdminProductPage } from "admin/pageSections/admin-product-page";
import { productService } from "api";

const ProductPage = ({ itemsList, ...rest }) => {
    return <AdminProductPage data={itemsList} />;
};
export async function getServerSideProps() {
    const {
        data: { itemsList },
    } = await productService.getAllProducts();
    return {
        props: { itemsList },
    };
}

export default ProductPage;
