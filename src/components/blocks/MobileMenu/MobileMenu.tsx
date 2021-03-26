import React, { useState } from "react";

import { Box } from "src/components/ui";
import { Container } from "src/components/common";
import { MenuType } from "src/types/menu/catalog.menu.types";
import MobileMenuOpen from "./MobileMenuOpen";
import MobileMenuClose from "./MobileMenuClose";
import { headerMenu } from "src/constants/routes/header/header.routes";

interface IProps {
  menu: MenuType;
}

const MobileMenu: React.FC<IProps> = ({ menu }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Box padding="20px 0">
        {open ? (
          <MobileMenuOpen handleClose={handleClose} menu={menu} headerMenu={headerMenu} />
        ) : (
          <MobileMenuClose handleOpen={handleOpen} />
        )}
      </Box>
    </Container>
  );
};

export default MobileMenu;
