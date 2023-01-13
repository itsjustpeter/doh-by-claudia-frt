import { css } from "@emotion/react";
import { ReactNode } from "react";
import { Stack } from "@mui/material";
import Head from "next/head";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack width="100%" height="100%">
      <Head>
        <title>{"D'OH"}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      {/* <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=102e2469a54041af4f0bb91a714555dc"
        strategy="afterInteractive"
        onLoad={() => console.log(`kakao api script loaded correctly`)}
      /> */}
      <Stack direction="row" width="100%" height="100%">
        <main css={st.main}>{children}</main>
      </Stack>
    </Stack>
  );
};

const st = {
  main: css`
    width: 100%;
    height: 100%;
  `,
};
