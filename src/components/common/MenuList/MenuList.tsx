import React from "react";
import Title from "../TItle/Title";
import MenuListItem from "./MenuListItem";
import { MenuListWrapper, TitleWrapper } from "./styled";

interface IProps {
  title?: string;
  menuItems: Array<{ label: string; href: string }>;
  classNameMenu?: string;
  showSelected?: boolean;
  orientation?: "vertical" | "horizontal";
}

const MenuList = ({ title, menuItems, classNameMenu, showSelected, orientation = "horizontal" }: IProps) => (
  <MenuListWrapper className={classNameMenu} orientation={orientation}>
    {title && (
      <TitleWrapper>
        <Title fontSize={18} color="rgb(158, 158, 158)">
          {title}
        </Title>
      </TitleWrapper>
    )}
    {menuItems.map((menu, index) => (
      <MenuListItem {...menu} key={index.toString()} showSelected={showSelected} />
    ))}
  </MenuListWrapper>
);

export default MenuList;
