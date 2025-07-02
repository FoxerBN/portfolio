import "../globals.css";
import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StarBackground from "@/components/StarBackground";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio site!",
};

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["500", "200"],
  variable: "--font-source-code-pro",
  display: "swap",
});

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout(props: LayoutProps) {
  const { children, params } = props;
  const { locale } = await params;

  return (
    <html lang={locale} className={sourceCodePro.className}>
      <body className="min-h-screen flex flex-col">
        <div className="contents">
          <StarBackground />
        </div>
        <Header />
        <main className="flex-1 container mx-auto p-4 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}