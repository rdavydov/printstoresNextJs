import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import { Provider } from "react-redux";
import ruRU from "antd/lib/locale-provider/ru_RU";
import { PersistGate } from "redux-persist/integration/react";
import { ConfigProvider } from "antd";
import store, { persistor } from "src/store/store";
import "../styles/preloader.scss";
import "../styles/variables.css";
import "antd/dist/antd.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "../styles/swiper.css";

import LoaderProvider from "src/context/loaderContext/loaderContext";
import { menuService } from "src/api/services/menu/menu.service";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConfigProvider locale={ruRU}>
            <LoaderProvider>
              <CssBaseline />
              <Component {...pageProps} />
            </LoaderProvider>
          </ConfigProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export async function getInitialProps() {
  const { menu } = await menuService.getPageMenu("catalog");
  console.log(menu, "menu");
  return {
    props: { pageProps: { menu } },
  };
}

export default MyApp;
