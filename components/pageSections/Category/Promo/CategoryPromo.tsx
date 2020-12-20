import React from "react";
import BreadcrumbsLinks from "../../../../reusable-components/BreadcrumbsLinks";
import { IRoutes } from "../../../../types/interfaces/routes.interface";
import { CategoryPromoSection, HeaderTitle } from "../styled/styled";

interface IProps {
  title: string | string[];
}

const CategoryPromo = ({ title, route }: IProps & IRoutes) => {
  return (
    <CategoryPromoSection>
      <BreadcrumbsLinks route={route} />
      <HeaderTitle>{title}</HeaderTitle>
    </CategoryPromoSection>
  );
};

export default CategoryPromo;
