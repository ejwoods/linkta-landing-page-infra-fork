import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import LinktaLogoWithText from "./components/LinktaLogoWithText";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linkta",
  description: "Revolutionize your learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header><LinktaLogoWithText /></header>
        <main>{children}</main>
        <footer><Footer /></footer>
      </body>
    </html>
  );
}
