import React from "react";
import BreadcrumbsLinks from "../../../../reusable-components/BreadcrumbsLinks";
import { IRoutes } from "../../../../types/interfaces/routes.interface";
import { HeaderTitle, ProductPromoSection } from "../styled/styled";

interface IProps {
  title: string | string[];
}

const ProductsPromo = ({ title, route }: IProps & IRoutes) => {
  return (
    <ProductPromoSection>
      <BreadcrumbsLinks route={route} />
      <HeaderTitle>{title}</HeaderTitle>
    </ProductPromoSection>
  );
};

export default ProductsPromo;
