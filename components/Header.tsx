"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ColorSwitcher from "./ColorSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { Press_Start_2P } from "next/font/google";
import Link from "next/link";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start-2p",
  display: "swap",
});
export default function Header() {
  return (
    <header className="w-full py-4 px-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold relative overflow-hidden shiny-text">
          Richard Tekula
          <span className={`block text-[12px] font-normal ${pressStart2P.className} p-1 shiny-reveal`}>
            Full-Stack Developer
          </span>
        </h1>
        
        <nav className="space-x-2 flex items-center">
        <Link href="https://github.com/FoxerBN" target="_blank"><FontAwesomeIcon className="text-2xl" icon={faGithub} /></Link>
        <LanguageSwitcher />
        <ColorSwitcher />
        </nav>
      </div>
    </header>
  );
}
