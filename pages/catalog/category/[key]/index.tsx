import { categoryService } from "api/services/category.service";
import React from "react";
import { Layout } from "containers/Layout";
import CategoryItems from "../../../../containers/pageSections/Category/CategoryItems";
import Promo from "../../../../containers/pageSections/Category/Promo";
import { crumbsService } from "api";

const CategoryPage = ({ category, crumbs }) => {
    return (
        <Layout>
            <Promo crumbs={crumbs} />
            <CategoryItems categoryItems={category} />
        </Layout>
    );
};

export async function getServerSideProps({ params: { key } }) {
    const {
        data: { category },
    } = await categoryService.getCategoryByKey({ requestUrl: [key] });

    const crumbs = await crumbsService.getCrumbsConfig({ query: { key } });
    return {
        props: { category, crumbs: crumbs.data },
    };
}

export default CategoryPage;
