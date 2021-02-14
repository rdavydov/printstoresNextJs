import React from 'react';
import { Col, Dropdown, Menu, Row } from 'antd';
import { nanoid } from 'nanoid';
import { LayoutMenuWrapper, MenuWrapper } from './styles';

import { headerMenuDropdown, Submenu } from '../../../templates/Layout/dropdown-menu-data';
import styles from './DropdownHeaderMenu.module.scss';
import Link from 'next/link';

export type MenuItems = Array<{ title: string; path: string }>;

interface IProps {
    menuData: HeaderMenu;
}

export type HeaderMenu = Array<{ menuLabel: string; menuItems: Array<{ title: string; items: MenuItems }> }>;

const getMenu = (submenu: Submenu) => (
    <div key={nanoid()}>
        <Row className={styles.row} key={nanoid()}>
            {submenu.map(({ label, path, items }) => (
                <Col span={6}>
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

const DropdownHeaderMenu = ({ menuData }: IProps) => (
    <LayoutMenuWrapper>
        <MenuWrapper>
            {headerMenuDropdown.map(({ label, path, submenu }) => (
                <Dropdown
                    overlay={getMenu(submenu)}
                    key={nanoid()}
                    trigger={['click']}
                    className={styles.dropdown}
                    overlayClassName={styles.wrapper}
                >
                    <div>{label}</div>
                </Dropdown>
            ))}
        </MenuWrapper>
    </LayoutMenuWrapper>
);

export default DropdownHeaderMenu;
