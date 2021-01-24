import { categoryService } from "api/services/category.service";
import React from "react";
import { catalogService } from "../../api/services/catalog.service";
import { Layout } from "containers/Layout";
import CatalogItems from "../../containers/pageSections/Catalog/CatalogItems";

import Promo from "../../containers/pageSections/Catalog/Promo";
import { crumbsService } from "api";

const Catalog = ({ category, crumbs }) => {
    return (
        <Layout>
            <Promo crumbs={crumbs} />
            <CatalogItems category={category} />
        </Layout>
    );
};

export async function getServerSideProps(context) {
    const { category } = await catalogService.getAllCategory();
    const crumbs = await crumbsService.getCatalogCrumbs();
    return {
        props: { crumbs, category },
    };
}
export default Catalog;
