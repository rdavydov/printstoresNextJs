import { Breadcrumb, Layout, Menu } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import React from "react";
import SubMenu from "antd/lib/menu/SubMenu";

const { Header, Sider, Content, Footer } = Layout;

const AdminLayout = ({ children }) => {
    const [state, setState] = useState({ collapsed: false });

    const toogle = () => {
        setState({ collapsed: !state.collapsed });
    };
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsible collapsed={state.collapsed} onCollapse={toogle}>
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Пользователи
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Заказы
                    </Menu.Item>
                    <Menu.Item key="3" icon={<DesktopOutlined />}>
                        Статистика продаж
                    </Menu.Item>
                    <Menu.Item key="4" icon={<DesktopOutlined />}>
                        Статистика SEO
                    </Menu.Item>
                    <Menu.Item key="5" icon={<DesktopOutlined />}>
                        Продукты
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="SEO">
                        <Menu.Item key="6">Продукты</Menu.Item>
                        <Menu.Item key="7">Страницы</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{ padding: 0, margin: "16px" }}
                />
                <Content style={{ margin: "0 16px" }}>
                    <div
                        className="site-layout-background"
                        style={{ padding: 24, minHeight: 360 }}
                    >
                        Content
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Printstores ©2020 Created by Slenter
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
