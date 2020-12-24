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
      {productsList.map(({ name, price, oldPrice, src }, index) => {
        const nextLocation = () => {
          goLocation(index, name);
        };
        return (
          <CardItem
            name={name + " " + index}
            price={price}
            oldPrice={oldPrice}
            src={src}
            goLocation={nextLocation}
            key={index}
          />
        );
      })}
    </CardGrid>
  );
};

export default Card;
