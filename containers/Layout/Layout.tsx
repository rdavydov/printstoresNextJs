import React from 'react';
import { Box, Container } from '@material-ui/core';
import { LayoutHeader } from './layout-header';
import { LayoutFooter } from './layout-footer';

const Layout = ({ children, ...rest }) => (
  <>
    <LayoutHeader />
    <Box component="main">
      <Container>{children}</Container>
    </Box>
    <LayoutFooter />
  </>
);

export default Layout;
