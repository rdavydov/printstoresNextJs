import React from "react";
import { Col, Menu, Row } from "antd";
import { nanoid } from "nanoid";
import { LayoutMenuWrapper, MenuWrapper } from "./styles";

import { useMemo } from "react";
import { useState } from "react";

import { HeaderMenuDropdown, Submenu } from "src/types/menu/dropdown.menu.types";
import styles from "./DropdownHeaderMenu.module.scss";

interface IProps {
  headerMenuDropdown: HeaderMenuDropdown;
}

const getMenu = (submenu: Submenu) => (
  <div key={nanoid()} className={styles.menuItem}>
    <Row className={styles.row}>
      {submenu.map(({ label, path, items }) => (
        <Col span={6} key={nanoid()}>
          <Menu className={styles.menu}>
            <Menu.ItemGroup title={label}>
              {items.map(({ label, path }) => (
                <Menu.Item key={nanoid()}>{label}</Menu.Item>
              ))}
            </Menu.ItemGroup>
          </Menu>
        </Col>
      ))}
    </Row>
  </div>
);

const DropdownHeaderMenu = ({ headerMenuDropdown }: IProps) => {
  const [activeMenu, setActiveMenu] = useState("");
  const submenu = useMemo(
    () => headerMenuDropdown.reduce((prev, { label, submenu }) => ({ ...prev, [label]: [getMenu(submenu)] }), {}),
    []
  );

  const onHover = (active) => {
    setActiveMenu(active);
  };

  const onSelect = (props) => {
    console.log(props);
  };

  return (
    <LayoutMenuWrapper>
      <MenuWrapper onMouseLeave={() => setActiveMenu("")}>
        <Menu className={styles.wrapper} selectedKeys={[activeMenu]} subMenuCloseDelay={0} onSelect={onSelect}>
          <Menu.Item key="Мужчинам" onMouseMove={() => onHover("Мужчинам")} className={styles.menuLi}>
            Мужчинам
          </Menu.Item>
          <Menu.Item key="Женщинам" onMouseMove={() => onHover("Женщинам")} className={styles.menuLi}>
            Женщинам
          </Menu.Item>
          <Menu.Item key="Детям" onMouseMove={() => onHover("Детям")} className={styles.menuLi}>
            Детям
          </Menu.Item>
          <Menu.Item key="Чехлы" onMouseMove={() => onHover("Чехлы")} className={styles.menuLi}>
            Чехлы
          </Menu.Item>
          <Menu.Item key="Подарки" onMouseMove={() => onHover("Подарки")} className={styles.menuLi}>
            Подарки
          </Menu.Item>
          <Menu.Item key="Спорт" onMouseMove={() => onHover("Спорт")} className={styles.menuLi}>
            Спорт
          </Menu.Item>
        </Menu>
        <div className={styles.menuItemWrapper}>{submenu[activeMenu]}</div>
      </MenuWrapper>
    </LayoutMenuWrapper>
  );
};

export default DropdownHeaderMenu;
