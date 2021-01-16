import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  padding: 50px 0px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 270px;
  margin-bottom: 18px;
  position: relative;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
`;

export const CardBody = styled.div`
  position: relative;
`;

export const CardFooter = styled.div``;

export const CardTitle = styled.h3`
  font-weight: 700;
  margin-bottom: 18px;
`;

export const Price = styled.span`
  font-weight: 700;
  margin-right: 12px;
`;
export const OldPrice = styled.span`
  color: gray;
  font-weight: 600;
  text-decoration: line-through;
`;

export const CartIcon = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: absolute;
  left: calc(50% - 25px);
  bottom: 30px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    filter: brightness(0.85);
  }
`;
