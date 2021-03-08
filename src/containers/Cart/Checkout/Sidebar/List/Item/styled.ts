import styled from "styled-components";

export const CartCheckoutSidebarListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartCheckoutSidebarListItemImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const CartCheckoutSidebarListItemPriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  text-align: right;
`;

export const CartCheckoutSidebarListItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 35%;
  max-width: 50%;
`;

export const CartCheckoutSidebarListItemTitle = styled.span`
  color: var(--muted);
`;

export const CartCheckoutSidebarListItemText = styled.span``;

export const CartCheckoutSidebarListItemOldPrice = styled.span`
  text-decoration: line-through;
`;
export const CartCheckoutSidebarListItemPrice = styled.span`
  color: var(--discount);
`;

export const CartCheckoutSidebarListItemQuantity = styled.span``;
