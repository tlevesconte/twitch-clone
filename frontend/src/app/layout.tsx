import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

const inter = Inter({
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Twitch Clone",
  description: "Change this...",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modals: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-bodyBackgroundColour text-primaryTextDefault">
        <Header />
        {props.children}
        <Footer />
        {props.modals}
      </body>
    </html>
  );
}
