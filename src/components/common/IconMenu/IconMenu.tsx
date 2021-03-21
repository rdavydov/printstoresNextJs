import React from "react";
import styles from "./IconMenu.module.scss";
import Title from "../TItle/Title";

interface IProps {
  title: string;
  subTitle?: string;
  iconsMenu?: Array<{ icon: any; path: string }>;
  iconsProps?: { width: number; height: number };
}

const IconMenu = ({ title, subTitle, iconsMenu, iconsProps }: IProps) => (
  <ul>
    {title && (
      <Title className={styles.title} fontSize={18} mb={10}>
        {title}
      </Title>
    )}
    {subTitle && (
      <Title className={styles.subTitle} fontSize={13}>
        {subTitle}
      </Title>
    )}
    {iconsMenu.length > 0 && (
      <div className={styles.iconBoxFlex}>
        {iconsMenu.map(({ icon, path }, index) => (
          <div className={styles.iconBox} key={index}>
            {React.createElement(icon, { style: { fontSize: 30 } })}
          </div>
        ))}
      </div>
    )}
  </ul>
);

export default IconMenu;
