import React from 'react';
import { Layout } from 'containers/Layout';
import { productService } from 'api';
import { BreadcrumbsLinks, ProductsList } from 'components/common';
import { routesConfig } from 'config/routes/routes';
import { useRouter } from 'next/router';

const CatalogViewPage = ({ products }) => {
  const { push } = useRouter();
  const goLocation = ({ name, prefix, _id }) => {
    const path = routesConfig.getProductItemRoute();
    push({ pathname: path, query: { title: name, prefix, id: _id } }, path);
  };

  return (
    <Layout>
      {/*  <BreadcrumbsLinks crumbs={crumbs} /> */}
      <ProductsList dataSource={products} goLocation={goLocation} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const { products } = await productService.getAllProducts();

  /*   const crumbs = await crumbsService.getCategoryCrumbsByKey(key); */
  return {
    props: { products },
  };
}

export default CatalogViewPage;
