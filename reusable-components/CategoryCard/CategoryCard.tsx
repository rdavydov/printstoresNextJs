import React, { Fragment } from "react";
import { Card } from "antd";
import styles from "./CategoryCard.module.css";
import { IProductCategory } from "../../types/interfaces/products.gallery.interface";
import { GridWrapper } from "./styled";

interface IProps {
  goLocation: (id: number, title: string) => void;
}

const { Meta } = Card;
const CategoryCard = <T,>({
  cardData,
  goLocation,
}: IProps & IProductCategory<T>) => {
  return (
    <GridWrapper>
      {cardData.map(({ image, name, _id }, index) => {
        const nextLocation = () => goLocation(_id, name);
        return (
          <Card
            hoverable
            bordered={false}
            cover={<img alt="example" src={image} />}
            key={index}
            className={styles.cardDefault}
            onClick={nextLocation}
          >
            <Meta title={name} style={{ textAlign: "center" }} />
          </Card>
        );
      })}
    </GridWrapper>
  );
};

export default CategoryCard;
