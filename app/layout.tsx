import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Footer from "./components/Footer";
import Image from "next/image";
import { Montserrat_Alternates, Montserrat } from "next/font/google";
import NewsletterSubscribe from "./components/Apis/NewsletterSubscribe";
import GoogleAds from "./components/GoogleAds";
import News from "./components/News";
import AsideAds from "./components/AsideAds";

const montserrat_alternates = Montserrat_Alternates({
  variable: "--title-font",
  weight: "700",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--body-font",
  weight: "400",
  preload: false,
  subsets: ["latin"],
});

export const metadata = {
  title: "Abelardo Blog",
  description: "Abelardo-blog",
  icons: {
    icon: "/abelardo-blog.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={` ${montserrat_alternates.variable} ${montserrat.variable} font-body`}
      lang="es-ES"
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6692046911486022"
          crossOrigin="anonymous"
        ></script>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="lazyOnload"
        ></Script>
        <GoogleAds />
        <GoogleAnalytics
          GA_TRACKING_ID={process.env.GA_TRACKING_ID as string}
        />
      </head>
      <body className="dark:bg-slate-800">
        <Navbar />
        {children}
        <AsideAds/>
        <News />
        <NewsletterSubscribe />
        <Footer />
      </body>
    </html>
  );
}
