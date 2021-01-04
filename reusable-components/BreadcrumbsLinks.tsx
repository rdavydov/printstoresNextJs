import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { BreadcrumbsWrapper } from "./styled";
import Link from "next/link";

interface IProps {
    crumbs: Array<{ title: string; path: string }>;
}

const BreadcrumbsLinks = ({ crumbs }: IProps) => {
    console.log(crumbs);
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
        <BreadcrumbsWrapper>
            <Breadcrumbs separator="›">{routes}</Breadcrumbs>
        </BreadcrumbsWrapper>
    );
};

export default BreadcrumbsLinks;
