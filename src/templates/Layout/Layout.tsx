import React from "react";
import Header from "src/components/blocks/Header/Header";
import { Container, InfoBlock, Slider, DropdownHeaderMenu } from "src/components/common";

import { slides } from "src/components/common/Slider/slides";
import Footer from "src/components/blocks/Footer/Footer";
import { MenuType } from "src/types/menu/catalog.menu.types";
import { Box } from "src/components/ui";
import MobileMenu from "src/components/blocks/MobileMenu/MobileMenu";

interface IProps {
  children: JSX.Element | JSX.Element[];
  menu?: MenuType;
}

const Layout: React.FC<IProps> = ({ children, menu }) => {
  return (
    <>
      <Box md={{ display: "none" }}>
        <Header />
        <DropdownHeaderMenu menu={menu} />
      </Box>
      <Box md={{ display: "block" }} display="none">
        <MobileMenu menu={menu} />
      </Box>
      <Slider slides={slides} />
      <Container>
        {children}
        <InfoBlock />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
