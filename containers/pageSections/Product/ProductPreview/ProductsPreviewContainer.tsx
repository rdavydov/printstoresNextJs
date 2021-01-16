import { routesConfig } from "config/routes/routes";
import { useRouter } from "next/router";
import React from "react";
import ProductsPreviewItems from "./ProductsPreviewItems";

const ProductsPreviewContainer = ({ products }) => {
    const { replace } = useRouter();

    const goLocation = ({ _id, prefix }) => {
        const pathname = routesConfig.getProductItemRoute();
        replace({ pathname, query: { id: _id, prefix } }, pathname);
    };
    return <ProductsPreviewItems products={products} goLocation={goLocation} />;
};

export default ProductsPreviewContainer;
