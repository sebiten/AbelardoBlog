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
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-66SJ6716WY" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-66SJ6716WY');
        `}
        </Script>
      </div>
      <head>
        <Head>
          <link rel="icon" href="/abelardo.webp" />
        </Head>
      </head>
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}