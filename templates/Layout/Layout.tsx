
import React from 'react';
import Header from 'components/blocks/Header/Header';
import { Container, InfoBlock, Slider, DropdownHeaderMenu } from 'components/common';
import { menuData } from './dropdown-menu-data';
import { slides } from 'components/common/Slider/slides';
import Footer from 'components/blocks/Footer/Footer';

const Layout: React.FC = ({ children }) => {

    return (
        <>
            <Header />
            <Container>
                <DropdownHeaderMenu menuData={menuData} />
            </Container>
            <Slider slides={slides} />
            <Container>
                {children}
                <InfoBlock />
            </Container>
            <Footer />
        </>
    )

}



export default Layout;