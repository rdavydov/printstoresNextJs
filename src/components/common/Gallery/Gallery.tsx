import React, { useCallback, useState } from "react";
import { galleryData } from "../../../constants/gallery/galleryData";
import GallerySlider from "./GallerySlider/GallerySlider";
import { GalleryTitleProps } from "./types/gallery.types";

interface Props {
  title?: string;
}

const Gallery = ({ title, ...rest }: Props & GalleryTitleProps) => {
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
      productsList={galleryData}
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