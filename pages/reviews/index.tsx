import React from "react";
import { menuService } from "src/api/services/menu/menu.service";
import { reviewsService } from "src/api/services/reviews/reviews.service";
import ReviewsPage from "src/containers/reviews";

const Reviews = ({ reviews, menu }) => {
  return <ReviewsPage reviews={reviews} menu={menu} />;
};

export async function getServerSideProps() {
  const { menu } = await menuService.getPageMenu("catalog");
  const reviews = await reviewsService.getReviews();
  return {
    props: { reviews, menu },
  };
}

export default Reviews;
