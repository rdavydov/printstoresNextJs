import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { BreadcrumbsWrapper } from "./styled";
import { IRoutes } from "../types/interfaces/routes.interface";
import Link from "next/link";
import { useRouter } from "next/router";

const BreadcrumbsLinks = ({ route }: IRoutes) => {
  const { query } = useRouter();
  const routes = route.map(({ path, name }, index, arr) => {
    let last = false;
    if (arr.length - 1 === index) {
      last = true;
    }
    return last ? (
      <span key={index} style={{ color: "black" }}>
        {name}
      </span>
    ) : (
      <Link
        href={{ pathname: path, query: { title: name, ...query } }}
        as={path}
        key={index}
      >
        <a>{name}</a>
      </Link>
    );
  });

  return (
    <BreadcrumbsWrapper>
      <Breadcrumbs separator="›">{routes}</Breadcrumbs>
    </BreadcrumbsWrapper>
  );
};

export default BreadcrumbsLinks;
