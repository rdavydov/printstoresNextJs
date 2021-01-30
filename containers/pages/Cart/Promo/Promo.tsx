import { BreadcrumbsLinks, Title } from 'components/common';
import React, { Fragment } from 'react';

const CHECKOUT = 'Оформление заказа';

const Promo = ({ crumbs }) => (
  <>
    <BreadcrumbsLinks crumbs={crumbs} />
    <Title>{CHECKOUT}</Title>
  </>
);

export default Promo;
