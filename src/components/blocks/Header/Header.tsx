import React from "react";
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
} from "./styled";
import { Container, Paragraph, Title } from "src/components/common";
import HeaderMenu from "./HeaderMenu";
import { headerMenu } from "src/constants/routes/header/header.routes";
import { Avatar, Badge } from "antd";

const Header = () => {
  const { products } = useSelector((state: RootState) => state.cart.products);

  return (
    <HeaderWrapper>
      <Container>
        <HeaderInfo>
          <HeaderCityBlock>
            <EnvironmentOutlined />
            <Paragraph>Ростов-На-Дону</Paragraph>
          </HeaderCityBlock>
          <Title level="h1">PRINTSTORES</Title>
          <HeaderActionsBlock>
            <HeaderSearchBlock>
              <Avatar shape="circle" icon={<SearchOutlined />} />
            </HeaderSearchBlock>
            <Badge count={products.length}>
              <Avatar shape="circle" icon={<ShoppingCartOutlined />} />
            </Badge>
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
