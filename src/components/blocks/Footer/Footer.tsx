import React from "react";
import { MenuList, IconMenu, Container } from "src/components/common";
import { FooterWrapper } from "./styles/footer";
import { FooterMenu } from "./styles/menu";
import { footerMenu, FooterMenuLabels } from "src/constants/routes/footer/footer.routes";
import { InstagramOutlined, TwitterOutlined, WhatsAppOutlined } from "@ant-design/icons";

const Footer: React.FC = () => (
  <FooterWrapper>
    <Container>
      <FooterMenu>
        <IconMenu
          title="Подпишитесь на нас"
          subTitle="+7 960 450-60-21"
          iconsMenu={[
            { icon: InstagramOutlined, path: "" },
            { icon: WhatsAppOutlined, path: "" },
            { icon: TwitterOutlined, path: "" },
          ]}
        />
        <MenuList title={FooterMenuLabels.HELP} menuItems={footerMenu.HELP} />
        <MenuList title={FooterMenuLabels.ABOUT_US} menuItems={footerMenu.ABOUT_US} />
        <MenuList title={FooterMenuLabels.LEGAL} menuItems={footerMenu.LEGAL} />
      </FooterMenu>
    </Container>
  </FooterWrapper>
);

export default Footer;
