import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Product } from "types/type/products.type";
import PreviewItem from "./PreviewItem/PreviewItem";

interface IProps {
    product: Product[];
}

const ProductItemViews: React.FC<IProps> = ({ product }) => {
    return (
        <Fragment>
            {product.map(({ ...rest }, index) => (
                <PreviewItem {...rest} key={index} />
            ))}
        </Fragment>
    );
};
export default ProductItemViews;
