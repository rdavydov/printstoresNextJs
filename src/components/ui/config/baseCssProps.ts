import { CssCalc } from "../utils/createCss";

export interface BaseCssProps {
  margin: string | number;
  mr: number;
  width: string;
  textAlign: "center" | "right" | "left";
  padding: string | number;
  pr: string | number;
  pl: string | number;
  pb: string | number;
  mb: string | number;
  ml: string | number;
  fontSize: number | string;
  fontWeight: "bold" | number;
  fontFamily: string;
  lineHight: "normal" | number | string;
  textDecoration: "none" | "underline" | "overline" | "line-through" | "blink";
  textTransform: "none" | "capitalize" | "uppercase" | "lowercase";
}
