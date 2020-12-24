import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  CardBody,
  CardFooter,
  CardImage,
  CardTitle,
  CardWrapper,
  CartIcon,
  OldPrice,
  Price,
} from "./styled";
import { Product } from "../../types/type/products.type";

interface IProps {
  goLocation: () => void;
}

const CardItem: React.FC<Product & IProps> = ({
  name,
  price,
  oldPrice,
  src,
  goLocation,
  ...rest
}) => {
  const [hovered, setHovered] = useState(false);

  const onHovered = () => {
    setHovered(true);
  };

  const noHovered = () => {
    setHovered(false);
  };
  return (
    <CardWrapper
      onMouseMove={onHovered}
      onMouseLeave={noHovered}
      onClick={goLocation}
    >
      <CardBody>
        <CardImage src={src} />
        {hovered && (
          <CartIcon>
            <ShoppingCartIcon />
          </CartIcon>
        )}
      </CardBody>
      <CardFooter>
        <CardTitle>{name}</CardTitle>
        <Price>{price}</Price>
        <OldPrice>{oldPrice}</OldPrice>
      </CardFooter>
    </CardWrapper>
  );
};

export default CardItem;
