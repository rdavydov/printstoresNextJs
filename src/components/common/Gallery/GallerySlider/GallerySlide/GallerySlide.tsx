import React, { useState } from "react";
import { ProductsGallery } from "src/types/product/products.gallery.interface";
import { CartIcon, Price, OldPrice } from "src/components/common/Card/styled";
import { ProductWrapper, ProductBody, ProductImage, ProductFooter, ProductTitle } from "./styled";
import { ShoppingCartOutlined } from "@ant-design/icons";

const GallerySlide: React.FC<ProductsGallery> = ({ preview, price, title, old_price, ...rest }) => {
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
            <ShoppingCartOutlined />
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

export default GallerySlide;
