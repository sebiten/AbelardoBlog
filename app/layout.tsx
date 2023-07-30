import "./globals.css";
import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "Abelardo Blog",
  description: "Created by Sebastian Burgos",
  icons: {
    icon: "/iconabelardoblog.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <div className="container"></div>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6692046911486022"
          crossOrigin="anonymous"
        ></script>

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-66SJ6716WY" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-66SJ6716WY');
        `}
        </Script>
      </head>
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
