import React from 'react';

import { Carousel } from 'antd';
import Slide from './Slide/Slide';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export type SlideType = {
    title:string;
    src:string;
    button:{text:string, path:string};
    description:string;
}

interface IProps {
    slides:SlideType[]
}

const Slider = ({ slides }:IProps) => (
  <Carousel autoplay dots={false} effect="fade">
    {slides.map((slide, index) => <Slide {...slide} key={index.toString()} />)}
  </Carousel>
);

export default Slider;
