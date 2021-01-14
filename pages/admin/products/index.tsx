import AdminLayout from "admin/AdminLayout/AdminLayout";
import AdminProductPage from "admin/pageSections/admin-product-page/admin-product-page";
import { catalogService } from "api/services/catalog.service";
import React from "react";

const ProductPage = ({ itemsList }) => {
    return (
        <AdminLayout>
            <AdminProductPage data={itemsList} />;
        </AdminLayout>
    );
};

export async function getServerSideProps() {
    const {
        data: { crumbs, itemsList },
    } = await catalogService.getAllCategory();
    return {
        props: { crumbs, itemsList },
    };
}

export default ProductPage;
