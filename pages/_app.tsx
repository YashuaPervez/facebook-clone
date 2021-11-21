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

function MyApp({ Component, pageProps }: AppProps) {
  // const [initialDone, setInitialDone] = useState<boolean>(false);
  // const { user, token } = pageProps;

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Layout
        // user={user}
        // token={token}
        // initialDone={initialDone}
        // setInitialDone={setInitialDone}
        >
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
