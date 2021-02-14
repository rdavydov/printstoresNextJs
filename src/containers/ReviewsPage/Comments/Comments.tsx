import moment from "moment";
import React from "react";

import { Comment, Rate } from "antd";

import { Title } from "src/components/common";

import styles from "./Comments.module.scss";

const ReviewsPageComments = () => {
  return (
    <div className={styles.commentBlock}>
      <Title>Отзывы о сайте PRINTSTORES.RU</Title>
      <Comment
        author="Евгений Фролов"
        content="Класс"
        datetime={moment().format("YYYY-MM-DD HH:mm:ss")}
        actions={[<Rate defaultValue={5} />]}
      />
      <Comment
        author="Евгений Фролов"
        content="Класс"
        datetime={moment().format("YYYY-MM-DD HH:mm:ss")}
        actions={[<Rate defaultValue={5} />]}
      />
      <Comment
        author="Евгений Фролов"
        content="Класс"
        datetime={moment().format("YYYY-MM-DD HH:mm:ss")}
        actions={[<Rate defaultValue={5} />]}
      />
      <Comment
        author="Евгений Фролов"
        content="Класс"
        datetime={moment().format("YYYY-MM-DD HH:mm:ss")}
        actions={[<Rate defaultValue={5} />]}
      />
      <Comment
        author="Евгений Фролов"
        content="Класс"
        datetime={moment().format("YYYY-MM-DD HH:mm:ss")}
        actions={[<Rate defaultValue={5} />]}
      />
      <Comment
        author="Евгений Фролов"
        content="Класс"
        datetime={moment().format("YYYY-MM-DD HH:mm:ss")}
        actions={[<Rate defaultValue={5} />]}
      />
      <Comment
        author="Евгений Фролов"
        content="Класс"
        datetime={moment().format("YYYY-MM-DD HH:mm:ss")}
        actions={[<Rate defaultValue={5} />]}
      />
      <Comment
        author="Евгений Фролов"
        content="Класс"
        datetime={moment().format("YYYY-MM-DD HH:mm:ss")}
        actions={[<Rate defaultValue={5} />]}
      />
      <Comment
        author="Евгений Фролов"
        content="Класс"
        datetime={moment().format("YYYY-MM-DD HH:mm:ss")}
        actions={[<Rate defaultValue={5} />]}
      />
      <Comment
        author="Евгений Фролов"
        content="Класс"
        datetime={moment().format("YYYY-MM-DD HH:mm:ss")}
        actions={[<Rate defaultValue={5} />]}
      />
      <Comment
        author="Евгений Фролов"
        content="Класс"
        datetime={moment().format("YYYY-MM-DD HH:mm:ss")}
        actions={[<Rate defaultValue={5} />]}
      />
      <Comment
        author="Евгений Фролов"
        content="Класс"
        datetime={moment().format("YYYY-MM-DD HH:mm:ss")}
        actions={[<Rate defaultValue={5} />]}
      />
      <Comment
        author="Евгений Фролов"
        content="Класс"
        datetime={moment().format("YYYY-MM-DD HH:mm:ss")}
        actions={[<Rate defaultValue={5} />]}
      />
      <Comment
        author="Евгений Фролов"
        content="Класс"
        datetime={moment().format("YYYY-MM-DD HH:mm:ss")}
        actions={[<Rate defaultValue={5} />]}
      />
      <Comment
        author="Евгений Фролов"
        content="Класс"
        datetime={moment().format("YYYY-MM-DD HH:mm:ss")}
        actions={[<Rate defaultValue={5} />]}
      />
      <Comment
        author="Евгений Фролов"
        content="Класс"
        datetime={moment().format("YYYY-MM-DD HH:mm:ss")}
        actions={[<Rate defaultValue={5} />]}
      />
      <Comment
        author="Евгений Фролов"
        content="Класс"
        datetime={moment().format("YYYY-MM-DD HH:mm:ss")}
        actions={[<Rate defaultValue={5} />]}
      />
    </div>
  );
};

export default ReviewsPageComments;
