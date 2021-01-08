import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import { Provider } from "react-redux";
import ruRU from "antd/lib/locale-provider/ru_RU";
import { ConfigProvider } from "antd";
import store from "store/store";
import "antd/dist/antd.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "../styles/swiper.css";

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
                <ConfigProvider locale={ruRU}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ConfigProvider>
            </Provider>
        </React.Fragment>
    );
}

export default MyApp;
