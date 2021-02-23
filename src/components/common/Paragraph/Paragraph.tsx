import React from "react";

import cn from "classnames";

import styles from "./Paragraph.module.scss";

interface IProps {
  paragraphClassName?: string;
}

const Paragraph: React.FC<IProps> = ({ children, paragraphClassName }) => {
  return <p className={cn(styles.root, paragraphClassName)}>{children}</p>;
};

export default Paragraph;
