import styled from "styled-components";
import { BaseCssProps } from "../config/baseCssProps";
import createCss from "../utils/createCss";

export type BoxProps = Partial<BaseCssProps>;

export const BoxBase = styled.div<BoxProps>`
  display: block;
  box-sizing: border-box;
  ${(props) => props && createCss(props)}
`;
