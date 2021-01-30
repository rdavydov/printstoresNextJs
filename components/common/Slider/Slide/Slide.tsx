import React from 'react';
import { Title } from 'components/common';
import { Button } from 'antd';
import { SlideType } from '../Slider';
import { SlideContent, SlideWrapper } from './styles';

const Slide:React.FC<SlideType> = ({
  button, description, src, title, children,
}) => (
  <SlideWrapper background={src}>
    <SlideContent>
      <Title>{title}</Title>
      <p>{description}</p>
      <Button type="primary">{button.text}</Button>
    </SlideContent>
  </SlideWrapper>
);

export default Slide;
