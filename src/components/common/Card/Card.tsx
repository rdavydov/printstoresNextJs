import React, { Fragment, useState } from "react";
import { IProducts } from "../../../types/product/products.gallery.interface";
import CardItem from "./CardItem";
import { CardGrid } from "./styled";

interface IProps {
  goLocation?: (params: object) => void;
}
const Card: React.FC<IProducts & IProps> = ({ productsList = [], goLocation }) => (
  <CardGrid>
    {productsList.map(({ name, price, oldPrice, key, image, _id, prefix }, index) => {
      const nextLocation = () => {
        goLocation({
          _id,
          name,
          key,
          prefix,
        });
      };
      return (
        <CardItem
          name={`${name} ${index}`}
          price={price}
          oldPrice={oldPrice}
          image={image}
          goLocation={nextLocation}
          key={_id}
        />
      );
    })}
  </CardGrid>
);

export default Card;
