import { categoryService } from "api/services/category.service";
import axios from "axios";
import React from "react";
import Layout from "../../../../components/Layout/Layout";
import CategoryItems from "../../../../components/pageSections/Category/CategoryItems";
import Promo from "../../../../components/pageSections/Category/Promo";

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
