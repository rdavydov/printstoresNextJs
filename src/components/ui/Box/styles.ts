import styled, { css } from "styled-components";
import { BaseCssMediaProps, BaseCssProps } from "../config/baseCssProps";
import { createBreakPoints } from "../utils/createBreakpoints";
import createCss from "../utils/createCss";

interface BoxDefaultProps extends BaseCssProps {}

export type BoxProps = Partial<BoxDefaultProps & BaseCssMediaProps<BoxDefaultProps>>;

const configureBox = (props: BoxProps) => {
  const defaultCss = props && createCss(props);
  const breakPointsCss = createBreakPoints(props);
  return css`
    ${defaultCss}
    ${breakPointsCss}
  `;
};

export const BoxBase = styled.div<BoxProps>`
  display: block;
  box-sizing: border-box;
  ${(props) => props && configureBox(props)}
`;
