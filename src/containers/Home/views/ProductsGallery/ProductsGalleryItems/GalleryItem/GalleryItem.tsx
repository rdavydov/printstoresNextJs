import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
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
import { Product } from "src/types/product/product.type";

const GalleryItem: React.FC<Product> = ({
  preview,
  price,
  title,
  old_price,
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
        <ProductImage src={preview} />
        {hovered && (
          <CartIcon>
            <ShoppingCartIcon />
          </CartIcon>
        )}
      </ProductBody>
      <ProductFooter>
        <ProductTitle>{title}</ProductTitle>
        <Price>{price}</Price>
        <OldPrice>{old_price}</OldPrice>
      </ProductFooter>
    </ProductWrapper>
  );
};

export default GalleryItem;
