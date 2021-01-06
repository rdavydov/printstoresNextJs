import React, { Fragment } from "react";
import Layout from "components/Layout/Layout";
import Promo from "components/pageSections/Cart/Promo/Promo";
import PreviewContent from "components/pageSections/Cart/PreviewContent";

const crumbs = [
    { title: "Главная", path: "/" },
    { title: "Корзина", path: "/cart", titleVisible: false },
];

const CartPage = () => {
    return (
        <Layout>
            <Promo crumbs={crumbs} />
            <PreviewContent />
        </Layout>
    );
};

export default CartPage;
