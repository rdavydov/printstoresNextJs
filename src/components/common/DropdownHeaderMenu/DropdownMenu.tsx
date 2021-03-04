import React, { useMemo } from "react";
import { Menu } from "antd";

import { LayoutMenuWrapper, MenuWrapper } from "./styles";
import Link from "next/link";
import SubDropdownMenu from "./DropdownMenu/SubDropdownMenu";

import { useState } from "react";

import styles from "./DropdownHeaderMenu.module.scss";
import { useRouter } from "next/router";

interface IProps {
  menu: any[];
}

const DropdownHeaderMenu = ({ menu = [] }: IProps) => {
  const [activeMenu, setActiveMenu] = useState("");

  const { asPath } = useRouter();

  const onHover = (active) => {
    setActiveMenu(active);
  };

  const onSelect = (props) => {
    console.log(props);
  };
  const parentRootItems = menu.filter(({ parentID }) => parentID === null);

  function createMenu(array: any[], menuItem) {
    const filteredArray = array.filter(
      ({ parentID }) => parentID === menuItem._id
    );

    return {
      ...menuItem,
      children: filteredArray.map((item) => createMenu(array, item)),
    };
  }

  const headerMenu = parentRootItems.map((item) => createMenu(menu, item));

  const clearSelected = () => {
    setActiveMenu("");
  };

  const selectedKey = useMemo(() => {
    let currentPath = menu.find(({ href }) => href === asPath);
    if (!currentPath) return null;

    while (currentPath.parentID !== null) {
      currentPath = menu.find(({ _id }) => _id === currentPath?.parentID);
    }
    return currentPath.href;
  }, [asPath]);

  return (
    <LayoutMenuWrapper>
      <MenuWrapper onMouseLeave={() => setActiveMenu("")}>
        <Menu
          className={styles.wrapper}
          selectedKeys={[selectedKey]}
          subMenuCloseDelay={0}
          onSelect={onSelect}
        >
          {parentRootItems.map(({ href, title }) => (
            <Menu.Item key={href} className={styles.menuLi}>
              <Link href={href} scroll={false}>
                <a onMouseMove={() => onHover(title)}>{title}</a>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
        <SubDropdownMenu
          activeMenu={activeMenu}
          menu={headerMenu}
          clearSelected={clearSelected}
        />
      </MenuWrapper>
    </LayoutMenuWrapper>
  );
};

export default DropdownHeaderMenu;
