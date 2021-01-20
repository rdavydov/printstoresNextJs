import AdminProductPage from "admin/pageSections/admin-category-page/admin-category-page";
import { catalogService } from "api/services/catalog.service";
import React from "react";
import { useDispatch } from "react-redux";
import { setCategoryAdmin } from "store/admin/admin-category-reducer/actionCreaters/admin-category-actions";

const ProductPage = ({ category }) => {
    const dispatch = useDispatch();
    dispatch(setCategoryAdmin(category));

    return <AdminProductPage />;
};

export async function getServerSideProps() {
    const {
        data: { category },
    } = await catalogService.getAllCategory();
    return {
        props: { category },
    };
}

export default ProductPage;
