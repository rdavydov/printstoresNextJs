import React, { Fragment } from 'react';
import { Layout } from 'containers/Layout';
import Promo from 'components/modules/Cart/Promo/Promo';
import PreviewContent from 'components/modules/Cart/PreviewContent';

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
