import { useMemo } from "react";
import { MenuType } from "src/types/menu/catalog.menu.types";
import { Col, Menu, Row } from "antd";
import Link from "next/link";
import styles from "../DropdownHeaderMenu.module.scss";

interface IProps {
  menu: MenuType;
  activeMenu: string;
  clearSelected: () => void;
}

const SubDropdownMenu: React.FC<IProps> = ({
  menu,
  activeMenu,
  clearSelected,
}) => {
  const submenu = useMemo(
    () =>
      menu.reduce(
        (prev, { title, children }) => ({
          ...prev,
          [title]: <SubMenu menu={children} />,
        }),
        {}
      ),
    []
  );

  if (typeof submenu[activeMenu] === "undefined") return null;
  return (
    <div className={styles.menuItemWrapper} onClick={clearSelected}>
      {submenu[activeMenu]}
    </div>
  );
};
export default SubDropdownMenu;

const SubMenu = ({ menu }) => {
  return (
    <WrapperMenu>
      {menu.map(({ title, href, children }) => {
        return (
          <DropdownMenuItem
            key={href}
            title={title}
            href={href}
            submenu={children}
          />
        );
      })}
    </WrapperMenu>
  );
};

const WrapperMenu: React.FC<any> = ({ children }) => {
  return (
    <div className={styles.menuItem}>
      <Row className={styles.row}>{children}</Row>
    </div>
  );
};

function DropdownMenuItem({ title, href, submenu }) {
  return (
    <Col span={6}>
      <Menu className={styles.menu}>
        <Menu.ItemGroup
          title={
            <Link href={href}>
              <a>{title}</a>
            </Link>
          }
        >
          {submenu.map(({ href, title, children }) => (
            <Menu.Item key={href}>
              <Link href={href}>
                <a>{title}</a>
              </Link>
            </Menu.Item>
          ))}
        </Menu.ItemGroup>
      </Menu>
    </Col>
  );
}
