import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, A11y } from "swiper";
import random from "lodash/random";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Title } from "src/components/common";
import { IProducts } from "src/types/product/products.gallery.interface";
import GallerySlide from "./GallerySlide/GallerySlide";
import { GalleryWrapper, GaleryHeader } from "./styled";

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

const HomeGallerySlider: React.FC<IProducts & IProps> = ({
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
      <Title level="h1" fontSize={16}>
        {title}
      </Title>
      <div>
        <ArrowRightAltIcon onClick={prevSlide} fontSize="large" />
        <ArrowRightAltIcon onClick={nextSlide} fontSize="large" />
      </div>
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
      {productsList.map(({ title, old_price, price, product_id, preview }) => (
        <SwiperSlide key={product_id}>
          <GallerySlide
            title={title}
            price={price}
            old_price={old_price}
            preview={preview}
            product_id={product_id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </GalleryWrapper>
);

export default HomeGallerySlider;
