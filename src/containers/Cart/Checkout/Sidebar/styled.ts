import styled from "styled-components";

export const CartCheckoutSidebarWrapper = styled.div`
  background-color: var(--gray);
  height: calc(100vh + 100px);
  width: 100%;
`;

export const CartCheckoutSidebarContent = styled.div`
  padding: 30px;
`;

export const CartCheckoutSidebarHeader = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 30px;
`;

export const CartCheckoutSidebarTitle = styled.span`
  font-size: 30px;
  margin-right: 15px;
`;

export const CartCheckoutSidebarPromocodeWrapper = styled.div`
  margin-bottom: 30px;
`;

export const CartCheckoutSidebarText = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export const CartCheckoutSidebarOrderInfo = styled.div`
  margin-bottom: 30px;
  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--muted);
  }
`;

export const CartCheckoutSidebarSummaryInfo = styled.div`
  margin-bottom: 30px;
`;

export const CartCheckoutSidebarSummary = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const CartCheckoutSidebarBody = styled.div``;
export const CartCheckoutSidebarFooter = styled.div``;
export const CartCheckoutSidebarActions = styled.div`
  text-align: center;
`;

export const CartCheckoutSidebarDiscountText = styled.span`
  color: var(--discount);
`;

export const CartCheckoutSidebarPriceText = styled.span``;

export const CartCheckoutSidebarGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
