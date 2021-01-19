import React from "react";
import { Container } from "@material-ui/core";
import { follow, footerList } from "./data/footer.data";
import { FooterWrapper } from "./styles/footer";
import { FooterMenu } from "./styles/menu";
import MenuFollow from "./menu/menu-follow";
import { Menu } from "components";

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
                    <Menu
                        title={footerList.help.title}
                        items={footerList.help.items}
                    />
                    <Menu
                        title={footerList.aboutUs.title}
                        items={footerList.aboutUs.items}
                    />
                    <Menu
                        title={footerList.legal.title}
                        items={footerList.legal.items}
                    />
                </FooterMenu>
            </Container>
        </FooterWrapper>
    );
};

export default LayoutFooter;