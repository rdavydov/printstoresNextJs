import React from "react";
import Slide from "./Slide/Slide";
import SliderSlick from "./Slider";

const Slider = () => {
  return (
    <SliderSlick>
      <Slide
        color="primary"
        link="/"
        description="Test"
        title="slide1"
        buttonText="Перейти в каталог"
      >
        <img src="/slide1def.jpg" />
      </Slide>
    </SliderSlick>
  );
};

export default Slider;
