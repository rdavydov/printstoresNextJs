import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, A11y } from 'swiper';
import random from 'lodash/random';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Box } from '@material-ui/core';
import { IProducts } from '../../../../types/interfaces/products.gallery.interface';
import GalleryItem from './GalleryItem/GalleryItem';
import { GaleryHeader, GalleryWrapper, Title } from './styled';

interface IProps {
    prevSlide: () => void;
    nextSlide: () => void;
    initSwipe: (swipe) => void;
    changeStart: () => void;
    changeEnd: () => void;
    allChange: () => void;
    end: boolean;
    start: boolean;
}
SwiperCore.use([Autoplay, A11y]);

const breakpointsConfig = {
  320: { slidesPerView: 1, spaceBetween: 0 },
  600: { slidesPerView: 2, spaceBetween: 10 },
  960: { slidesPerView: 3, spaceBetween: 10 },
  1200: { slidesPerView: 4, spaceBetween: 30 },
};

const ProductsGalleryPromo: React.FC<IProducts & IProps> = ({
  title,
  productsList,
  initSwipe,
  nextSlide,
  prevSlide,
  changeStart,
  changeEnd,
  allChange,
  start,
  end,
  ...rest
}) => (
  <GalleryWrapper>
    <GaleryHeader end={end ? 1 : 0} start={start ? 1 : 0}>
      <Title>{title}</Title>
      <Box>
        <ArrowRightAltIcon onClick={prevSlide} fontSize="large" />
        <ArrowRightAltIcon onClick={nextSlide} fontSize="large" />
      </Box>
    </GaleryHeader>
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      autoplay={{
        delay: random(2500, 4500),
        disableOnInteraction: true,
      }}
      onInit={initSwipe}
      breakpoints={breakpointsConfig}
      onFromEdge={allChange}
      onReachBeginning={changeStart}
      onReachEnd={changeEnd}
    >
      {productsList.map((el, index) => (
        <SwiperSlide key={index.toString()}>
          <GalleryItem
            name={`${el.name} ${index}`}
            price={el.price}
            oldPrice={el.oldPrice}
            image={el.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </GalleryWrapper>
);

export default ProductsGalleryPromo;
