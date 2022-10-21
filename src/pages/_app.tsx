import React from "react";

import { AppProps } from "next/app";

import "../styles/main.css";
import "../styles/prism-a11y-dark.css";
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default appWithTranslation(MyApp);
