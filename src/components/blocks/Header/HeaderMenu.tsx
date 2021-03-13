import React from "react";
import { MenuLink } from "src/components/common";
import { MenuRoute } from "src/types/routes/routes.type";
import { HeaderMenuList, HeaderMenuListItem } from "./styled";

interface IProps {
  menu: MenuRoute[];
}

const HeaderMenu = ({ menu }: IProps) => {
  return (
    <HeaderMenuList>
      {menu.map((route) => (
        <HeaderMenuListItem key={route.label}>
          <MenuLink {...route} />
        </HeaderMenuListItem>
      ))}
    </HeaderMenuList>
  );
};

export default HeaderMenu;
