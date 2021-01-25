import { Provider } from "react-redux";
import "what-input";
import { AuthProvider } from "react-auth-kit";
import "../styles/globals.css";
import Head from "next/head";

import store from "../store";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider
        authStorageType={"cookie"}
        cookieDomain="localhost"
        cookieSecure="false"
      >
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
