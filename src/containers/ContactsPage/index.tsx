import React from "react";
import ContainerWithSidebar from "src/components/common/ContainerWithSidebar/ContainerWithSidebar";
import Layout from "src/templates/Layout/Layout";
import ContactsPageForm from "./Form/Form";
import ContactsPageInfoBlock from "./InfoBlock/InfoBlock";

const ContactsPage = () => {
  return (
    <Layout>
      <ContainerWithSidebar>
        <ContactsPageInfoBlock />
        <ContactsPageForm />
      </ContainerWithSidebar>
    </Layout>
  );
};

export default ContactsPage;
