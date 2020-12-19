import React from "react";
import CatalogPromo from "./CatalogPromo";

const route = [
  { path: "/", name: "Главная" },
  { path: "/catalog", name: "Каталог" },
];

const CatalogContainer = () => {
  return <CatalogPromo route={route} />;
};

export default CatalogContainer;
