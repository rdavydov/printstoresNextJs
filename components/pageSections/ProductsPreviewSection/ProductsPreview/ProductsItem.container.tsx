import React, { useState } from "react";
import ProductItemViews from "./ProductsItemViews";

const ProductsItemContainer = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decrementQuantity = () => {
        setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
    };

    return (
        <ProductItemViews
            product={product}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            quantity={quantity}
        />
    );
};

export default ProductsItemContainer;
