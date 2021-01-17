import AdminProductPage from "admin/pageSections/admin-product-page/admin-product-page";
import { catalogService } from "api/services/catalog.service";
import React from "react";

const ProductPage = ({ itemsList }) => {
    return <AdminProductPage data={itemsList} />;
};

export async function getServerSideProps() {
    const {
        data: { crumbs, itemsList },
    } = await catalogService.getAllCategory({ requestUrl: ["all"] });
    return {
        props: { crumbs, itemsList },
    };
}

export default ProductPage;
