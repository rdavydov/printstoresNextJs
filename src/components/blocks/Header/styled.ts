import styled, { css, keyframes } from "styled-components";

export const HeaderWrapper = styled.header``;

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const HeaderCityBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderActionsBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderSearchBlock = styled.div`
  position: relative;
  margin-right: 15px;
  & svg {
    cursor: pointer;
  }
`;

export const HeaderNavBlock = styled.nav`
  padding: 25px 0;
`;

export const HeaderMenuList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const HeaderMenuListItem = styled.li`
  margin: 0 20px;
  font-size: 15px;
  color: var(--default-text);
  font-weight: 600;
`;

interface SearchWrapperProps {
  active: boolean;
  animationActive: boolean;
  animationInActive: boolean;
}

const InputVisible = keyframes`
  0% { width: 0px};
  100% { width: 350px};
`;

const InputHidden = keyframes`
  0% { width: 350px};
  100% { width: 0px};
`;

export const HeaderSearchInputWrapper = styled.div<Partial<SearchWrapperProps>>`
  transition: 1.5s;
  position: absolute;
  transition: 0.5s;
  width: 0px;
  right: 60px;
  bottom: 0;
  ${(props) =>
    props.animationActive &&
    css`
      animation: ${InputVisible} 1s 0s both;
    `};
  ${(props) =>
    props.animationInActive &&
    css`
      animation: ${InputHidden} 0.3s 0s both;
    `}
  animation-fill-mode: forwards;
  background-color: #fafafa;
  outline: none;
  border: none;
  border-bottom: 2px solid var(--lightBlue);
`;
