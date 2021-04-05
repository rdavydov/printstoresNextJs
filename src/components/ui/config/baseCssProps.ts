import { ColorKeys } from "./theme";

export interface BaseCssProps {
  margin: string | number;
  mr: number;
  width: string;
  minWidth: string | number | "unset";
  maxWidth: string | number | "unset";
  textAlign: "center" | "right" | "left";
  padding: string | number;
  pr: string | number;
  pl: string | number;
  pb: string | number;
  mb: string | number;
  ml: string | number;
  mt: string | number;
  fontSize: number | string;
  fontWeight: "bold" | number;
  fontFamily: string;
  lineHight: "normal" | number | string;
  textDecoration: "none" | "underline" | "overline" | "line-through" | "blink";
  textTransform: "none" | "capitalize" | "uppercase" | "lowercase";
  backgroundColor: ColorKeys;
  color: ColorKeys;
  borderColor: ColorKeys;
  display: "none" | "flex" | "block" | "inline-flex";
  height: string | number;
}

export interface BaseCssMediaProps<CssProps> {
  xs?: Partial<CssProps>;
  md?: Partial<CssProps>;
  sm?: Partial<CssProps>;
  xl?: Partial<CssProps>;
  lg?: Partial<CssProps>;
}
