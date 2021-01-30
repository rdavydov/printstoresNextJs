import React from 'react';
import { IFollow } from 'types/interfaces/footer.menu.interface';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import { MenuList } from 'components/common/styled';
import { IconBox, TextPhone, Title } from '../styles/menu';

const MenuFollow = ({
  phone,
  title,
  instagramLink,
  twitterLink,
  whatsAppLink,
}: IFollow) => (
  <MenuList>
    <Title>{title}</Title>
    <TextPhone>{phone}</TextPhone>
    <IconBox>
      <InstagramIcon />
      <WhatsAppIcon />
      <TwitterIcon />
    </IconBox>
  </MenuList>
);

export default MenuFollow;
