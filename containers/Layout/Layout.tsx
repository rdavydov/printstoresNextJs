import React from 'react';
import { Box, Container } from '@material-ui/core';
import { LayoutHeader } from './layout-header';
import { LayoutFooter } from './layout-footer';
import LayoutMenu from './Menu/LayoutMenu';
import { InfoBlock } from 'components';

const Layout = ({ children, ...rest }) => (
  <>
    <LayoutHeader />
    <Box component="main">
      <LayoutMenu />
      <Container>
        {children}
        <InfoBlock />
      </Container>
    </Box>
    <LayoutFooter />
  </>
);

export default Layout;
