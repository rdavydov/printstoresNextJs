import { Breadcrumbs } from 'src/components/common';
import React, { Fragment } from 'react';
import { Title } from './styled';

const CHECKOUT = 'Оформление заказа';

const Promo = ({ crumbs }) => (
  <>
    <Breadcrumbs crumbs={crumbs} />
    <Title>{CHECKOUT}</Title>
  </>
);

export default Promo;
