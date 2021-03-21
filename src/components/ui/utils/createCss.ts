import { css } from "styled-components";
import cssPropertyKeys, { CssKeys } from "../config/cssPropertyKeys";
import { theme } from "../config/theme";

interface Config {
  unit: "px" | "rem" | "%" | "vh" | "vm";
  blackList: string[];
}

export type CssCalc = {
  calc: Array<{ unit: "px" | "rem" | "%" | "vh" | "vw"; value: number; symbolExpression?: string }>;
};

const blackList = ["fontWeight"];
const colorKey = "color";
const unitConverList = ["margin", "mr", "mb", "ml", "pb", "pl", "pr", "padding", "mt"];

const checkValue = (value: string | CssCalc | number, nextKey: string) => {
  switch (typeof value) {
    case "string": {
      const isColorKey = nextKey.toLowerCase().includes(colorKey);
      const isVariableColor = theme.color[value];
      return isColorKey && isVariableColor ? `var(--${value})` : value;
    }
    case "number": {
      const isUnitValue = unitConverList.includes(nextKey);
      const isBlackListKey = blackList.includes(nextKey);
      return isUnitValue && !isBlackListKey ? value + "px" : value;
    }
    case "object": {
      const calcString = value.calc.map(({ unit, value, symbolExpression }, index, arr) => {
        const lastElem = index + 1 === arr.length;
        return !lastElem ? value + unit + ` ${symbolExpression} ` : value + unit;
      });
      return `calc(${calcString.join(" ")})`;
    }
    default: {
      return value;
    }
  }
};

interface CssProps {
  props?: { [key in CssKeys]: string | CssCalc | number };
}

const createCss = <BaseProps>(props: CssProps & BaseProps, config?: Config) => {
  const cssStyles = Object.entries(props)
    .reduce(
      (prev, [nextKey, nextValue]) =>
        cssPropertyKeys[nextKey]
          ? [...prev, `${cssPropertyKeys[nextKey]}:${checkValue(nextValue, nextKey)};`]
          : [...prev],
      []
    )
    .join("\n");

  return css`
    ${cssStyles}
  `;
};

export default createCss;
