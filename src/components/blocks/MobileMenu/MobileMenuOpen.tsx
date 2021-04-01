import { Drawer } from "antd";
import React from "react";
import { MenuLink, BadgeShopping } from "src/components/common";
import { Box, Flex, Typography } from "src/components/ui";
import { BoxBaseType } from "src/components/ui/Box";
import { MenuType } from "src/types/menu/catalog.menu.types";
import { MenuRoute } from "src/types/routes/routes.type";

interface Props {
  menu: MenuType;
  headerMenu: MenuRoute[];
  handleClose: () => void;
}

const MobileHeader = (props: BoxBaseType) => {
  return (
    <Box {...props}>
      <Flex alignItems="center">
        <Typography mr={20}>PRINTSTORES.RU</Typography>
        <BadgeShopping />
      </Flex>
    </Box>
  );
};

const MobileMenuOpen = ({ menu, handleClose, headerMenu }: Props) => {
  const rootMenu = menu.filter(({ parentID }) => parentID === null);
  return (
    <Drawer width="100%" onClose={handleClose} visible title={<MobileHeader onClick={handleClose} />}>
      <Flex flexDirection="column" mb={30}>
        {headerMenu.map(({ href, label }) => (
          <Typography fontSize="20px" onClick={handleClose}>
            <MenuLink key={label} href={href} label={label} />
          </Typography>
        ))}
      </Flex>
      <Flex flexDirection="column" mb={30}>
        {rootMenu.map(({ title, href }) => (
          <Typography fontSize="20px" onClick={handleClose}>
            <MenuLink href={href} label={title} key={href} />
          </Typography>
        ))}
      </Flex>
      <Typography color="muted" fontWeight={700} fontSize="28px">
        +7-960-450-60-21
      </Typography>
    </Drawer>
  );
};

export default MobileMenuOpen;
