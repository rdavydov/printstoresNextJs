import React from 'react';
import { Menu } from 'antd';
import { nanoid } from 'nanoid';
import { LayoutMenuWrapper, MenuWrapper } from './styles';



export type TypeMenuData = Array<{
    menu: {
        title: string;
        route: string;
    };
    menuList: Array<{
        title: string;
        path: string;
        items: Array<{ title: string; path: string }>;
    }>;
}>;

export type MenuList = Array<{
    title: string;
    path: string;
    items: Array<{ title: string; path: string }>;
}>;

export type MenuItems = Array<{ title: string; path: string }>;


const { SubMenu } = Menu;

const getItem = (items: MenuItems) => items.map(({ title }, index) => (
    <Menu.Item key={nanoid()}>{title}</Menu.Item>
));

const getMenuItem = (menuList: MenuList) => menuList.map(({ title, items }) => (
    <SubMenu key={nanoid()} title={title}>
        {getItem(items)}
    </SubMenu>
));

const DropdownHeaderMenu = ({ menuData }) => (
    <LayoutMenuWrapper>
        <MenuWrapper>
            <Menu mode="horizontal">
                {menuData.map(({ menu, menuList }, index) => (
                    <SubMenu title={menu.title} key={nanoid()}>
                        {getMenuItem(menuList)}
                    </SubMenu>
                ))}
            </Menu>
        </MenuWrapper>
    </LayoutMenuWrapper>
);

export default DropdownHeaderMenu;