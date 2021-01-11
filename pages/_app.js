import "../styles/globals.css";
import React from "react";

// Removes default focus border because its ugly
import "what-input";
import { AuthProvider } from "react-auth-kit";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider
      authStorageType={"cookie"}
      cookieDomain="localhost"
      cookieSecure="false"
    >
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
