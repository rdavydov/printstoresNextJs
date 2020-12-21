import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Product } from "../../../../../types/type/products.type";
import {
  CartIcon,
  OldPrice,
  Price,
  ProductBody,
  ProductFooter,
  ProductImage,
  ProductTitle,
  ProductWrapper,
} from "./styled";

const GalleryItem: React.FC<Product> = ({
  name,
  price,
  oldPrice,
  src,
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
    <ProductWrapper onMouseMove={onHovered} onMouseLeave={noHovered}>
      <ProductBody>
        <ProductImage src={src} />
        {hovered && (
          <CartIcon>
            <ShoppingCartIcon />
          </CartIcon>
        )}
      </ProductBody>
      <ProductFooter>
        <ProductTitle>{name}</ProductTitle>
        <Price>{price}</Price>
        <OldPrice>{oldPrice}</OldPrice>
      </ProductFooter>
    </ProductWrapper>
  );
};

export default GalleryItem;
