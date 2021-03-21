import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/rootReducer";
import { EnvironmentOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import {
  HeaderActionsBlock,
  HeaderInfo,
  HeaderWrapper,
  HeaderCityBlock,
  HeaderNavBlock,
  HeaderSearchBlock,
  HeaderSearchInputWrapper,
} from "./styled";
import { Container, MenuLink, Title } from "src/components/common";
import HeaderMenu from "./HeaderMenu";
import { headerMenu } from "src/constants/routes/header/header.routes";
import { Avatar, Badge } from "antd";
import { Routes } from "src/constants/routes/routes";
import { useAnimation } from "src/hooks/useAnimation";
import { Box, Typography } from "src/components/ui";

const Header = () => {
  const { products } = useSelector((state: RootState) => state.cart.products);
  const { animateActive, animationInActive, animateOff, animateOn } = useAnimation();

  return (
    <HeaderWrapper>
      <Container>
        <HeaderInfo>
          <HeaderCityBlock>
            <EnvironmentOutlined />
            <Typography>Ростов-На-Дону</Typography>
          </HeaderCityBlock>
          <Title level="h1">PRINTSTORES</Title>
          <HeaderActionsBlock>
            <HeaderSearchBlock>
              <Avatar shape="circle" icon={<SearchOutlined onClick={animateActive ? animateOff : animateOn} />} />
              <HeaderSearchInputWrapper
                animationActive={animateActive}
                animationInActive={animationInActive}
              ></HeaderSearchInputWrapper>
            </HeaderSearchBlock>
            <MenuLink href={Routes.CART.href}>
              <Badge count={products.length}>
                <Avatar shape="circle" icon={<ShoppingCartOutlined />} />
              </Badge>
            </MenuLink>
          </HeaderActionsBlock>
        </HeaderInfo>
        <HeaderNavBlock>
          <HeaderMenu menu={headerMenu} />
        </HeaderNavBlock>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
