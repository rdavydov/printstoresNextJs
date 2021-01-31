import React from 'react';
import Layout from 'templates/Layout/Layout';
import { crumbsService, productService } from 'api';
import { BreadcrumbsLinks, ProductsList } from 'components/common';
import { useRouter } from 'next/router';
import { routesConfig } from 'config/routes/routes';

const CatalogPage = ({ crumbs, products }) => {
  const { push } = useRouter();
  const goLocation = ({ name, prefix, _id }) => {
    const path = routesConfig.getProductItemRoute();
    push({ pathname: path, query: { title: name, prefix, id: _id } }, path);
  };

  return (
    <Layout>
      <BreadcrumbsLinks crumbs={crumbs} />
      <ProductsList dataSource={products} goLocation={goLocation} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { products } = await productService.getAllProducts();
  const crumbs = await crumbsService.getCatalogCrumbs();
  return {
    props: { crumbs, products },
  };
}
export default CatalogPage;
