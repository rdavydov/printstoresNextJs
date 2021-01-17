import AdminProductPage from "admin/pageSections/admin-product-page/admin-product-page";
import { catalogService } from "api/services/catalog.service";
import React from "react";
import { useDispatch } from "react-redux";
import { setCategoryItems } from "store/reducers/categoryReducer/actionCreators/categoryActionCreators";

const ProductPage = ({ itemsList }) => {
    const dispatch = useDispatch();
    dispatch(setCategoryItems(itemsList));

    return <AdminProductPage />;
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
