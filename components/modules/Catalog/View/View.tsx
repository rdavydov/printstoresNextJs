import React from 'react';

import { ProductsList } from 'components/common';
import { routesConfig } from 'config/routes/routes';
import { useRouter } from 'next/router';

const CatalogView = ({ products, crumbs }) => {
  const { push } = useRouter();
  const goLocation = ({ name, prefix, _id }) => {
    const path = routesConfig.getProductItemRoute();
    push({ pathname: path, query: { title: name, prefix, id: _id } }, path);
  };

  return (
    <>
      {/*   <BreadcrumbsLinks crumbs={crumbs} /> */}
      <ProductsList dataSource={products} goLocation={goLocation} />
    </>
  );
};

export default CatalogView;
