import React from 'react';
import { MenuList, IconMenu, Container } from 'components/common';
import { footerList } from './data/footer.data';
import { FooterWrapper } from './styles/footer';
import { FooterMenu } from './styles/menu';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer: React.FC = () => (
  <FooterWrapper>
    <Container>
      <FooterMenu>
        <IconMenu
          title="Подпишитесь на нас"
          subTitle="+7 960 450-60-21"
          iconsMenu={[
            { icon: InstagramIcon, path: '' },
            { icon: WhatsAppIcon, path: '' },
            { icon: TwitterIcon, path: '' },
          ]}
        />
        <MenuList
          title={footerList.help.title}
          menuItems={footerList.help.items}
        />
        <MenuList
          title={footerList.aboutUs.title}
          menuItems={footerList.aboutUs.items}
        />
        <MenuList
          title={footerList.legal.title}
          menuItems={footerList.legal.items}
        />
      </FooterMenu>
    </Container>
  </FooterWrapper>
);

export default Footer;
