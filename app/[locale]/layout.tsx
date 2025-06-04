import "../globals.css";
import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio site!",
};

export const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["500", "200"],
  variable: "--font-source-code-pro",
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <html lang={locale} className={sourceCodePro.className}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}