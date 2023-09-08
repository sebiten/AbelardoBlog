import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Footer from "./components/Footer";
import Image from "next/image";
import { Montserrat_Alternates, Montserrat } from "next/font/google";
import NewsletterSubscribe from "./components/Apis/NewsletterSubscribe";

const montserrat_alternates = Montserrat_Alternates({
  variable: "--title-font",
  weight: "700",
});

const montserrat = Montserrat({
  variable: "--body-font",
  weight: "400",
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
      lang="es"
    >
      <head>
        <script
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <link rel="icon" href="/abelardo-blog.png" />
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        ></Script>
      </head>
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID as string} />
      <body className="dark:bg-slate-800">
        <Navbar />
        <div className="w-full mb-6 text-xl text-gray-700 dark:text-white mx-auto max-w-2xl text-center lg:w-3/4 xl:w-1/2">
          <Image
            src="/abelardo-blog.png"
            className="mx-auto w-auto h-auto mt-4"
            alt="abelardo-blog"
            height={500}
            width={300}
          />
        </div>
        {children}
        <NewsletterSubscribe />
        <Footer />
      </body>
    </html>
  );
}
