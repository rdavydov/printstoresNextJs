import React from "react";
import Link, { LinkProps } from "next/link";

interface IProps extends LinkProps {
  href: string;
  label?: string;
}

const MenuLink: React.FC<IProps & React.HTMLProps<any>> = ({ href, label, children, ...rest }) => {
  return (
    <Link href={href} {...rest}>
      <a>{label || children}</a>
    </Link>
  );
};

export default MenuLink;
