import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio site!",
};

export const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-code-pro",
  display: "swap",
});

export const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fira-code",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={firaCode.variable}>
      <body className="min-h-screen flex flex-col ">
        <Header />
        <main className="flex-1 container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
