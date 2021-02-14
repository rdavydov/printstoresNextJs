import React from 'react';
import { Breadcrumb } from 'antd';
import { BreadcrumbsWrapper, HeaderTitle } from './styled';

interface IProps {
  crumbs: Array<{ title: string; path: string; titleVisible?: boolean }>;
}

const Breadcrumbs = ({ crumbs }: IProps) => {
  const { title = 'Каталог', titleVisible = true } = crumbs[crumbs.length - 1];
  const routes = crumbs.map(({ path, title }, index, { length }) => (length - 1 === index ? (
    <Breadcrumb.Item key={index.toString()}>
      {title}
    </Breadcrumb.Item>
  ) : (
      <Breadcrumb.Item href={path} key={index.toString()}>
        {title}
      </Breadcrumb.Item>
    )));

  return (
    <>
      <BreadcrumbsWrapper>
        <Breadcrumb separator="›">{routes}</Breadcrumb>
      </BreadcrumbsWrapper>
      {titleVisible && <HeaderTitle>{title}</HeaderTitle>}
    </>
  );
};

export default Breadcrumbs
