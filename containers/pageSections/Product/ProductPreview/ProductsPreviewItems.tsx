import React from "react";
import { Card } from "components";

const ProductsPreviewItems = ({ products, goLocation }) => {
    return (
        <>
            <Card productsList={products} goLocation={goLocation} />
        </>
    );
};

export default ProductsPreviewItems;
