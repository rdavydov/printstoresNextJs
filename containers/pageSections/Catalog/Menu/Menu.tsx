import { BreadcrumbsLinks } from 'components';
import React from 'react';
import { CatalogMenuWrapper } from './styles/styled';

const CatalogMenu = ({ crumbs }) => (
  <CatalogMenuWrapper>
    <BreadcrumbsLinks crumbs={crumbs} />
  </CatalogMenuWrapper>

);

export default CatalogMenu;
