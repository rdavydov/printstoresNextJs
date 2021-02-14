import styled from 'styled-components';

interface IProps {
  background: string;
}

export const SlideWrapper = styled.div<IProps>`
  height: 260px;
  max-height: 260px;
  position: relative;
  color: #fff;
  text-align: center;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: center;
`;

export const SlideContent = styled.div``;
