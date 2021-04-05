import React, { useRef, useState } from "react";
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
import { Container, Title } from "src/components/common";
import HeaderMenu from "./HeaderMenu";
import { headerMenu } from "src/constants/routes/header/header.routes";
import { Avatar } from "antd";
import { Typography } from "src/components/ui";
import BadgeShopping from "src/components/common/BadgeShopping/BadgeShopping";
import OverlaySearch from "../OverlaySearch";

const Header = () => {
  const [visible, setVisible] = useState(false);
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
              <Avatar shape="circle" icon={<SearchOutlined onClick={() => setVisible(true)} />} />
            </HeaderSearchBlock>
            <BadgeShopping />
          </HeaderActionsBlock>
        </HeaderInfo>
        <HeaderNavBlock>
          <HeaderMenu menu={headerMenu} />
        </HeaderNavBlock>
      </Container>
      <OverlaySearch visible={visible} setVisible={setVisible} />
    </HeaderWrapper>
  );
};

export default Header;
