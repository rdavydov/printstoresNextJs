import { BreadcrumbsLinks } from "components";
import React from "react";
import { CatalogWrapper, HeaderTitle } from "../styled/styled";

const TITLE = "Каталог";

const CatalogPromo = ({ crumbs }) => {
    return (
        <CatalogWrapper>
            <BreadcrumbsLinks crumbs={crumbs} />
        </CatalogWrapper>
    );
};

export default CatalogPromo;