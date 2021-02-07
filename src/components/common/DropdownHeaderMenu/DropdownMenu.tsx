import React from 'react';
import { Col, Dropdown, Menu, Row } from 'antd';
import { nanoid } from 'nanoid';
import { LayoutMenuWrapper, MenuWrapper } from './styles';
import styles from './DropdownHeaderMenu.module.scss';

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
                    <Menu className={styles.menu} selectable={false}>
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
            {menuData.map(({ menuLabel, menuItems }) => (
                <Dropdown
                    overlay={getMenu(menuItems)}
                    key={nanoid()}
                    trigger={['click']}
                    className={styles.dropdown}
                    overlayClassName={styles.wrapper}
                >
                    <div>{menuLabel}</div>
                </Dropdown>
            ))}
        </MenuWrapper>
    </LayoutMenuWrapper>
);

export default DropdownHeaderMenu;
