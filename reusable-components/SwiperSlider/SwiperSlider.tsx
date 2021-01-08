import React from "react";
import { Swiper } from "swiper/react";
import SwiperCore, { Autoplay, A11y, Navigation } from "swiper";

SwiperCore.use([Autoplay, A11y, Navigation]);

const breakpointsConfig = {
    320: { slidesPerView: 1, spaceBetween: 0 },
    600: { slidesPerView: 1, spaceBetween: 10 },
    960: { slidesPerView: 1, spaceBetween: 10 },
    1200: { slidesPerView: 1, spaceBetween: 30 },
};

const SwiperSlider: React.FC = ({ children }) => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation
            breakpoints={breakpointsConfig}
        >
            {children}
        </Swiper>
    );
};

export default SwiperSlider;
