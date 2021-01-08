import { Box, Container } from "@material-ui/core";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Layout = ({ children, ...rest }) => {
    return (
        <>
            <Header />
            <Box component="main">
                <Container>{children}</Container>
            </Box>
            <Footer />
        </>
    );
};

export default Layout;
