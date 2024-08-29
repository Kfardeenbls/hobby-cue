import "./globals.css";
import "../style/common/common.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "@/component/Navbar";
import Head from "next/head";
import BootstrapClient from "@/component/BootstrapClient";
import Footer from "@/component/Footer";
import ScrollToTopButton from "@/component/ScrollUpBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hobby Cue",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        />
        <title>Blog App</title>
      </Head>
      <body className={inter.className}>
        <div className="">
          <Navbar />
          <ScrollToTopButton />
          {children}
          <Footer />
        </div>
        <BootstrapClient />
      </body>
    </html>
  );
}
