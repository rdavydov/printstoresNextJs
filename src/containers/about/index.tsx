import React from "react";

import Layout from "src/templates/Layout/Layout";
import { ContainerWithSidebar } from "src/components/common";
import AboutPageContent from "./Content/Content";
import AboutPageTimeline from "./Timeline/Timeline";

const AboutPage = () => {
  return (
    <Layout>
      <ContainerWithSidebar>
        <AboutPageContent />
        <AboutPageTimeline />
      </ContainerWithSidebar>
    </Layout>
  );
};

export default AboutPage;
