import { categoryService } from "api/services/category.service";
import React from "react";
import { catalogService } from "../../api/services/catalog.service";
import { Layout } from "containers/Layout";
import CatalogItems from "../../containers/pageSections/Catalog/CatalogItems";

import Promo from "../../containers/pageSections/Catalog/Promo";

const Catalog = ({ itemsList, crumbs }) => {
    return (
        <Layout>
            <Promo crumbs={crumbs} />
            <CatalogItems category={itemsList} />
        </Layout>
    );
};

export async function getServerSideProps(context) {
    const {
        data: { crumbs, itemsList },
    } = await catalogService.getAllCategory();
    return {
        props: { crumbs, itemsList },
    };
}
export default Catalog;
