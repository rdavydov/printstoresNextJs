import React from 'react';
import { Title } from 'src/components/common';
import { Button } from 'antd';
import { SlideType } from '../Slider';
import { SlideContent, SlideWrapper } from './styles';

const Slide: React.FC<SlideType> = ({
  button, description, src, title, children,
}) => (
  <SlideWrapper background={src}>
  </SlideWrapper>
);

export default Slide;
