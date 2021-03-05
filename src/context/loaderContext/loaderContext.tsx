import React from "react";
import { Router } from "next/router";
import Preloader from "src/components/common/Preloader/Preloader";

interface LoaderContext {
  loading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
}

export const LoaderContext = React.createContext<LoaderContext>(null);

const LoaderProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = React.useState(false);

  const showLoading = () => {
    setLoading(true);
  };

  const hideLoading = () => {
    setLoading(false);
  };

  React.useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      showLoading();
    });
    Router.events.on("routeChangeComplete", () => {
      hideLoading();
    });
    Router.events.on("routeChangeError", () => {
      hideLoading();
    });

    return () => {
      hideLoading();
    };
  }, []);

  return (
    <LoaderContext.Provider value={{ loading, showLoading, hideLoading }}>
      {children}
      {loading && <Preloader />}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
