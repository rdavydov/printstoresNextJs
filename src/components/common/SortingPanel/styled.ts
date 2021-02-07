import styled from "styled-components";

export const SortingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

export const SortingActions = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column: 1/3;
`;
export const SortingItem = styled.div``;

export const Title = styled.p``;

export const ItemsQuantity = styled.p`
  text-align: right;
`;
