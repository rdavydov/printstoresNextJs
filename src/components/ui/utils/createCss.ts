import { css } from "styled-components";
import cssPropertyKeys, { CssKeys } from "../config/cssPropertyKeys";

interface Config {
  unit: "px" | "rem" | "%" | "vh" | "vm";
  blackList: string[];
}

export type CssCalc = {
  calc: Array<{ unit: "px" | "rem" | "%" | "vh" | "vw"; value: number; symbolExpression?: string }>;
};

const blackList = ["fontWeight"];

const checkValue = (value: string | CssCalc | number, nextKey: string) => {
  switch (typeof value) {
    case "string": {
      return value;
    }
    case "number": {
      return blackList.includes(nextKey) ? value : value + "px";
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
