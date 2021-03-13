import React from "react";
import { menuService } from "src/api/services/menu/menu.service";
import { ContainerWithSidebar } from "src/components/common";
import { ContactsForm, ContactsPageInfoBlock } from "src/containers/contacts";
import Layout from "src/templates/Layout/Layout";

const Contacts = ({ menu }) => {
  return (
    <Layout menu={menu}>
      <ContainerWithSidebar>
        <ContactsPageInfoBlock />
        <ContactsForm />
      </ContainerWithSidebar>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { menu } = await menuService.getPageMenu("catalog");

  return {
    props: { menu },
  };
}

export default Contacts;
