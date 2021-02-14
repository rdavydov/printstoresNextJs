import React from "react";
import ContainerWithSidebar from "src/components/common/ContainerWithSidebar/ContainerWithSidebar";
import Layout from "src/templates/Layout/Layout";
import ReviewsPageComments from "./Comments/Comments";

const ReviewsPage = () => {
  return (
    <Layout>
      <ContainerWithSidebar>
        <ReviewsPageComments />
      </ContainerWithSidebar>
    </Layout>
  );
};

export default ReviewsPage;
