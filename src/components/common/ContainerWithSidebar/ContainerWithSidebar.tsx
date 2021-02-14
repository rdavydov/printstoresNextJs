import React from "react";
import Container from "../Container/Container";
import MenuList from "../MenuList/MenuList";

import styles from "./ContainerWithSidebar.module.scss";

const menuItems = [
  { text: "О нас", path: "/me" },
  { text: "Отзывы", path: "/reviews" },
  { text: "Помощь", path: "/help" },
  { text: "Оплата", path: "/payments" },
  { text: "Доставка", path: "/delivery" },
  { text: "Контакты", path: "/contacts" },
];

const ContainerWithSidebar: React.FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.sidebar}>
        <MenuList title="Информация" menuItems={menuItems} classNameMenu={styles.menuSticky} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ContainerWithSidebar;
