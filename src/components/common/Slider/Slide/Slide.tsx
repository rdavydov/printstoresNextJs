import React from "react";
import { Title } from "src/components/common";
import { Button } from "antd";
import { SlideType } from "../Slider";
import { SlideContent, SlideWrapper } from "./styles";

const Slide: React.FC<SlideType> = ({ button, description, src, title, children }) => (
  <img src={src} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
);

export default Slide;
