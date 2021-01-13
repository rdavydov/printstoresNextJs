import { categoryService } from "api/services/category.service";
import React from "react";
import { catalogService } from "../../api/services/catalog.service";
import { Layout } from "components/Layout";
import CatalogItems from "../../components/pageSections/Catalog/CatalogItems";

import Promo from "../../components/pageSections/Catalog/Promo";

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
