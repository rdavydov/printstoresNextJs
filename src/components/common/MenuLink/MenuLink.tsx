import React from "react";
import Link, { LinkProps } from "next/link";

interface IProps extends LinkProps {
  href: string;
  label: string;
}

const MenuLink = ({ href, label, ...rest }: IProps) => {
  return (
    <Link href={href} {...rest}>
      <a>{label}</a>
    </Link>
  );
};

export default MenuLink;
