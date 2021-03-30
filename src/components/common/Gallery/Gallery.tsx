import React, { useCallback, useState } from "react";
import { Product } from "src/types/product/product.type";
import GallerySlider from "./GallerySlider/GallerySlider";
import { GalleryTitleProps } from "./types/gallery.types";

interface Props {
  title?: string;
  products: Product[];
}

const Gallery = ({ title, products, ...rest }: Props & GalleryTitleProps) => {
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
    <GallerySlider
      title={title}
      end={end}
      start={start}
      productsList={products}
      initSwipe={initSwipe}
      nextSlide={nextSlide}
      prevSlide={prevSlide}
      changeStart={changeStart}
      changeEnd={changeEnd}
      allChange={allChange}
      {...rest}
    />
  );
};

export default Gallery;
