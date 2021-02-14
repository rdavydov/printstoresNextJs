import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MenuListItemWrapper } from "../styled";

import styles from "./MenuList.module.scss";

interface IProps {
  text: string;
  path: string;
}

const MenuListItem = ({ text, path }: IProps) => {
  const { pathname } = useRouter();

  return (
    <MenuListItemWrapper>
      {path === pathname ? (
        <b className={styles.active}>{text}</b>
      ) : (
        <Link href={path}>
          <a>{text}</a>
        </Link>
      )}
    </MenuListItemWrapper>
  );
};

export default MenuListItem;
