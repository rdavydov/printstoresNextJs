import React, { Fragment } from "react";
import { Card } from "antd";
import styles from "./CategoryCard.module.css";
import { IProductCategory } from "../../types/interfaces/products.gallery.interface";

interface IProps {
  goLocation: (id: number, title: string) => void;
}

const { Meta } = Card;
const CardItems = <T,>({
  cardData,
  goLocation,
}: IProps & IProductCategory<T>) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default CardItems;
