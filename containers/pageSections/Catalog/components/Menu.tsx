import React from 'react';
import { BreadcrumbsLinks } from 'components';
import { CatalogMenuWrapper } from './styles';

const CatalogMenu = ({ crumbs }) => (
  <CatalogMenuWrapper>
    <BreadcrumbsLinks crumbs={crumbs} />
  </CatalogMenuWrapper>

);

export default CatalogMenu;
