import React, { Fragment, useState } from "react";
import { IProducts } from "../../types/interfaces/products.gallery.interface";
import CardItem from "./CardItem";
import { CardGrid } from "./styled";

interface IProps {
  goLocation: (id: number, title: string) => void;
}
const Card: React.FC<IProducts & IProps> = ({ productsList, goLocation }) => {
  return (
    <CardGrid>
      {productsList.map(({ name, price, oldPrice, key, image, _id }, index) => {
        const nextLocation = () => {
          goLocation(_id, name);
        };
        return (
          <CardItem
            name={name + " " + index}
            price={price}
            oldPrice={oldPrice}
            image={image}
            goLocation={nextLocation}
            key={key}
          />
        );
      })}
    </CardGrid>
  );
};

export default Card;
