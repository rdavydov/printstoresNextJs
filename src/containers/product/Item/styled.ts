import styled from "styled-components";

export const ProductItemPriceContent = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.54);
  margin-bottom: 35px;
`;

export const ProductItemImage = styled.img`
  width: 80%;
  height: 100%;
`;

export const ProductItemTitle = styled.h3``;
export const ProductItemPrice = styled.h4`
  font-size: 24px;
  margin-right: 16px;
`;
export const ProductItemOldPrice = styled.h5`
  font-size: 16px;
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.54);
`;
export const ProductItemText = styled.p`
  margin-bottom: 35px;
`;
export const ProductItemActionsWrapper = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-between;
  margin-bottom: 35px;
`;
