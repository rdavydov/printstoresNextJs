import React from "react";
import BreadcrumbsLinks from "../../../../reusable-components/BreadcrumbsLinks";
import { IRoutes } from "../../../../types/interfaces/routes.interface";
import { HeaderTitle, GoodsPromoSection } from "../styled/styled";

interface IProps {
  title: string | string[];
}

const GoodsPromo = ({ title, route }: IProps & IRoutes) => {
  return (
    <GoodsPromoSection>
      <BreadcrumbsLinks route={route} />
      <HeaderTitle>{title}</HeaderTitle>
    </GoodsPromoSection>
  );
};

export default GoodsPromo;
