import React from "react";
import { Container, Gallery } from "src/components/common";
import Layout from "src/templates/Layout/Layout";
import { menuService } from "src/api/services/menu/menu.service";
import { catalogService } from "src/api";

const Home = ({ menu, popular, recently }) => (
  <Layout menu={menu}>
    <Container xs={{ maxWidth: "unset", padding: 0 }}>
      <Gallery products={recently} title="Недавно добавленные" key="news" titleProps={{ bold: true }} />
      <Gallery products={popular} title="Популярные" key="Популярные" titleProps={{ bold: true }} />
    </Container>
  </Layout>
);

export async function getServerSideProps() {
  const { menu } = await menuService.getPageMenu("catalog");
  const popular = await catalogService.filterProducts({ limit: 20, filterBy: "created_at" });
  const recently = await catalogService.filterProducts({ limit: 20, filterBy: "rating" });
  return {
    props: { menu, popular: popular.products, recently: recently.products },
  };
}

export default Home;
