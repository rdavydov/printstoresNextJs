import React from "react";
import { MenuList, IconMenu, Container } from "src/components/common";
import { FooterWrapper } from "./styles/footer";
import { footerMenu, FooterMenuLabels } from "src/constants/routes/footer/footer.routes";
import { InstagramOutlined, TwitterOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Flex } from "src/components/ui";

const Footer: React.FC = () => (
  <FooterWrapper>
    <Container>
      <Flex justifyContent="space-between" color="muted" padding="50px 0" xs={{ justifyContent: "unset" }}>
        <Flex.Item sm={{ order: 4, span: 12 }}>
          <IconMenu
            title="Подпишитесь на нас"
            subTitle="+7 960 450-60-21"
            iconsMenu={[
              { icon: InstagramOutlined, path: "" },
              { icon: WhatsAppOutlined, path: "" },
              { icon: TwitterOutlined, path: "" },
            ]}
          />
        </Flex.Item>
        <Flex.Item sm={{ mb: 25, span: 4 }} xs={{ span: 6 }}>
          <MenuList title={FooterMenuLabels.HELP} menuItems={footerMenu.HELP} />
        </Flex.Item>
        <Flex.Item sm={{ mb: 25, span: 4 }} xs={{ span: 6 }}>
          <MenuList title={FooterMenuLabels.ABOUT_US} menuItems={footerMenu.ABOUT_US} />
        </Flex.Item>
        <Flex.Item sm={{ mb: 25, span: 4 }} xs={{ span: 12 }}>
          <MenuList title={FooterMenuLabels.LEGAL} menuItems={footerMenu.LEGAL} />
        </Flex.Item>
      </Flex>
    </Container>
  </FooterWrapper>
);

export default Footer;
