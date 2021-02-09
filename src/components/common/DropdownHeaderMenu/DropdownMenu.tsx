import React from 'react';
import { Col, Dropdown, Menu, Row } from 'antd';
import { nanoid } from 'nanoid';
import { LayoutMenuWrapper, MenuWrapper } from './styles';

import { headerMenuDropdown } from '../../../templates/Layout/dropdown-menu-data';
import styles from './DropdownHeaderMenu.module.scss';
import Link from 'next/link';

export type MenuItems = Array<{ title: string; path: string }>;

interface IProps {
    menuData: HeaderMenu;
}

export type HeaderMenu = Array<{ menuLabel: string; menuItems: Array<{ title: string; items: MenuItems }> }>;

const getMenu = (menuList: Array<{ title: string; items: MenuItems }>) => (
    <>
        <Row className={styles.row} key={nanoid()}>
            {menuList.map(({ title, items }) => (
                <Col span={6}>
                    <Menu className={styles.menu}>
                        <Menu.ItemGroup title={title}>
                            {items.map(({ title, path }) => (
                                <Menu.Item key={nanoid()}>{title}</Menu.Item>
                            ))}
                        </Menu.ItemGroup>
                    </Menu>
                </Col>
            ))}
        </Row>
    </>
);

const DropdownHeaderMenu = ({ menuData }: IProps) => (
    <LayoutMenuWrapper>
        <MenuWrapper>
            <Menu>
                {Object.entries(headerMenuDropdown).map(([key, menu]) => (
                    <Menu.SubMenu key={key} title={<Link href={menu.path}>{key}</Link>}>
                        {menu.submenu.map(({ label, items, path }) => (
                            <Menu.ItemGroup key={Math.random().toString()} title={<Link href={path}>{label}</Link>}>
                                {items.map(({ label, path }) => (
                                    <Menu.Item key={Math.random().toString()}>
                                        <Link href={path}>{label}</Link>
                                    </Menu.Item>
                                ))}
                            </Menu.ItemGroup>
                        ))}
                    </Menu.SubMenu>
                ))}
            </Menu>

            {/* {menuData.map(({ menuLabel, menuItems }) => (
                <Dropdown
                    overlay={getMenu(menuItems)}
                    key={nanoid()}
                    trigger={['click']}
                    className={styles.dropdown}
                    overlayClassName={styles.wrapper}
                >
                    <div>{menuLabel}</div>
                </Dropdown>
            ))} */}
        </MenuWrapper>
    </LayoutMenuWrapper>
);

export default DropdownHeaderMenu;
