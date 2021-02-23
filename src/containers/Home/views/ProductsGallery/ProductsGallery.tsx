import React from "react";
import { IProductsGaleryProps } from "../../../../types/product/products.gallery.interface";
import ProductsGalleryContainer from "./ProductsGallery.container";

const ProductsGallery: React.FC<IProductsGaleryProps> = ({ title }) => <ProductsGalleryContainer title={title} />;

export default ProductsGallery;
