import React from "react";
import ContainerWithSidebar from "src/components/common/ContainerWithSidebar/ContainerWithSidebar";
import Layout from "src/templates/Layout/Layout";
import ReviewsPageComments from "./Comments/Comments";
import ReviewsPageForm from "./Form/Form";

const ReviewsPage = ({ reviews, menu }) => {
  return (
    <Layout menu={menu}>
      <ContainerWithSidebar>
        <ReviewsPageComments reviews={reviews} />
        <ReviewsPageForm />
      </ContainerWithSidebar>
    </Layout>
  );
};

export default ReviewsPage;
