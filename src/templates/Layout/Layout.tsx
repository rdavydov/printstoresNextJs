import React from "react";
import Header from "src/components/blocks/Header/Header";
import { Container, InfoBlock, Slider, DropdownHeaderMenu } from "src/components/common";

import { slides } from "src/components/common/Slider/slides";
import Footer from "src/components/blocks/Footer/Footer";
import { headerMenuDropdown } from "./dropdown-menu-data";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <DropdownHeaderMenu headerMenuDropdown={headerMenuDropdown} />
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
