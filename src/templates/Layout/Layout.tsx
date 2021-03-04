import React from "react";
import Header from "src/components/blocks/Header/Header";
import {
  Container,
  InfoBlock,
  Slider,
  DropdownHeaderMenu,
} from "src/components/common";

import { slides } from "src/components/common/Slider/slides";
import Footer from "src/components/blocks/Footer/Footer";
import { MenuType } from "src/types/menu/catalog.menu.types";

interface IProps {
  children: JSX.Element | JSX.Element[];
  menu: MenuType;
}

const Layout: React.FC<IProps> = ({ children, menu }) => {
  return (
    <>
      <Header />
      <DropdownHeaderMenu menu={menu} />
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
