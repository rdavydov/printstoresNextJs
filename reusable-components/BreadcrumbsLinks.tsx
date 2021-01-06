import React, { Fragment } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { BreadcrumbsWrapper, HeaderTitle } from "./styled";
import Link from "next/link";

interface IProps {
    crumbs: Array<{ title: string; path: string }>;
}

const BreadcrumbsLinks = ({ crumbs }: IProps) => {
    const { title } = crumbs[crumbs.length - 1];
    const routes = crumbs.map(({ path, title }, index, { length }) => {
        return length - 1 === index ? (
            <span key={index} style={{ color: "black" }}>
                {title}
            </span>
        ) : (
            <Link href={path} as={path} key={index}>
                <a>{title}</a>
            </Link>
        );
    });

    return (
        <Fragment>
            <BreadcrumbsWrapper>
                <Breadcrumbs separator="›">{routes}</Breadcrumbs>
            </BreadcrumbsWrapper>
            <HeaderTitle>{title}</HeaderTitle>
        </Fragment>
    );
};

export default BreadcrumbsLinks;
