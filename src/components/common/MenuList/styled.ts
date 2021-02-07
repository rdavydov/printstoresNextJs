import styled from 'styled-components';

export const MenuListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const MenuListItem = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: unset;
  }
`;

interface IProps {
  color?: 'black';
  size?: 'default';
}

export const Title = styled.h4<IProps>`
  margin-bottom: 15px;
  font-weight: 500;
  font-size: ${(props) => (props.size === 'default' ? '16px' : '18px')};
  color: ${(props) =>
    props.color === 'black' ? 'rgba(0, 0, 0, 0.85)' : '#9e9e9e'};
`;
