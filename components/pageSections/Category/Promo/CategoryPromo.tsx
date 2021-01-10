import React from "react";
import BreadcrumbsLinks from "../../../../reusable-components/BreadcrumbsLinks";
import { IRoutes } from "../../../../types/interfaces/routes.interface";
import { CategoryPromoSection, HeaderTitle } from "../styled/styled";

interface IProps {
    crumbs: any;
}

const CategoryPromo = ({ crumbs }: IProps) => {
    return (
        <CategoryPromoSection>
            <BreadcrumbsLinks crumbs={crumbs} />
            <HeaderTitle></HeaderTitle>
        </CategoryPromoSection>
    );
};

export default CategoryPromo;
