import Link from 'next/link';
import React from 'react';
import { MenuListItem } from '../styled';

interface IProps<K> {
    text: K;
    path: K;
}

const ListItem = <K, >({ text, path }: IProps<K>) => (
  <MenuListItem>
    <Link href={path}>
      <a>{text}</a>
    </Link>
  </MenuListItem>
);

export default ListItem;
