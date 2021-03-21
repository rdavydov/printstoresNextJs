export enum BREAKPOINTS {
  XS = "450px",
  SM = "578px",
  MD = "960px",
  LG = "1280px",
  XL = "1920px",
}

export const theme = {
  color: {
    text: "black",
    border: "#f0f0f5",
    lightBlue: "#1890ff",
    muted: "#777",
    gray: "#eff1f7",
    discount: "#ec008c",
  },
  breakpoints: {
    xs: 320,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

export type ColorKeys = keyof typeof theme.color;
