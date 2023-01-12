import "../styles/globals.css";
import { useState, useEffect, ReactComponentElement } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18nInit from "../translation";
import { useGlobalStore } from "../store/globalStore";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { i18n } = useTranslation();
  const [isReady, setIsReady] = useState<boolean>(false);
  const darkMode = useGlobalStore((state) => state.darkMode);
  useEffect(() => {
    setIsReady(true);
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "en" ? "ltr" : "rtl";
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      {isReady ? (
        <div className={`${darkMode ? "dark" : ""}`}>
          <I18nextProvider i18n={i18nInit}>
            <Component {...pageProps} />
          </I18nextProvider>
        </div>
      ) : (
        <p>loading ...</p>
      )}
    </>
  );
}