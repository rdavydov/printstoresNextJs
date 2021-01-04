import React from "react";
import BreadcrumbsLinks from "../../../../reusable-components/BreadcrumbsLinks";
import { CatalogWrapper, HeaderTitle } from "../styled/styled";

const TITLE = "Каталог";

const CatalogPromo = ({ crumbs }) => {
    return (
        <CatalogWrapper>
            <BreadcrumbsLinks crumbs={crumbs} />
            <HeaderTitle>{TITLE}</HeaderTitle>
        </CatalogWrapper>
    );
};

export default CatalogPromo;
