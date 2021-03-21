import styled, { css } from "styled-components";
import { BaseCssProps } from "../config/baseCssProps";
import { calcFlexBasis, createBreakPoints } from "../utils/createBreakpoints";
import createCss from "../utils/createCss";

type FlexSpan = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type FlexMobileProps<Props> = Omit<Props, "xs" | "sm" | "md" | "lg" | "xl">;

export interface FlexBaseProps extends BaseCssProps {
  flexDirection: "row" | "row-reverse" | "column" | "column-reverse" | "unset";
  alignItems: "center" | "flex-end" | "flex-start" | "baseline" | "stretch" | "unset";
  justifyContent: "center" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "unset";
  flex: string;
  flexGrow: number;
  flexShrink: number;
  flexBasis: string | number;
  flexWrap: "wrap" | "nowrap";
  span: FlexSpan;
  xs?: Partial<FlexMobileProps<FlexProps>>;
  sm?: Partial<FlexMobileProps<FlexProps>>;
  md?: Partial<FlexMobileProps<FlexProps>>;
  lg?: Partial<FlexMobileProps<FlexProps>>;
  xl?: Partial<FlexMobileProps<FlexProps>>;
}

export type FlexProps = Partial<FlexBaseProps & React.CSSProperties>;
export type DefaultFlexItemProps = Partial<FlexItemProps & React.CSSProperties>;

const configureFlex = (props: FlexProps | DefaultFlexItemProps) => {
  const defaultCss = props && createCss(props);
  const defaultBasis = props?.span && calcFlexBasis(props.span);
  const breakPointsCss = createBreakPoints(props);

  return css`
    ${defaultCss}
    ${defaultBasis}
    ${breakPointsCss}
  `;
};

export const FlexBlock = styled.div<Partial<FlexProps>>`
  display: flex;
  ${(props) => props && configureFlex(props)};
`;

FlexBlock.defaultProps = {
  flexWrap: "wrap",
  flexDirection: "row",
  flexBasis: "100%",
};

export interface FlexItemProps extends BaseCssProps {
  alignSelf: "center" | "stretch" | "flex-end" | "flex-start" | "baseline";
  justifySelf: "center" | "flex-start" | "flex-end" | "baseline";
  span: FlexSpan;
  xs?: Partial<FlexMobileProps<FlexItemProps>>;
  sm?: Partial<FlexMobileProps<FlexItemProps>>;
  md?: Partial<FlexMobileProps<FlexItemProps>>;
  lg?: Partial<FlexMobileProps<FlexItemProps>>;
  xl?: Partial<FlexMobileProps<FlexItemProps>>;
  order?: number;
}

export const FlexBlockItem = styled.div<Partial<FlexItemProps>>`
  display: block;
  ${(props) => props && configureFlex(props)}
`;
