import React from 'react';
import { Breadcrumbs } from 'src/components/common';
import { IRoutes } from '../../../types/interfaces/routes.interface';
import { CategoryPromoSection, HeaderTitle } from '../styled/styled';

interface IProps {
  crumbs: any;
}

const CategoryPromo = ({ crumbs }: IProps) => (
  <CategoryPromoSection>
    <Breadcrumbs crumbs={crumbs} />
    <HeaderTitle />
  </CategoryPromoSection>
);

export default CategoryPromo;
