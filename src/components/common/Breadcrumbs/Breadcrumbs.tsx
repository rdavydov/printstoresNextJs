import React from "react";
import { Breadcrumb } from "antd";
import { BreadcrumbsWrapper, HeaderTitle } from "./styled";
import { useRouter } from "next/router";
import utils, { createCrumbs } from "src/utils";

interface IProps {
  crumbs: Array<{
    title: string;
    href: string;
    _id: string;
    parentID: null | string;
  }>;
  defaultCrumbs?: Array<{ href: string; title: string }>;
}

const initialCrumbs = [
  { href: "/", title: "Главная" },
  { href: "/catalog", title: "Каталог" },
];

const Breadcrumbs = ({ crumbs, defaultCrumbs = initialCrumbs }: IProps) => {
  const { asPath } = useRouter();
  const routes = createCrumbs(asPath, crumbs, defaultCrumbs).map(
    ({ href, title }, index, { length }) =>
      length - 1 === index ? (
        <Breadcrumb.Item key={index.toString()}>{title}</Breadcrumb.Item>
      ) : (
        <Breadcrumb.Item href={href} key={index.toString()}>
          {title}
        </Breadcrumb.Item>
      )
  );

  return (
    <>
      <BreadcrumbsWrapper>
        <Breadcrumb separator="›">{routes}</Breadcrumb>
      </BreadcrumbsWrapper>
    </>
  );
};

export default Breadcrumbs;
