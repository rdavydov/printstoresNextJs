import React from "react";
import BreadcrumbsLinks from "../../../../reusable-components/BreadcrumbsLinks";
import { IRoutes } from "../../../../types/interfaces/routes.interface";
import { CategoryPromoSection, HeaderTitle } from "../styled/styled";

interface IProps {
    title: string | string[];
    crumbs: any;
}

const CategoryPromo = ({ title, crumbs }: IProps & IRoutes) => {
    return (
        <CategoryPromoSection>
            <BreadcrumbsLinks crumbs={crumbs} />
            <HeaderTitle>{title}</HeaderTitle>
        </CategoryPromoSection>
    );
};

export default CategoryPromo;
