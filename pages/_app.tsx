import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import "antd/dist/antd.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/swiper.scss";
import "../styles/swiper.css";
import { Provider } from "react-redux";
import store from "store/store";

function MyApp({ Component, pageProps }) {
    React.useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return (
        <React.Fragment>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
            </Head>
            <Provider store={store}>
                <CssBaseline />
                <Component {...pageProps} />
            </Provider>
        </React.Fragment>
    );
}

export default MyApp;
