import React from "react";
import { Container } from "@material-ui/core";
import { follow, footerList } from "./data/footer.data";
import { FooterWrapper } from "./styles/footer";
import { FooterMenu } from "./styles/menu";
import MenuFollow from "./menu/menu-follow";
import MenuAboutUs from "./menu/menu-about-us";
import MenuHelp from "./menu/menu-help";
import MenuLegal from "./menu/menu-legal";

const LayoutFooter: React.FC = () => {
    return (
        <FooterWrapper>
            <Container>
                <FooterMenu>
                    <MenuFollow
                        title="Подпишитесь на нас"
                        phone={follow.phone}
                        instagramLink={follow.instagramm.path}
                        twitterLink={follow.twitter.path}
                        whatsAppLink={follow.whatsApp.path}
                    />
                    <MenuHelp
                        title={footerList.help.title}
                        items={footerList.help.items}
                    />
                    <MenuAboutUs
                        title={footerList.aboutUs.title}
                        items={footerList.aboutUs.items}
                    />
                    <MenuLegal
                        title={footerList.legal.title}
                        items={footerList.legal.items}
                    />
                </FooterMenu>
            </Container>
        </FooterWrapper>
    );
};

export default LayoutFooter;
