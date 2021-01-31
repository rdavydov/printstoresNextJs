import Link from 'next/link';
import React from 'react';
import { MenuListItemWrapper } from '../styled';

interface IProps {
    text: string;
    path: string;
}

const MenuListItem = ({ text, path }: IProps) => (
  <MenuListItemWrapper>
    <Link href={path}>
      <a>{text}</a>
    </Link>
  </MenuListItemWrapper>
);

export default MenuListItem;
