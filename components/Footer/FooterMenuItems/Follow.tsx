import React from "react";
import { IFollow } from "../../../types/interfaces/footer.menu.interface";
import { FollowWrapper, IconBox, TextPhone, Title } from "./styled";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import { MenuList } from "../../../reusable-components/styled";

const Follow = ({ phone, title, instagramLink,twitterLink,whatsAppLink }: IFollow) => {
  return (
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
};

export default Follow;
