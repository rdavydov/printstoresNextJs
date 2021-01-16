import { categoryService } from "api/services/category.service";
import React from "react";
import { Layout } from "containers/Layout";
import CategoryItems from "../../../../containers/pageSections/Category/CategoryItems";
import Promo from "../../../../containers/pageSections/Category/Promo";

const CategoryPage = ({ itemsList, crumbs }) => {
    return (
        <Layout>
            <Promo crumbs={crumbs} />
            <CategoryItems categoryItems={itemsList} />
        </Layout>
    );
};

export async function getServerSideProps({ params: { key } }) {
    const {
        data: { crumbs, itemsList },
    } = await categoryService.getCategoryByKey(key);
    return {
        props: { itemsList, crumbs },
    };
}

export default CategoryPage;
