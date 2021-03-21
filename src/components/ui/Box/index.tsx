import React from "react";
import { BaseComponentProps } from "../config/base.types";
import { BoxBase, BoxProps } from "./styles";

export type BoxBaseType = Partial<BaseComponentProps & BoxProps & React.HTMLAttributes<any>>;

const BoxBaseComponent: React.ForwardRefRenderFunction<unknown, BoxBaseType> = (
  { children, component = "div", ...rest },
  ref
) => {
  const boxRef = (ref as any) || React.createRef();
  return (
    <BoxBase as={component} ref={boxRef} {...rest}>
      {children}
    </BoxBase>
  );
};

export const Box = React.forwardRef<unknown, BoxBaseType>(BoxBaseComponent);
