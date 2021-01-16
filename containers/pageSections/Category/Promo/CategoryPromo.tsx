import React from "react";
import { IRoutes } from "../../../../types/interfaces/routes.interface";
import { BreadcrumbsLinks } from "components";
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
