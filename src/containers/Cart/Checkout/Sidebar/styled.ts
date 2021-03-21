import styled from "styled-components";

export const CartCheckoutSidebarWrapper = styled.div`
  background-color: var(--gray);
`;

export const CartCheckoutSidebarTitle = styled.span`
  font-size: 30px;
  margin-right: 15px;
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
