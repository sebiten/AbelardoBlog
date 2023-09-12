import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6692046911486022"
            crossorigin="anonymous"
          ></Script>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-66SJ6716WY"
            strategy="lazyOnload"
          ></Script>
          <Script id="google-analytics" strategy="lazyOnload">
            {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-66SJ6716WY');
        `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
