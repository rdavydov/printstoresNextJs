import React from "react";
import ProductTable from "./product-table/product-table";

const AdminProductPage = ({ data }) => {
    return (
        <>
            <ProductTable data={data} />
        </>
    );
};

export default AdminProductPage;
