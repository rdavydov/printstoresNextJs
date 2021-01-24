import { Layout } from 'containers/Layout';
import React from 'react';
import Slider from '../containers/Slider';
import ProductsGallery from '../containers/views/ProductsGallery/ProductsGallery';

const Home = () => (
  <Layout>
    <Slider />
    <ProductsGallery title="Недавно добавленные" key="news" />
    <ProductsGallery title="Популярные" key="Популярные" />
  </Layout>
);

export default Home;
