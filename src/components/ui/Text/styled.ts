import styled from "styled-components";
import { BaseCssProps } from "../config/baseCssProps";
import createCss from "../utils/createCss";

export interface TextBaseProps extends BaseCssProps {}

export const TextBaseComponent = styled.p<Partial<TextBaseProps>>`
  ${(props) => props && createCss(props)}
`;
