import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <ThemeProvider theme={original}>
        <Head>
          <meta charSet="utf-8" />
          <title>구티의 블로그</title>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://user-images.githubusercontent.com/86397600/236520751-cbe5955c-0ec5-46d8-bc42-130ef3c62a1f.png"
          />
        </Head>
        <div style={{ height: "100vh" }}>
          <Component {...pageProps} />
          <Layout />
        </div>
      </ThemeProvider>
    </>
  );
}
