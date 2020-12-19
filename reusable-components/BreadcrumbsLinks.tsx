import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "@material-ui/core";
import { BreadcrumbsWrapper } from "./styled";
import { IRoutes } from "../types/interfaces/routes.interface";

interface IProps {
  ariaLabel: string;
}

const BreadcrumbsLinks = ({ route }: IRoutes & IProps) => {
  const routes = route.map((el, index, arr) => {
    let color;
    if (arr.length - 1 === index) {
      color = "textPrimary";
    }
    return (
      <Link href={el.path} color={color ?? "inherit"} key={index}>
        {el.name}
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
