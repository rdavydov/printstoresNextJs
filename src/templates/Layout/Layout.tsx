
import React from 'react';
import Header from 'src/components/blocks/Header/Header';
import { Container, InfoBlock, Slider, DropdownHeaderMenu } from 'src/components/common';
import { menuData } from './dropdown-menu-data';
import { slides } from 'src/components/common/Slider/slides';
import Footer from 'src/components/blocks/Footer/Footer';

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