import React from "react";
import Swiper from "react-id-swiper";
import SwiperCore, { Navigation } from "swiper";
import { SwiperOptions } from "swiper";

SwiperCore.use([Navigation]);

const options: SwiperOptions = {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
};

interface IProps {
    navigation?: boolean;
    children: any[];
}

const SwiperSlider: React.FC<IProps> = ({
    children = [],
    navigation = true,
}) => {
    return (
        <Swiper
            slidesPerView={1}
            navigation={navigation ? options.navigation : false}
            shouldSwiperUpdate
        >
            {children}
        </Swiper>
    );
};

export default SwiperSlider;
