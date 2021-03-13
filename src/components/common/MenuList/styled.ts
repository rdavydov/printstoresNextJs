import styled from "styled-components";

interface IPropsMenuListWrapper {
  orientation?: "vertical" | "horizontal";
}

export const MenuListWrapper = styled.ul<IPropsMenuListWrapper>`
  display: flex;
  flex-direction: ${(props) => (props.orientation === "horizontal" ? "column" : "row")};
  padding: 0;
`;

export const MenuListItem = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: unset;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 15px;
`;
