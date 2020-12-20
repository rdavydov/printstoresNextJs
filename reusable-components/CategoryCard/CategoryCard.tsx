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
      {cardData.map(({ src, title, id }, index) => {
        const nextLocation = () => goLocation(id, title);
        return (
          <Card
            hoverable
            bordered={false}
            cover={<img alt="example" src={src} />}
            key={index}
            className={styles.cardDefault}
            onClick={nextLocation}
          >
            <Meta title={title} style={{ textAlign: "center" }} />
          </Card>
        );
      })}
    </GridWrapper>
  );
};

export default CategoryCard;
