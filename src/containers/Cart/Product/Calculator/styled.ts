import styled from "styled-components";

export const CalculatorHeader = styled.div`
  margin-bottom: 25px;
`;

export const CalculatorBody = styled.div`
  border-bottom: 1px solid var(--muted);
  margin-bottom: 25px;
`;

export const CalculatorFooter = styled.div``;

export const CalculatorProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const CalculatorProductText = styled.span``;

export const CalculatorProductPrice = styled.span``;

export const CalculatorProductDiscount = styled.span``;

export const CalculatorWrapper = styled.div`
  min-height: 250px;
  padding: 15px;
  border-radius: 4px;
  position: sticky;
  background-color: var(--gray);
`;

export const CalculatorActions = styled.div`
  text-align: center;
`;
