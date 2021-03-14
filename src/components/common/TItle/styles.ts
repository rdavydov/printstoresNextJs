import styled from "styled-components";

export interface TitleProps {
  color?: string;
  fontSize?: number;
  margin: string;
  mr: number;
  mb: number;
  ml: number;
  bold: boolean;
  fontWeight: 400 | 500 | 600 | 700;
  size: number | "large" | "small" | "medium";
}

export const CustomTitle = styled.h1<Partial<TitleProps>>`
  ${(props) => props.margin && `margin: ${props.margin}`};
  ${(props) => props.mr && `margin-right: ${props.mr}px`};
  ${(props) => props.mb && `margin-bottom: ${props.mb}px`};
  ${(props) => props.ml && `margin-left:${props.ml}px`};
  ${(props) => props.bold && "font-weight: 700"};
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`}
  ${(props) => typeof props.size === "number" && `font-size: ${props.size}px`};
  ${(props) => props.size === "large" && `font-size:28px`};
  ${(props) => props.size === "medium" && `font-size:20px`};
  ${(props) => props.size === "small" && `font-size:16px`};
  color: ${(props) => props.color || "rgba(0, 0, 0, 0.85)"};
  font-size: ${(props) => `${props.fontSize}px` || "15px"};
`;
