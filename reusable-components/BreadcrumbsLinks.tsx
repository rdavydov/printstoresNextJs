import React, { Fragment } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { BreadcrumbsWrapper, HeaderTitle } from "./styled";
import Link from "next/link";

interface IProps {
    crumbs: Array<{ title: string; path: string; titleVisible?: boolean }>;
}

const BreadcrumbsLinks = ({ crumbs }: IProps) => {
    const { title, titleVisible = true } = crumbs[crumbs.length - 1];
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
            {titleVisible && <HeaderTitle>{title}</HeaderTitle>}
        </Fragment>
    );
};

export default BreadcrumbsLinks;
