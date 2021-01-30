import React from 'react';
import { Menu } from 'antd';
import { Container } from 'components/common';
import { nanoid } from 'nanoid';
import { LayoutMenuWrapper, MenuWrapper } from './styles';
import { menuData, MenuItems, MenuList } from './data';

const { SubMenu } = Menu;

const getItem = (items: MenuItems) => items.map(({ title }, index) => (
  <Menu.Item key={nanoid()}>{title}</Menu.Item>
));

const getMenuItem = (menuList: MenuList) => menuList.map(({ title, items }) => (
  <SubMenu key={nanoid()} title={title}>
    {getItem(items)}
  </SubMenu>
));

const LayoutMenu = () => (
  <LayoutMenuWrapper>
    <Container>
      <MenuWrapper>
        <Menu mode="horizontal">
          {menuData.map(({ menu, menuList }, index) => (
            <SubMenu title={menu.title} key={nanoid()}>
              {getMenuItem(menuList)}
            </SubMenu>
          ))}
        </Menu>
      </MenuWrapper>
    </Container>
  </LayoutMenuWrapper>
);

export default LayoutMenu;
