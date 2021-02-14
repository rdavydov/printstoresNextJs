import React from "react";
import { ContainerWithSidebar } from "src/components/common";
import Layout from "src/templates/Layout/Layout";
import PaymentsPageContent from "./Content/Content";

const PaymentsPage = () => {
  return (
    <Layout>
      <ContainerWithSidebar>
        <PaymentsPageContent />
      </ContainerWithSidebar>
    </Layout>
  );
};

export default PaymentsPage;
