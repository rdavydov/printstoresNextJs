import React from "react";
import { BaseComponentProps } from "../config/base.types";
import { FlexBlock, FlexBlockItem, FlexProps, DefaultFlexItemProps } from "./styled";

type FlexType<FlexBaseType> = FlexBaseType & React.HTMLAttributes<any> & BaseComponentProps;

const FlexBase: React.ForwardRefRenderFunction<unknown, Partial<FlexType<FlexProps>>> = (
  { children, component, ...rest },
  ref
) => {
  const flexRef = (ref as any) || React.createRef<HTMLElement>();

  return (
    <FlexBlock {...rest} as={component} ref={flexRef}>
      {children}
    </FlexBlock>
  );
};

const FlexItemBase: React.ForwardRefRenderFunction<unknown, Partial<FlexType<DefaultFlexItemProps>>> = (
  { children, component = "div", ...rest },
  ref
) => {
  const flexItemRef = (ref as any) || React.createRef<HTMLElement>();
  return (
    <FlexBlockItem {...rest} as={component} ref={flexItemRef}>
      {children}
    </FlexBlockItem>
  );
};

interface FlexComponent extends React.ForwardRefExoticComponent<Partial<FlexType<FlexProps>>> {
  Item: FlexItemComponent;
}

interface FlexItemComponent extends React.ForwardRefExoticComponent<Partial<FlexType<DefaultFlexItemProps>>> {}

const FlexRoot = React.forwardRef<unknown, FlexType<FlexProps>>(FlexBase) as FlexComponent;
const FlexItem = React.forwardRef<unknown, FlexType<DefaultFlexItemProps>>(FlexItemBase) as FlexItemComponent;
FlexRoot.Item = FlexItem;

export default FlexRoot;
