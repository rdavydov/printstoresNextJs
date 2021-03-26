import React, { Fragment, useState } from "react";
import { IProducts } from "../../../types/product/products.gallery.interface";
import CardItem from "./CardItem";
import { CardGrid } from "./styled";

interface IProps {
  goLocation?: (params: object) => void;
}
const Card: React.FC<IProducts & IProps> = ({ productsList = [], goLocation }) => (
  <CardGrid>
    {productsList.map(({ old_price, price, product_id, title, preview }, index) => {
      const nextLocation = () => {
        goLocation({
          product_id,
        });
      };
      return (
        <CardItem
          name={`${title} ${index}`}
          price={price}
          oldPrice={old_price}
          image={preview}
          goLocation={nextLocation}
          key={product_id}
        />
      );
    })}
  </CardGrid>
);

export default Card;
