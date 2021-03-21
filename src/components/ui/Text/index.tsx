import React from "react";
import { BaseComponentProps } from "../config/base.types";
import { TextBaseComponent, TextBaseProps } from "./styled";

type TextBaseComponentProps = Partial<TextBaseProps & React.HTMLAttributes<any> & BaseComponentProps>;

const TextBase: React.ForwardRefRenderFunction<unknown, TextBaseComponentProps> = (
  { children, component = "p", ...rest },
  ref
) => {
  const textRef = (ref as any) || React.createRef();
  return (
    <TextBaseComponent {...rest} as={component} ref={textRef}>
      {children}
    </TextBaseComponent>
  );
};

const Typography = React.forwardRef<unknown, TextBaseComponentProps>(TextBase);

export default Typography;
