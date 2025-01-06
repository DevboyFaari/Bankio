import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Serif, Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/SideBar";


const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter",
});

const ibmPLexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ibm-plex-serif",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bankio",
  description: "Bank of the future",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
