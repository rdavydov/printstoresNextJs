import React from "react";
import { AdminProductPage } from "admin/pageSections/admin-product-page";
import { productService } from "api";

const ProductPage = ({ products, ...rest }) => {
    return <AdminProductPage data={products} />;
};
export async function getServerSideProps() {
    const {
        data: { products },
    } = await productService.getAllProducts();
    return {
        props: { products },
    };
}

export default ProductPage;
