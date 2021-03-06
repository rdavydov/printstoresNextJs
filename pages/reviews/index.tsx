import React from "react";
import { reviewsService } from "src/api/services/reviews/reviews.service";
import ReviewsPage from "src/containers/reviews";

const Reviews = ({ reviews }) => {
  return <ReviewsPage reviews={reviews} />;
};

export async function getServerSideProps() {
  const reviews = await reviewsService.getReviews();
  console.log(reviews);
  return {
    props: { reviews },
  };
}

export default Reviews;
