import { categoryService } from "api/services/category.service";
import axios from "axios";
import React from "react";
import Layout from "../../../../components/Layout/Layout";
import CategoryItems from "../../../../components/pageSections/Category/CategoryItems";
import Promo from "../../../../components/pageSections/Category/Promo";

const CategoryPage = ({ categoryData }) => {
    return (
        <Layout>
            <Promo />
            <CategoryItems categoryItems={categoryData} />
        </Layout>
    );
};

export async function getServerSideProps({ params: { key } }) {
    const { data } = await categoryService.getCategoryByKey(key);
    return {
        props: { categoryData: data },
    };
}

export default CategoryPage;
