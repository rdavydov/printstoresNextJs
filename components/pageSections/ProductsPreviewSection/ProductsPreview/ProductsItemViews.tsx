import React, { Fragment } from "react";
import { Product } from "types/type/products.type";
import PreviewItem from "./PreviewItem/PreviewItem";

interface IProps {
    product: Product[];
    incrementQuantity: () => void;
    decrementQuantity: () => void;
    quantity: number;
}

const ProductItemViews: React.FC<IProps> = ({
    product,
    decrementQuantity,
    incrementQuantity,
    quantity,
}) => {
    return (
        <Fragment>
            {product.map(({ ...rest }, index) => (
                <PreviewItem
                    {...rest}
                    key={index}
                    decrementQuantity={decrementQuantity}
                    incrementQuantity={incrementQuantity}
                    quantity={quantity}
                />
            ))}
        </Fragment>
    );
};
export default ProductItemViews;
