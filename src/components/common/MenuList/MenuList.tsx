import React from "react";
import Title from "../TItle/Title";
import MenuListItem from "./MenuListItem";
import { MenuListWrapper } from "./styled";

interface IProps {
  title: string;
  menuItems: Array<{ text: string; path: string }>;
  classNameMenu?: string;
}

const MenuList = ({ title, menuItems, classNameMenu }: IProps) => (
  <MenuListWrapper className={classNameMenu}>
    <Title fontSize={18} color="rgb(158, 158, 158)">
      {title}
    </Title>
    {menuItems.map((menu, index) => (
      <MenuListItem {...menu} key={index.toString()} />
    ))}
  </MenuListWrapper>
);

export default MenuList;
