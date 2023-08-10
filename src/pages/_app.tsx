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
          <title>{process.env.NEXT_PUBLIC_BLOG_TITLE}</title>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${process.env.NEXT_PUBLIC_BLOG_IMAGE}`}
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
