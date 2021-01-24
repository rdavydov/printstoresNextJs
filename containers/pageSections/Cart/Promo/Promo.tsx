import React, { Fragment } from 'react';
import BreadcrumbsLinks from 'components/BreadcrumbsLinks';
import { Title } from './styled';

const CHECKOUT = 'Оформление заказа';

const Promo = ({ crumbs }) => (
  <>
    <BreadcrumbsLinks crumbs={crumbs} />
    <Title>{CHECKOUT}</Title>
  </>
);

export default Promo;
