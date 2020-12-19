import React from "react";
import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider";
import ProductsGallery from "../components/views/ProductsGallery/ProductsGallery";

const Home = () => {
  return (
    <Layout>
      <Slider />
      <ProductsGallery title="Недавно добавленные" key="news" />
      <ProductsGallery title="Популярные" key="Популярные" />
    </Layout>
  );
};

export default Home;
