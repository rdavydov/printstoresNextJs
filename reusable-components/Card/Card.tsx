import React, { Fragment, useState } from "react";
import { IProducts } from "../../types/interfaces/products.gallery.interface";
import CardItem from "./CardItem";
import { CardGrid } from "./styled";

const Card: React.FC<IProducts> = ({ productsList }) => {
  return (
    <CardGrid>
      {productsList.map((el, index) => (
        <CardItem
          name={el.name + " " + index}
          price={el.price}
          oldPrice={el.oldPrice}
          src={el.src}
          key={index}
        />
      ))}
    </CardGrid>
  );
};

export default Card;
