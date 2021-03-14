import React from "react";
import { Container, Gallery } from "src/components/common";
import Layout from "src/templates/Layout/Layout";
import { menuService } from "src/api/services/menu/menu.service";

const Home = ({ menu }) => (
  <Layout menu={menu}>
    <Container>
      <Gallery title="Недавно добавленные" key="news" titleProps={{ bold: true }} />
      <Gallery title="Популярные" key="Популярные" titleProps={{ bold: true }} />
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
