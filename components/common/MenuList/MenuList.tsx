import React from 'react';
import Title from '../TItle/Title';
import MenuListItem from './MenuListItem';
import { MenuListWrapper } from './styled';

interface IProps {
  title: string;
  menuItems: Array<{ text: string, path: string }>
}

const MenuList = ({ title, menuItems }: IProps) => (
  <MenuListWrapper>
    <Title fontSize={18} color='rgb(158, 158, 158)'>{title}</Title>
    {menuItems.map((menu, index) => (
      <MenuListItem {...menu} key={index.toString()} />
    ))}
  </MenuListWrapper>
);

export default MenuList;
