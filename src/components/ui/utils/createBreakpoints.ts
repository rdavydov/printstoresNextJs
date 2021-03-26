import { css } from "styled-components";
import { BREAKPOINTS } from "../config/theme";
import { DefaultFlexItemProps, FlexProps } from "../Flex/styled";
import createCss from "./createCss";

const breakpoints = {
  xs: BREAKPOINTS.XS,
  sm: BREAKPOINTS.SM,
  md: BREAKPOINTS.MD,
  lg: BREAKPOINTS.LG,
  xl: BREAKPOINTS.XL,
};

export const calcFlexBasis = (span) => {
  if (typeof span !== "number") return null;
  const defaultBasis = 100 / 12;
  const basis = (span ? defaultBasis * span : span) + "%";
  return { "flex-basis": `${basis}` };
};

export function createBreakPoints<Props>(props: FlexProps | DefaultFlexItemProps | Props) {
  return Object.entries(breakpoints)
    .reverse()
    .reduce((prev, [key, value]) => {
      if (props[key]) {
        const cssProps = createCss(props[key]);
        const flexBasis = props[key]?.span && calcFlexBasis(props[key].span);
        const breakpointValue = `@media (max-width: ${value}) {${cssProps} ${flexBasis && css(flexBasis)}}`;
        const cssFinal = css`
          ${breakpointValue}
        `;
        return [...prev, cssFinal.join("")];
      } else {
        return [...prev];
      }
    }, [])
    .join("\n");
}
