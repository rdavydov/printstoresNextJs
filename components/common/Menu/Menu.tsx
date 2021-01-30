import React from 'react';
import ListItem from './ListItem';
import { MenuList, Title } from './styled';

interface IProps {
    items: Array<{ text: string; path: string }>;
    title: string;
}

const Menu = ({ title, items }: IProps) => (
  <MenuList>
    <Title>{title}</Title>
    {items.map((menu, index) => (
      <ListItem text={menu.text} path={menu.path} key={index.toString()} />
    ))}
  </MenuList>
);

export default Menu;
