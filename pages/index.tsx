import { Container } from "src/components/common";
import React from "react";
import Layout from "src/templates/Layout/Layout";
import { menuService } from "src/api/services/menu/menu.service";
import { Gallery } from "src/containers/Home";

const Home = ({ menu }) => (
  <Layout menu={menu}>
    <Container>
      <Gallery title="Недавно добавленные" key="news" />
      <Gallery title="Популярные" key="Популярные" />
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
