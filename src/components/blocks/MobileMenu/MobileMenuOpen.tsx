import { Drawer } from "antd";
import React from "react";
import { MenuLink } from "src/components/common";
import { Flex, Typography } from "src/components/ui";
import { MenuType } from "src/types/menu/catalog.menu.types";
import { MenuRoute } from "src/types/routes/routes.type";

interface Props {
  menu: MenuType;
  headerMenu: MenuRoute[];
  handleClose: () => void;
}

const MobileMenuOpen = ({ menu, handleClose, headerMenu }: Props) => {
  const rootMenu = menu.filter(({ parentID }) => parentID === null);
  return (
    <Drawer width="100%" onClose={handleClose} visible>
      <Flex flexDirection="column">
        {headerMenu.map(({ href, label }) => (
          <Typography fontSize="28px">
            <MenuLink key={label} href={href} label={label} />
          </Typography>
        ))}
        {rootMenu.map(({ title, href }) => (
          <Typography fontSize="28px">
            <MenuLink href={href} label={title} key={href} />
          </Typography>
        ))}
      </Flex>
    </Drawer>
  );
};

export default MobileMenuOpen;
