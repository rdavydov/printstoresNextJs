import React, { Fragment } from 'react';
import Layout from 'templates/Layout/Layout';
import Promo from 'containers/BasketPage/Promo/Promo';
import PreviewContent from 'containers/BasketPage/PreviewContent';
import { Container } from 'components/common';

const crumbs = [
  { title: 'Главная', path: '/' },
  { title: 'Корзина', path: '/cart', titleVisible: false },
];

const CartPage = () => (
  <Layout>
    <Promo crumbs={crumbs} />
    <PreviewContent />
  </Layout>
);

export default CartPage;
