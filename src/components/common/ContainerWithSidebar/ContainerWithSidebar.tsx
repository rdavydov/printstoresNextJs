import React from "react";
import { reviewsSidebar } from "src/constants/routes/reviews/reviews.routes";
import MenuList from "../MenuList/MenuList";

import styles from "./ContainerWithSidebar.module.scss";

const ContainerWithSidebar: React.FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.sidebar}>
        <MenuList title="Информация" menuItems={reviewsSidebar} classNameMenu={styles.menuSticky} showSelected />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ContainerWithSidebar;
