import React, { useState, useRef, useCallback } from "react";
import { IProductsGaleryProps } from "../../../types/interfaces/products.gallery.interface";
import { productsList } from "../productsData";
import ProductsGalleryPromo from "./ProductsGalleryItems/ProductsGalleryPromo";

const ProductsGalleryContainer: React.FC<IProductsGaleryProps> = ({
  title,
}) => {
  const [swiper, setSwiper] = useState(null);
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);

  const changeStart = () => {
    setStart(true);
  };
  const changeEnd = () => {
    setEnd(true);
  };

  const allChange = () => {
    setStart(false);
    setEnd(false);
  };

  const prevSlide = useCallback(() => {
    if (swiper) {
      swiper.slidePrev();
    }
  }, [swiper]);

  const nextSlide = useCallback(() => {
    if (swiper) {
      swiper.slideNext();
    }
  }, [swiper]);

  const initSwipe = (swipe) => {
    setSwiper(swipe);
  };

  return (
    <ProductsGalleryPromo
      title={title}
      end={end}
      start={start}
      productsList={productsList}
      initSwipe={initSwipe}
      nextSlide={nextSlide}
      prevSlide={prevSlide}
      changeStart={changeStart}
      changeEnd={changeEnd}
      allChange={allChange}
    />
  );
};

export default ProductsGalleryContainer;
