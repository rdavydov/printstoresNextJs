import { Container } from "src/components/common";
import React from "react";
import Layout from "src/templates/Layout/Layout";
import ProductsGallery from "../src/containers/Home/views/ProductsGallery/ProductsGallery";
import { menuService } from "src/api/services/menu/menu.service";

const Home = ({ menu }) => (
  <Layout menu={menu}>
    <Container>
      <ProductsGallery title="Недавно добавленные" key="news" />
      <ProductsGallery title="Популярные" key="Популярные" />
    </Container>
  </Layout>
);

export async function getServerSideProps() {
  const { menu } = await menuService.getPageMenu("catalog");
  return {
    props: { menu },
  };
}

export default Home;
