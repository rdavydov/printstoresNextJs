import React from 'react';
import { Box, Container } from '@material-ui/core';
import { InfoBlock, Slider } from 'components/common';
import { slides } from 'components/common/Slider/slides';
import { LayoutHeader } from './layout-header';
import { LayoutFooter } from './layout-footer';
import LayoutMenu from './Menu/LayoutMenu';

const Layout = ({ children, ...rest }) => (
  <>
    <LayoutHeader />
    <Box component="main">
      <LayoutMenu />
      <Slider slides={slides} />
      <Container>
        {children}
        <InfoBlock />
      </Container>
    </Box>
    <LayoutFooter />
  </>
);

export default Layout;
