import React, { Fragment } from 'react';
import Layout from 'src/templates/Layout/Layout';
import Promo from 'src/containers/BasketPage/Promo/Promo';
import PreviewContent from 'src/containers/BasketPage/PreviewContent';
import { Container } from 'src/components/common';

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
