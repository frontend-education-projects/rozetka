import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>RozetkaUA-home-project</title>
        <script
          src="https://kit.fontawesome.com/699e6f5ea8.js"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="preload"
          href="https://design.rozetka.com.ua/assets/fonts/RozetkaWeb-Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <script
          src="https://kit.fontawesome.com/699e6f5ea8.js"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="preload"
          href="https://design.rozetka.com.ua/assets/fonts/RozetkaWeb-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
