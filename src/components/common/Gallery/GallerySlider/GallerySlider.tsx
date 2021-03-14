import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, A11y } from "swiper";
import random from "lodash/random";
import { Title } from "src/components/common";
import { IProducts } from "src/types/product/products.gallery.interface";
import GallerySlide from "./GallerySlide/GallerySlide";
import { GalleryWrapper, GaleryHeader } from "./styled";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { GalleryTitleProps } from "../types/gallery.types";

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

const getArrowStyle = (position) => {
  const color = position ? "gray" : "inherit";
  return { color, fontSize: 14 };
};

const GallerySlider: React.FC<IProducts & IProps & GalleryTitleProps> = ({
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
  titleProps = {},
  ...rest
}) => (
  <GalleryWrapper>
    <GaleryHeader end={end ? 1 : 0} start={start ? 1 : 0}>
      <Title level="h1" fontSize={16} {...titleProps}>
        {title}
      </Title>
      <div>
        <ArrowLeftOutlined onClick={prevSlide} style={getArrowStyle(start)} className="mr" />
        <ArrowRightOutlined onClick={nextSlide} style={getArrowStyle(end)} />
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
          <GallerySlide title={title} price={price} old_price={old_price} preview={preview} product_id={product_id} />
        </SwiperSlide>
      ))}
    </Swiper>
  </GalleryWrapper>
);

export default GallerySlider;
