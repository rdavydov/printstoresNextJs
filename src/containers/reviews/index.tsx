import React from "react";
import ContainerWithSidebar from "src/components/common/ContainerWithSidebar/ContainerWithSidebar";
import Layout from "src/templates/Layout/Layout";
import ReviewsPageComments from "./Comments/Comments";
import ReviewsPageForm from "./Form/Form";
import YandexPaymentForm from "./YandexPaymentForm/YandexPaymentForm";

const ReviewsPage = ({ reviews }) => {
  return (
    <Layout>
      <ContainerWithSidebar>
        <ReviewsPageComments reviews={reviews} />
        <ReviewsPageForm />
        <YandexPaymentForm />
      </ContainerWithSidebar>
    </Layout>
  );
};

export default ReviewsPage;
