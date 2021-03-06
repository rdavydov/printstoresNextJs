import moment from "moment";
import React from "react";

import { Comment, Rate } from "antd";

import { Title } from "src/components/common";

import styles from "./Comments.module.scss";
import { IReviews } from "src/api/services/reviews/reviews.service";

interface IProps {
  reviews: IReviews[];
}

const ReviewsPageComments = ({ reviews }: IProps) => {
  return (
    <div className={styles.commentBlock}>
      <Title>Отзывы о сайте PRINTSTORES.RU</Title>
      {reviews.map(({ _id, created_at, clientName, message, rating }) => (
        <Comment
          key={_id}
          content={message}
          datetime={moment(created_at).format("YYYY-MM-DD HH:mm:ss")}
          author={clientName}
          actions={[<Rate value={rating} disabled />]}
        />
      ))}
    </div>
  );
};

export default ReviewsPageComments;
