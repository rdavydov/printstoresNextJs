import React, { Fragment } from "react";
import BreadcrumbsLinks from "components/BreadcrumbsLinks";
import { Title } from "./styled";

const CHECKOUT = "Оформление заказа";

const Promo = ({ crumbs }) => {
    return (
        <Fragment>
            <BreadcrumbsLinks crumbs={crumbs} />
            <Title>{CHECKOUT}</Title>
        </Fragment>
    );
};

export default Promo;
