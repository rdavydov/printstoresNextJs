import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, A11y } from "swiper";
import _ from "lodash";
import { IProducts } from "../../../../types/interfaces/products.gallery.interface";
import GalleryItem from "./GalleryItem/GalleryItem";
import { GaleryHeader, GalleryWrapper, Title } from "./styled";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Box } from "@material-ui/core";

interface IProps {
  prevSlide: () => void;
  nextSlide: () => void;
  initSwipe: (swipe) => void;
  changeStart: (start: boolean) => void;
  changeEnd: (end: boolean) => void;
  end: boolean;
  start: boolean;
}
SwiperCore.use([Autoplay, A11y]);

const ProductsGalleryPromo: React.FC<IProducts & IProps> = ({
  title,
  productsList,
  initSwipe,
  nextSlide,
  prevSlide,
  changeStart,
  changeEnd,
  start,
  end,
  ...rest
}) => {
  return (
    <GalleryWrapper>
      <GaleryHeader end={end} start={start}>
        <Title>{title}</Title>
        <Box>
          <ArrowRightAltIcon onClick={prevSlide} fontSize="large" />
          <ArrowRightAltIcon onClick={nextSlide} fontSize="large" />
        </Box>
      </GaleryHeader>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{ delay: _.random(2500, 4500), disableOnInteraction: true }}
        onInit={initSwipe}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 0 },
          600: { slidesPerView: 2, spaceBetween: 10 },
          960: { slidesPerView: 3, spaceBetween: 10 },
          1200: { slidesPerView: 4, spaceBetween: 30 },
        }}
        onFromEdge={() => {
          changeStart(false);
          changeEnd(false);
        }}
        onReachBeginning={() => changeStart(true)}
        onReachEnd={() => changeEnd(true)}
      >
        {productsList.map((el, index) => (
          <SwiperSlide key={index}>
            <GalleryItem
              name={el.name + " " + index}
              price={el.price}
              oldPrice={el.oldPrice}
              src={el.src}
              key={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </GalleryWrapper>
  );
};

export default ProductsGalleryPromo;
