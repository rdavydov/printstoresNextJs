import { useRouter } from "next/router";
import React from "react";
import { routesConfig } from "../../../../config/routes/routes";
import { ProductSorting } from "../../../../config/sorting/sorting";
import { productsList } from "../../../views/productsData";
import GoodsItemsPromo from "./GoodsItemsPromo";

const GoodsItemsContainer = () => {
  const {
    replace,
    pathname,
    query: { categoryID, title, goodsTitle, goodsID },
  } = useRouter();
  const sortConfig = new ProductSorting(setData).getProductSortConfig([
    "material",
    "name",
    "price",
  ]);

  const goLocation = (productID: string | number, productTitle: string) => {
    const path = routesConfig.getProductsRoute(pathname);
    replace({
      pathname: path,
      query: {
        goodsTitle,
        goodsID,
        categoryID,
        title,
        productID,
        productTitle,
      },
    });
  };

  return (
    <GoodsItemsPromo
      productsData={productsList}
      sortConfig={sortConfig}
      goLocation={goLocation}
    />
  );
};

export default GoodsItemsContainer;
