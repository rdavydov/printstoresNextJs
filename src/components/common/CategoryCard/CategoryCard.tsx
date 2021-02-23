import React, { Fragment } from "react";
import { Card } from "antd";
import styles from "./CategoryCard.module.css";
import { IProductCategory } from "../../../types/product/products.gallery.interface";
import { GridWrapper } from "./styled";

interface IProps {
  goLocation: (props: object) => void;
}

const { Meta } = Card;
const CategoryCard = <T,>({ cardData, goLocation }: IProps & IProductCategory<T>) => (
  <GridWrapper>
    {cardData.map(({ image, name, _id, key, prefix }, index) => {
      const nextLocation = () => goLocation({ prefix, key, name });
      return (
        <Card
          hoverable
          bordered={false}
          cover={<img alt="example" src={image} />}
          key={index.toString()}
          className={styles.cardDefault}
          onClick={nextLocation}
        >
          <Meta title={name} style={{ textAlign: "center" }} />
        </Card>
      );
    })}
  </GridWrapper>
);

export default CategoryCard;
