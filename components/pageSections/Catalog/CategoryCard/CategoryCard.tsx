import React, { Fragment } from "react";
import { Card } from "antd";
import styles from "./CategoryCard.module.css";

const defaultCardStyle = {
  margin: 0,
  transform: "translateY(0px)",
};

const { Meta } = Card;
const CategoryCard = ({ cardData }) => {
  return (
    <Fragment>
      {cardData.map((el, index) => {
        return (
          <Card
            hoverable
            bordered={false}
            cover={<img alt="example" src={el.src} />}
            key={index}
            className={styles.cardDefault}
          >
            <Meta title={el.title} style={{ textAlign: "center" }} />
          </Card>
        );
      })}
    </Fragment>
  );
};

export default CategoryCard;
