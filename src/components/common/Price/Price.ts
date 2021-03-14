import styled from "styled-components";

interface PriceProps {
  discount: boolean;
  muted: boolean;
  bold: boolean;
  size: "large" | "medium" | "small";
  lineThrough: boolean;
  mr?: number;
}

export const Price = styled.span<Partial<PriceProps>>`
  color: var(--default-text);
  ${(props) => props.discount && "color:var(--discount)"};
  ${(props) => props.muted && "color: var(--muted)"};
  ${(props) => props.bold && "font-weight: bold"};
  ${(props) => props.size === "large" && "font-size: 24px"};
  ${(props) => props.size === "medium" && "font-size: 18px"};
  ${(props) => props.size === "small" && "font-size: 14px"};
  ${(props) => props.lineThrough && "text-decoration:line-through"};
  ${(props) => props.mr && `margin-right: ${props.mr}px`};
`;
