import "../styles/global.scss";
import React from "react";
import {
  createApp,
  reportWebVitals,
  withPageEnhancers,
} from "@godaddy/gasket-next";
import { withAuthProvider, withAuthRequired } from "@godaddy/gasket-auth";
import "../layouts/Layout.scss";
import "../component/LeftPanelLayout.css";
import gasket from "@/gasket";

function Layout(props) {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}

const App = createApp({ Layout, initialProps: true });

// Wrap the app with higher-order components
const authRequired = withAuthRequired({
  realm: "jomax",
  gasket,
});
export default withPageEnhancers([authRequired])(App);

export { reportWebVitals };
