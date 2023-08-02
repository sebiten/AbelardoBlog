import "./globals.css";
import Navbar from "./components/Navbar";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Abelardo Blog",
  description: "Blog de Abelardo",
  icons: {
    icon: "/cat.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6692046911486022"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        ></Script>
      </head>
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID as string} />
      <body className="dark:bg-slate-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
