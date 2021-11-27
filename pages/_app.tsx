// import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

// Components
import Layout from "../components/Layout";

//
import apolloClient from "../lib/apolloClient";
import store from "../store";
import "../styles/globals.css";
import "../styles/utils.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <div id="backdrop-bottom-placeholder"></div>
        <div id="backdrop-placeholder"></div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
