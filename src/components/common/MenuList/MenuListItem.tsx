import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MenuListItemWrapper } from "../styled";

import styles from "./MenuList.module.scss";

interface IProps {
  label: string;
  href: string;
  showSelected?: boolean;
}

const MenuListItem = ({ label, href, showSelected }: IProps) => {
  const { pathname } = useRouter();

  return (
    <MenuListItemWrapper>
      {href === pathname ? (
        <b className={showSelected ? styles.active : ""}>{label}</b>
      ) : (
        <Link href={href}>
          <a>{label}</a>
        </Link>
      )}
    </MenuListItemWrapper>
  );
};

export default MenuListItem;
