import styled from "styled-components";

interface IButtonProps {
  color?: string;
}

export const CustomButton = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: 160px;
  height: 50px;
  transition: 0.4s;
`;
