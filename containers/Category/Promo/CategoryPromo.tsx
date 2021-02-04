import React from 'react';
import { BreadcrumbsLinks } from 'components/common';
import { IRoutes } from '../../../../types/interfaces/routes.interface';
import { CategoryPromoSection, HeaderTitle } from '../styled/styled';

interface IProps {
  crumbs: any;
}

const CategoryPromo = ({ crumbs }: IProps) => (
  <CategoryPromoSection>
    <BreadcrumbsLinks crumbs={crumbs} />
    <HeaderTitle />
  </CategoryPromoSection>
);

export default CategoryPromo;
