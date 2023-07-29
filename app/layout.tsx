import "./globals.css";
import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";
import Head from "next/head";

export const metadata = {
  title: "Abelardo Blog",
  description: "Created by Sebastian Burgos",
  icons: {
    icon: "/abelardo.webp",
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