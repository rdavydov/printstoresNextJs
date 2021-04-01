import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Avatar } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Routes } from "src/constants/routes/routes";
import { RootState } from "src/store/rootReducer";
import MenuLink from "../MenuLink/MenuLink";

const BadgeShopping = (props: React.HTMLProps<any>) => {
  const { products } = useSelector((state: RootState) => state.cart.products);
  return (
    <MenuLink href={Routes.CART.href} {...props}>
      <Badge count={products.length}>
        <Avatar shape="circle" icon={<ShoppingCartOutlined />} />
      </Badge>
    </MenuLink>
  );
};

export default BadgeShopping;
