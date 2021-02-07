import React, { Fragment } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link';
import { BreadcrumbsWrapper, HeaderTitle } from './styled';

interface IProps {
  crumbs: Array<{ title: string; path: string; titleVisible?: boolean }>;
}

const BreadcrumbsLinks = ({ crumbs }: IProps) => {
  const { title = 'Каталог', titleVisible = true } = crumbs[crumbs.length - 1];
  const routes = crumbs.map(({ path, title }, index, { length }) => (length - 1 === index ? (
    <span key={index.toString()} style={{ color: 'black' }}>
      {title}
    </span>
  ) : (
      <Link href={path} as={path} key={index.toString()}>
        <a>{title}</a>
      </Link>
    )));

  return (
    <>
      <BreadcrumbsWrapper>
        <Breadcrumbs separator="›">{routes}</Breadcrumbs>
      </BreadcrumbsWrapper>
      {titleVisible && <HeaderTitle>{title}</HeaderTitle>}
    </>
  );
};

export default BreadcrumbsLinks;
