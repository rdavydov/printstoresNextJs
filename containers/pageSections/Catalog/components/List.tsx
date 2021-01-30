import React from 'react';
import { ProductsCard } from 'components';
import { routesConfig } from 'config/routes/routes';
import { useRouter } from 'next/router';
import { CatalogListWrapper } from './styles';

const CatalogList = ({ products }) => {
  const { push } = useRouter();
  const goLocation = ({ name, prefix, _id }) => {
    const path = routesConfig.getProductItemRoute();
    push({ pathname: path, query: { title: name, prefix, id: _id } }, path);
  };

  return (
    <CatalogListWrapper>
      <ProductsCard dataSource={products} goLocation={goLocation} />
    </CatalogListWrapper>
  );
};

export default CatalogList;
