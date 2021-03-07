import React from "react";

import cn from "classnames";

import styles from "./Paragraph.module.scss";

interface IProps {
  paragraphClassName?: string;
}

const Paragraph: React.FC<IProps & React.HTMLProps<any>> = ({
  children,
  paragraphClassName,
  ...rest
}) => {
  return (
    <p className={cn(styles.root, paragraphClassName)} {...rest}>
      {children}
    </p>
  );
};

export default Paragraph;
