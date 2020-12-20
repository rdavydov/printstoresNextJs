import React from "react";
import BreadcrumbsLinks from "../../../../reusable-components/BreadcrumbsLinks";
import { CatalogWrapper, HeaderTitle } from "../styled/styled";

const TITLE = "Каталог";

const CatalogPromo = ({ route }) => {
  return (
    <CatalogWrapper>
      <BreadcrumbsLinks route={route} />
      <HeaderTitle>{TITLE}</HeaderTitle>
    </CatalogWrapper>
  );
};

export default CatalogPromo;
