import { Breadcrumb, Layout, Menu } from "antd";
import {
    UserOutlined,
    DesktopOutlined,
    PieChartOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import React from "react";
import SubMenu from "antd/lib/menu/SubMenu";
import { useRouter } from "next/router";
import { AdminLayoutContext } from "context/AdminLayoutContext";

const { Header, Sider, Content, Footer } = Layout;

const AdminLayout = ({ children }) => {
    const [state, setState] = useState({ collapsed: false });
    const { headerContent, headerView = true } = useContext(AdminLayoutContext);

    const { replace } = useRouter();

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
                    <Menu.Item
                        key="5"
                        icon={<DesktopOutlined />}
                        onClick={() => replace("/admin/products")}
                    >
                        Товары
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="SEO">
                        <Menu.Item key="6">Товары</Menu.Item>
                        <Menu.Item key="7">Страницы</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                {headerView && (
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: "5px 15px",
                            margin: "16px",
                            display: "flex",
                            alignItems: "center",
                            height: "80px",
                        }}
                    >
                        {headerContent}
                    </Header>
                )}
                <Content style={{ margin: "0 16px" }}>
                    <div
                        className="site-layout-background"
                        style={{ padding: 24, minHeight: 360 }}
                    >
                        {children}
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
