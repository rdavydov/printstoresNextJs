import styled from "styled-components";

interface IProps {
  noMargin?: boolean;
}

export const InfoWrapper = styled.div<IProps>`
  background-color: #eff1f7;
  padding: 20px;
  margin-bottom: ${(props) => (props.noMargin ? 0 : 40)};
`;
