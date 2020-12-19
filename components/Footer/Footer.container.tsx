import { Container } from "@material-ui/core";
import React from "react";
import { follow, footerList } from "./footer.data";
import AboutUs from "./FooterMenuItems/AboutUs";
import Follow from "./FooterMenuItems/Follow";
import Help from "./FooterMenuItems/Help";
import Legal from "./FooterMenuItems/Legal";
import { FooterMenu } from "./FooterMenuItems/styled";
import { FooterWrapper } from "./styled";

const FooterContainer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterMenu>
          <Follow
            title="Подпишитесь на нас"
            phone={follow.phone}
            instagramLink={follow.instagramm.path}
            twitterLink={follow.twitter.path}
            whatsAppLink={follow.whatsApp.path}
          />
          <Help title={footerList.help.title} items={footerList.help.items} />
          <AboutUs
            title={footerList.aboutUs.title}
            items={footerList.aboutUs.items}
          />
          <Legal
            title={footerList.legal.title}
            items={footerList.legal.items}
          />
        </FooterMenu>
      </Container>
    </FooterWrapper>
  );
};

export default FooterContainer;
