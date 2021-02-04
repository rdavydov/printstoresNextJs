import { Container } from 'components/common';
import React from 'react';
import Layout from 'templates/Layout/Layout';
import ProductsGallery from '../containers/Home/views/ProductsGallery/ProductsGallery';

const Home = () => (
  <Layout>
    <Container>
      <ProductsGallery title="Недавно добавленные" key="news" />
      <ProductsGallery title="Популярные" key="Популярные" />
    </Container>
  </Layout>
);

export default Home;
